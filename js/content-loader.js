import { CONFIG } from "./config.js";
import { CONTENIDO_RESPALDO } from "../data/contenido-respaldo.js";
import { parseCSV } from "./csv-parser.js";

function createTimeoutSignal(timeoutMs) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

    return {
        signal: controller.signal,
        clear: () => window.clearTimeout(timeoutId)
    };
}

export async function loadContent() {
    const csvUrl = CONFIG.GOOGLE_SHEETS_CSV_URL.trim();

    if (!csvUrl) {
        return {
            items: CONTENIDO_RESPALDO,
            source: "respaldo",
            message: "Se muestran las orientaciones de respaldo."
        };
    }

    const timeout = createTimeoutSignal(CONFIG.CSV_TIMEOUT_MS);

    try {
        const response = await fetch(csvUrl, {
            method: "GET",
            cache: "no-store",
            signal: timeout.signal
        });

        if (!response.ok) {
            throw new Error(`La hoja respondió con el estado ${response.status}.`);
        }

        const csvText = await response.text();
        const items = parseCSV(csvText);

        if (items.length === 0) {
            throw new Error("La hoja no contiene filas con materiales válidos.");
        }

        return {
            items,
            source: "online",
            message: "Materiales actualizados desde Google Sheets."
        };
    } catch (error) {
        console.warn("No se pudo cargar Google Sheets:", error);

        return {
            items: CONTENIDO_RESPALDO,
            source: "respaldo",
            message:
                "No se pudo cargar la hoja. Se muestran las orientaciones de respaldo."
        };
    } finally {
        timeout.clear();
    }
}