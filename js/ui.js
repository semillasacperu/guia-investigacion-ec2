import { renderCoherenceWorkshop } from "./coherence-workshop.js";
import { GUIA_DIDACTICA } from "../data/guia-didactica.js";

const SECTIONS = [
    { key: "portada", number: "1", label: "Portada" },
    { key: "introduccion", number: "2", label: "Introducción al problema" },
    { key: "causas-consecuencias", number: "3", label: "Causas y consecuencias" },
    { key: "justificacion", number: "4", label: "Justificación y relevancia" },
    { key: "bases-teoricas", number: "5", label: "Bases teóricas" },
    { key: "ods", number: "6", label: "Objetivos de Desarrollo Sostenible" },
    { key: "matriz-consistencia", number: "7", label: "Matriz de consistencia" },
    { key: "personas-afectadas", number: "8", label: "Personas afectadas" },
    { key: "consentimiento-bitacora", number: "9", label: "Consentimiento y datos" },
    { key: "video", number: "10", label: "Video de investigación" },
    { key: "referencias", number: "11", label: "Referencias" },
    { key: "cantidad-referencias", number: "12", label: "Cantidad de referencias" },
    { key: "bitacora", number: "13", label: "Bitácora de datos" },
    { key: "entrega-exposicion", number: "•", label: "Entrega y exposición" },
    { key: "taller-coherencia", number: "✦", label: "Taller de coherencia" }
];

const sectionNav = document.querySelector("#section-nav");
const sectionContent = document.querySelector("#section-content");
const contentStatus = document.querySelector("#content-status");

function createElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (text !== undefined && text !== null) {
        element.textContent = text;
    }

    return element;
}

function addTextParagraphs(container, text) {
    if (!text) {
        return;
    }

    text
        .split(/\n{2,}/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .forEach((paragraph) => {
            container.append(createElement("p", "", paragraph));
        });
}

function createTextList(items, ordered = false) {
    const list = document.createElement(ordered ? "ol" : "ul");

    (items || []).forEach((text) => {
        list.append(createElement("li", "", text));
    });

    return list;
}

function isSafeWebLink(rawLink) {
    try {
        const parsedUrl = new URL(rawLink);
        return parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:";
    } catch {
        return false;
    }
}

function normalizeText(text) {
    return (text || "")
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, "")
        .trim();
}

function createNavButton(section, isActive) {
    const button = createElement("button", "nav-button");
    button.type = "button";
    button.dataset.sectionKey = section.key;

    if (isActive) {
        button.classList.add("is-active");
        button.setAttribute("aria-current", "page");
    }

    const number = createElement("span", "nav-number", section.number);
    number.setAttribute("aria-hidden", "true");

    const label = createElement("span", "nav-label", section.label);

    button.append(number, label);
    return button;
}

function renderNavigation() {
    sectionNav.replaceChildren();

    SECTIONS.forEach((section, index) => {
        sectionNav.append(createNavButton(section, index === 0));
    });
}

function createContentCard(title, content, options = {}) {
    const card = createElement("article", "material-card");

    if (options.kicker) {
        card.append(createElement("div", "card-kicker", options.kicker));
    }

    card.append(createElement("h3", "", title));

    if (typeof content === "string") {
        addTextParagraphs(card, content);
    } else if (content instanceof Node) {
        card.append(content);
    }

    return card;
}

