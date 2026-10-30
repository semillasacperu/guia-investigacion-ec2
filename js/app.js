import { loadContent } from "./content-loader.js";
import { initializeNavigation } from "./navigation.js";
import { renderApplication, renderSection } from "./ui.js";

async function startApplication() {
    const sectionContent = document.querySelector("#section-content");

    try {
        const result = await loadContent();

        renderApplication(result.items, result.source, result.message);

        initializeNavigation((sectionKey) => {
            renderSection(sectionKey, result.items);
        });
    } catch (error) {
        console.error("Ocurrió un error al iniciar la aplicación:", error);

        sectionContent.setAttribute("aria-busy", "false");
        sectionContent.textContent =
            "No se pudo iniciar la guía. Actualiza la página o consulta con el responsable del curso.";
    }
}

startApplication();