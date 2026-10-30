const REQUIRED_COLUMNS = [
    "apartado",
    "titulo",
    "indicacion",
    "ejemplo",
    "tipo_recurso",
    "enlace",
    "orden"
];

export function parseCSV(csvText) {
    if (typeof csvText !== "string" || csvText.trim() === "") {
        return [];
    }

    const text = csvText.replace(/^\uFEFF/, "");
    const rows = [];
    let row = [];
    let cell = "";
    let insideQuotes = false;

    for (let index = 0; index < text.length; index += 1) {
        const character = text[index];
        const nextCharacter = text[index + 1];

        if (character === '"') {
            if (insideQuotes && nextCharacter === '"') {
                cell += '"';
                index += 1;
            } else {
                insideQuotes = !insideQuotes;
            }

            continue;
        }

        if (character === "," && !insideQuotes) {
            row.push(cell);
            cell = "";
            continue;
        }

        if ((character === "\n" || character === "\r") && !insideQuotes) {
            if (character === "\r" && nextCharacter === "\n") {
                index += 1;
            }

            row.push(cell);
            rows.push(row);
            row = [];
            cell = "";
            continue;
        }

        cell += character;
    }

    row.push(cell);

    if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
    }

    if (rows.length < 2) {
        return [];
    }

    const headers = rows[0].map((header) => header.trim().toLowerCase());
    const missingColumns = REQUIRED_COLUMNS.filter(
        (column) => !headers.includes(column)
    );

    if (missingColumns.length > 0) {
        throw new Error(
            `Faltan columnas requeridas en la hoja: ${missingColumns.join(", ")}`
        );
    }

    const records = rows.slice(1).map((values) => {
        const record = {};

        headers.forEach((header, columnIndex) => {
            record[header] = (values[columnIndex] ?? "").trim();
        });

        return {
            apartado: record.apartado,
            titulo: record.titulo,
            indicacion: record.indicacion,
            ejemplo: record.ejemplo,
            tipo_recurso: record.tipo_recurso || "guia",
            enlace: record.enlace,
            orden: record.orden
        };
    });

    return records.filter((record) => record.apartado && record.titulo);
}