function createGuideContent(sectionKey) {
    const guide = GUIA_DIDACTICA[sectionKey];

    if (!guide) {
        return null;
    }

    const grid = createElement("div", "material-grid");

    grid.append(
        createContentCard("Fundamento", guide.fundamento, {
            kicker: "Comprende el apartado"
        })
    );

    grid.append(
        createContentCard(
            "Cómo elaborarlo",
            createTextList(guide.pasos, true),
            { kicker: "Ruta de trabajo" }
        )
    );

    if (guide.ejemplo) {
        const exampleBox = createElement("div", "example-box");
        addTextParagraphs(exampleBox, guide.ejemplo);

        grid.append(
            createContentCard("Ejemplo aplicado", exampleBox, {
                kicker: "Caso de colorismo · modelo adaptable"
            })
        );
    }

    grid.append(
        createContentCard("Conexión con el resto del trabajo", guide.conexion, {
            kicker: "Coherencia de la investigación"
        })
    );

    if (guide.prompt) {
        const promptBox = createElement("div", "example-box");
        addTextParagraphs(promptBox, guide.prompt);

        grid.append(
            createContentCard("Prompt sugerido para IA", promptBox, {
                kicker: "Adáptalo a tu tema"
            })
        );
    }

    if (guide.errores?.length) {
        grid.append(
            createContentCard(
                "Errores que conviene evitar",
                createTextList(guide.errores),
                { kicker: "Revisión crítica" }
            )
        );
    }

    if (guide.recursos?.length) {
        const resourcesCard = createElement("article", "material-card");
        resourcesCard.append(
            createElement("div", "card-kicker", "Fuentes oficiales"),
            createElement("h3", "", "Materiales para consultar")
        );

        guide.recursos.forEach((resource) => {
            const paragraph = createElement("p");
            const link = createElement("a", "resource-link", resource.texto);

            if (isSafeWebLink(resource.enlace)) {
                link.href = resource.enlace;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                paragraph.append(link);
                resourcesCard.append(paragraph);
            }
        });

        grid.append(resourcesCard);
    }

    return grid;
}

function createMaterialCard(item) {
    const card = createElement("article", "material-card");
    const type = (item.tipo_recurso || "material").toLowerCase();

    card.append(
        createElement(
            "div",
            "card-kicker",
            type.replaceAll("_", " ")
        )
    );

    card.append(createElement("h3", "", item.titulo || "Material del curso"));

    const indication = createElement("div");
    addTextParagraphs(indication, item.indicacion);
    card.append(indication);

    if (item.ejemplo) {
        const example = createElement("div", "example-box");
        example.append(createElement("strong", "", "Nota del material"));
        addTextParagraphs(example, item.ejemplo);
        card.append(example);
    }

    if (item.enlace && isSafeWebLink(item.enlace)) {
        const link = createElement("a", "resource-link", "Abrir recurso ↗");
        link.href = item.enlace;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.append(link);
    }

    return card;
}

function createSupplementaryMaterials(section, items) {
    const sectionTitle = normalizeText(section.label);

    const additionalItems = items.filter((item) => {
        const sameTitle = normalizeText(item.titulo) === sectionTitle;
        const isBasicGuideCard = (item.tipo_recurso || "guia").toLowerCase() === "guia";

        // Evita repetir en una tarjeta la orientación básica que ahora ya está
        // desarrollada en la guía didáctica local.
        return !(sameTitle && isBasicGuideCard);
    });

    if (additionalItems.length === 0) {
        return null;
    }

    const wrapper = createElement("section", "resource-card");
    wrapper.append(
        createElement("p", "eyebrow", "Materiales complementarios"),
        createElement("h3", "", "Recursos agregados por el responsable del curso")
    );

    const grid = createElement("div", "material-grid");

    additionalItems.forEach((item) => {
        grid.append(createMaterialCard(item));
    });

    wrapper.append(grid);
    return wrapper;
}

function createChecklist(sectionKey, checklistItems = []) {
    const card = createElement("section", "checklist-card");
    card.setAttribute("aria-labelledby", `checklist-${sectionKey}`);

    const heading = createElement("h3", "", "Revisión rápida");
    heading.id = `checklist-${sectionKey}`;

    const description = createElement(
        "p",
        "",
        "Marca cada punto cuando lo hayas revisado. Las marcas se mantienen solo mientras esta página está abierta."
    );

    const list = createElement("ul", "checklist-list");
    const items = checklistItems.length
        ? checklistItems
        : [
            "Revisé las indicaciones de este apartado.",
            "El contenido corresponde al tema de investigación del equipo.",
            "Verifiqué la información con la ficha, rúbrica o material del curso cuando corresponde."
        ];

    items.forEach((text, index) => {
        const listItem = createElement("li", "checklist-item");
        const checkbox = document.createElement("input");
        const id = `check-${sectionKey}-${index}`;

        checkbox.type = "checkbox";
        checkbox.id = id;

        const label = createElement("label", "", text);
        label.htmlFor = id;

        listItem.append(checkbox, label);
        list.append(listItem);
    });

    card.append(heading, description, list);
    return card;
}

function createGeneralNotice() {
    const notice = createElement("aside", "notice-card");
    notice.append(createElement("h3", "", "Recuerda"));

    notice.append(
        createElement(
            "p",
            "",
            "La guía orienta el trabajo, pero la ficha EC2, la rúbrica vigente y las indicaciones del docente determinan los requisitos específicos."
        )
    );

    return notice;
}

function getSectionSubtitle(sectionKey) {
    if (
        sectionKey === "introduccion" ||
        sectionKey === "causas-consecuencias" ||
        sectionKey === "justificacion" ||
        sectionKey === "matriz-consistencia"
    ) {
        return "Extensión indicada: una página.";
    }

    if (sectionKey === "bases-teoricas") {
        return "Extensión indicada: cuatro páginas.";
    }

    if (sectionKey === "video") {
        return "Duración indicada: entre cinco y siete minutos.";
    }

    return "";
}

export function renderApplication(items, source, statusMessage) {
    renderNavigation();
    updateStatus(source, statusMessage);
    sectionContent.setAttribute("aria-busy", "false");
    renderSection("portada", items);
}

export function renderSection(sectionKey, allItems) {
    const section = SECTIONS.find((item) => item.key === sectionKey);

    if (!section) {
        return;
    }

    sectionContent.replaceChildren();
    sectionContent.setAttribute("aria-busy", "false");

    if (sectionKey === "taller-coherencia") {
        renderCoherenceWorkshop(sectionContent);
        return;
    }

    const sectionItems = allItems
        .filter((item) => item.apartado === sectionKey)
        .sort(
            (first, second) =>
                Number(first.orden || 0) - Number(second.orden || 0)
        );

    const heading = createElement("header", "section-heading");
    heading.append(createElement("span", "section-number", section.number));

    const headingText = createElement("div");
    headingText.append(
        createElement("p", "eyebrow", `Apartado ${section.number}`),
        createElement("h2", "", section.label)
    );

    const subtitle = getSectionSubtitle(sectionKey);
    if (subtitle) {
        headingText.append(createElement("p", "", subtitle));
    }

    heading.append(headingText);
    sectionContent.append(heading);

    const guideContent = createGuideContent(sectionKey);

    if (guideContent) {
        sectionContent.append(guideContent);
    } else {
        sectionContent.append(
            createElement(
                "div",
                "empty-card",
                "La orientación de este apartado está pendiente de incorporación."
            )
        );
    }

    const supplementaryMaterials = createSupplementaryMaterials(
        section,
        sectionItems
    );

    if (supplementaryMaterials) {
        sectionContent.append(supplementaryMaterials);
    }

    const checklist = GUIA_DIDACTICA[sectionKey]?.checklist || [];
    sectionContent.append(createChecklist(sectionKey, checklist));

    if (
        sectionKey === "consentimiento-bitacora" ||
        sectionKey === "personas-afectadas"
    ) {
        sectionContent.append(createGeneralNotice());
    }
}

export function updateStatus(source, message) {
    contentStatus.textContent = message;
    contentStatus.classList.remove("is-online", "is-fallback");

    if (source === "online") {
        contentStatus.classList.add("is-online");
    } else {
        contentStatus.classList.add("is-fallback");
    }
}