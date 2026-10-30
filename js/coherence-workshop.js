const OBJECTIVE_VERBS = [
    "analizar",
    "caracterizar",
    "comparar",
    "comprender",
    "describir",
    "determinar",
    "examinar",
    "explorar",
    "identificar",
    "interpretar",
    "establecer"
];

const EXAMPLE = {
    problem:
        "En un grupo de primer ciclo se han reportado experiencias distintas de interacción entre estudiantes con trayectorias culturales diversas. El equipo debe verificar y documentar si esta situación ocurre; no se presenta como un hecho probado.",
    question:
        "¿Cómo describen estudiantes de primer ciclo sus experiencias de interacción intercultural en los espacios de convivencia universitaria durante [periodo]?",
    objective:
        "Comprender cómo describen estudiantes de primer ciclo sus experiencias de interacción intercultural en los espacios de convivencia universitaria durante [periodo].",
    approach: "qualitative",
    concept: "Interacción intercultural",
    dimension: "Situaciones que facilitan o dificultan la interacción, por definir con fuentes",
    evidence: "Relatos sobre experiencias de interacción",
    method: "interview",
    scale: "none"
};

function makeElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined && text !== null) {
        element.textContent = text;
    }

    return element;
}

function makeField(labelText, id, options = {}) {
    const wrapper = makeElement("div", "activity-field");
    const label = makeElement("label", "", labelText);
    label.htmlFor = id;

    let control;

    if (options.select) {
        control = document.createElement("select");
        options.select.forEach((option) => {
            const optionElement = makeElement("option", "", option.label);
            optionElement.value = option.value;
            control.append(optionElement);
        });
    } else if (options.textarea) {
        control = document.createElement("textarea");
        control.rows = options.rows || 3;
        control.placeholder = options.placeholder || "";
    } else {
        control = document.createElement("input");
        control.type = "text";
        control.placeholder = options.placeholder || "";
    }

    control.id = id;
    control.name = id;

    if (options.required) {
        control.required = true;
    }

    wrapper.append(label, control);

    if (options.help) {
        wrapper.append(makeElement("small", "field-help", options.help));
    }

    return { wrapper, control };
}

function addFeedbackItem(list, kind, text) {
    const item = makeElement("li", `feedback-item feedback-${kind}`, text);
    list.append(item);
}

function buildPlainMatrix(values, labels) {
    return [
        "TALLER DE COHERENCIA: RESUMEN DE LA MATRIZ",
        `Situación problemática: ${values.problem || "Pendiente"}`,
        `Pregunta general: ${values.question || "Pendiente"}`,
        `Objetivo general: ${values.objective || "Pendiente"}`,
        `Enfoque elegido: ${labels.approach}`,
        `${labels.concept}: ${values.concept || "Pendiente"}`,
        `${labels.dimension}: ${values.dimension || "Pendiente"}`,
        `${labels.evidence}: ${values.evidence || "Pendiente"}`,
        `Técnica o instrumento: ${labels.method}`,
        values.scale !== "none" ? `Tipo de escala considerada: ${labels.scale}` : "",
        "",
        "Este resumen es un ejercicio didáctico. Debe revisarse con la guía, la rúbrica y las indicaciones del docente."
    ]
        .filter(Boolean)
        .join("\n");
}

export function renderCoherenceWorkshop(container) {
    const heading = makeElement("header", "section-heading");
    heading.append(makeElement("span", "section-number", "✦"));

    const headingText = makeElement("div");
    headingText.append(makeElement("p", "eyebrow", "Actividad interactiva"));
    headingText.append(makeElement("h2", "", "Taller de coherencia"));
    headingText.append(
        makeElement(
            "p",
            "",
            "Construye una primera relación entre la situación problemática, la pregunta, el objetivo y los componentes de la matriz."
        )
    );

    heading.append(headingText);
    container.append(heading);

    const intro = makeElement("section", "activity-intro");
    intro.append(makeElement("h3", "", "¿Qué vas a hacer?"));
    intro.append(
        makeElement(
            "p",
            "",
            "Completa los campos y observa cómo se organiza tu propuesta en una matriz de trabajo. La actividad te ayudará a revisar correspondencias; no reemplaza la revisión del docente ni el formato oficial."
        )
    );

    const exampleButton = makeElement(
        "button",
        "button button-secondary",
        "Cargar ejemplo didáctico"
    );
    exampleButton.type = "button";
    intro.append(exampleButton);
    container.append(intro);

    const form = makeElement("form", "activity-form");
    form.noValidate = true;

    const problemField = makeField(
        "1. Situación problemática",
        "workshop-problem",
        {
            textarea: true,
            rows: 4,
            required: true,
            placeholder:
                "Describe qué situación se estudiará, en qué contexto ocurre y qué falta comprender.",
            help:
                "Distingue lo que está respaldado por fuentes de lo que todavía necesitas indagar."
        }
    );

    const questionField = makeField(
        "2. Pregunta general de investigación",
        "workshop-question",
        {
            textarea: true,
            rows: 3,
            required: true,
            placeholder: "¿Qué busca conocer el equipo?",
            help:
                "Debe ser clara, delimitada, posible de responder y no anticipar un resultado."
        }
    );

    const objectiveField = makeField(
        "3. Objetivo general",
        "workshop-objective",
        {
            textarea: true,
            rows: 3,
            required: true,
            placeholder: "Escribe la acción intelectual que permitirá responder la pregunta.",
            help:
                "El objetivo debe corresponder a la pregunta y usar un verbo compatible con su alcance."
        }
    );

    const approachField = makeField(
        "4. Enfoque que el equipo está considerando",
        "workshop-approach",
        {
            select: [
                { value: "qualitative", label: "Cualitativo" },
                { value: "quantitative", label: "Cuantitativo" }
            ],
            help:
                "Selecciona el enfoque que están considerando; confirma la decisión con la guía del curso y el docente."
        }
    );

    const conceptField = makeField(
        "5. Categoría central",
        "workshop-concept",
        {
            required: true,
            placeholder: "Ejemplo cualitativo: interacción intercultural"
        }
    );

    const dimensionField = makeField(
        "6. Subcategoría o tema de indagación",
        "workshop-dimension",
        {
            required: true,
            placeholder: "Ejemplo: situaciones que facilitan o dificultan la interacción"
        }
    );

    const evidenceField = makeField(
        "7. Evidencia que se necesita recoger",
        "workshop-evidence",
        {
            required: true,
            placeholder: "Ejemplo: relatos sobre experiencias de interacción"
        }
    );

    const methodField = makeField(
        "8. Técnica o instrumento que se está considerando",
        "workshop-method",
        {
            select: [
                { value: "interview", label: "Entrevista abierta" },
                { value: "observation", label: "Observación" },
                { value: "questionnaire", label: "Cuestionario" },
                { value: "other", label: "Otro o todavía por definir" }
            ]
        }
    );

    const scaleField = makeField(
        "Escala de respuesta, solo si el diseño y el curso requieren cuestionario",
        "workshop-scale",
        {
            select: [
                { value: "none", label: "No corresponde o todavía no se define" },
                { value: "frequency", label: "Frecuencia: nunca a siempre" },
                { value: "agreement", label: "Acuerdo: en desacuerdo a de acuerdo" },
                { value: "intensity", label: "Intensidad: baja a alta" },
                { value: "other", label: "Otra escala por justificar" }
            ],
            help:
                "Una escala no se elige automáticamente. Debe coincidir con lo que pregunta el ítem y con las indicaciones del curso."
        }
    );

    const approachHint = makeElement("p", "approach-hint");
    const formGrid = makeElement("div", "activity-grid");

    formGrid.append(
        problemField.wrapper,
        questionField.wrapper,
        objectiveField.wrapper,
        approachField.wrapper,
        conceptField.wrapper,
        dimensionField.wrapper,
        evidenceField.wrapper,
        methodField.wrapper,
        scaleField.wrapper
    );

    const actions = makeElement("div", "activity-actions");
    const reviewButton = makeElement("button", "button button-primary", "Revisar correspondencia");
    reviewButton.type = "submit";

    const clearButton = makeElement("button", "button button-quiet", "Limpiar campos");
    clearButton.type = "reset";

    actions.append(reviewButton, clearButton);

    const feedbackRegion = makeElement("section", "feedback-panel");
    feedbackRegion.setAttribute("aria-live", "polite");
    feedbackRegion.setAttribute("aria-atomic", "true");

    form.append(formGrid, approachHint, actions, feedbackRegion);
    container.append(form);

    const matrixSection = makeElement("section", "matrix-preview");
    matrixSection.append(makeElement("h3", "", "Vista previa de tu matriz de trabajo"));
    matrixSection.append(
        makeElement(
            "p",
            "field-help",
            "No es la matriz oficial del curso. Sirve para visualizar si las decisiones se relacionan."
        )
    );

    const matrixContainer = makeElement("div", "table-scroll");
    const matrixTable = document.createElement("table");
    matrixTable.className = "alignment-table";
    matrixTable.setAttribute("aria-label", "Vista previa de correspondencia");

    const tableBody = document.createElement("tbody");
    matrixTable.append(tableBody);
    matrixContainer.append(matrixTable);

    const copyButton = makeElement("button", "button button-secondary", "Copiar resumen");
    copyButton.type = "button";

    const copyStatus = makeElement("p", "copy-status");
    copyStatus.setAttribute("aria-live", "polite");

    matrixSection.append(matrixContainer, copyButton, copyStatus);
    container.append(matrixSection);

    const fields = {
        problem: problemField.control,
        question: questionField.control,
        objective: objectiveField.control,
        approach: approachField.control,
        concept: conceptField.control,
        dimension: dimensionField.control,
        evidence: evidenceField.control,
        method: methodField.control,
        scale: scaleField.control
    };

    function getLabels() {
        const isQualitative = fields.approach.value === "qualitative";
        const methodLabel =
            fields.method.options[fields.method.selectedIndex]?.textContent || "Por definir";
        const scaleLabel =
            fields.scale.options[fields.scale.selectedIndex]?.textContent || "No corresponde";

        return {
            approach: isQualitative ? "Cualitativo" : "Cuantitativo",
            concept: isQualitative ? "Categoría central" : "Variable o constructo",
            dimension: isQualitative ? "Subcategoría o foco" : "Dimensión",
            evidence: isQualitative ? "Evidencia o aspecto por indagar" : "Indicador",
            method: methodLabel,
            scale: scaleLabel
        };
    }

    function updateApproachFields() {
        const isQualitative = fields.approach.value === "qualitative";

        conceptField.wrapper.querySelector("label").textContent = isQualitative
            ? "5. Categoría central"
            : "5. Variable o constructo";

        conceptField.control.placeholder = isQualitative
            ? "Ejemplo: interacción intercultural"
            : "Escribe la variable o constructo respaldado por la teoría.";

        dimensionField.wrapper.querySelector("label").textContent = isQualitative
            ? "6. Subcategoría o tema de indagación"
            : "6. Dimensión";

        dimensionField.control.placeholder = isQualitative
            ? "Ejemplo: situaciones que facilitan o dificultan la interacción"
            : "Escribe una dimensión sustentada en las bases teóricas.";

        evidenceField.wrapper.querySelector("label").textContent = isQualitative
            ? "7. Evidencia o aspecto que se necesita explorar"
            : "7. Indicador que se necesita observar o medir";

        evidenceField.control.placeholder = isQualitative
            ? "Ejemplo: relatos sobre experiencias de interacción"
            : "Describe una manifestación observable o medible de la dimensión.";

        if (isQualitative) {
            approachHint.textContent =
                "En el enfoque cualitativo, organiza la matriz con categorías o subcategorías y evidencias que permitan comprender experiencias. No fuerces indicadores ni escalas Likert.";
            scaleField.wrapper.hidden = true;

            fields.method.innerHTML = "";
            [
                { value: "interview", label: "Entrevista abierta" },
                { value: "observation", label: "Observación" },
                { value: "group", label: "Conversación o grupo focal" },
                { value: "other", label: "Otro o todavía por definir" }
            ].forEach((option) => {
                const optionElement = makeElement("option", "", option.label);
                optionElement.value = option.value;
                fields.method.append(optionElement);
            });

            fields.method.value = "interview";
        } else {
            approachHint.textContent =
                "En el enfoque cuantitativo, revisa la correspondencia entre variable, dimensión, indicador e instrumento. Un cuestionario o escala solo se incorpora si el diseño y la consigna lo requieren.";
            scaleField.wrapper.hidden = fields.method.value !== "questionnaire";

            fields.method.innerHTML = "";
            [
                { value: "questionnaire", label: "Cuestionario" },
                { value: "record", label: "Ficha o registro" },
                { value: "interview", label: "Entrevista complementaria" },
                { value: "other", label: "Otro o todavía por definir" }
            ].forEach((option) => {
                const optionElement = makeElement("option", "", option.label);
                optionElement.value = option.value;
                fields.method.append(optionElement);
            });

            fields.method.value = "questionnaire";
        }

        updateMatrix();
    }

    function readValues() {
        return {
            problem: fields.problem.value.trim(),
            question: fields.question.value.trim(),
            objective: fields.objective.value.trim(),
            approach: fields.approach.value,
            concept: fields.concept.value.trim(),
            dimension: fields.dimension.value.trim(),
            evidence: fields.evidence.value.trim(),
            method: fields.method.value,
            scale: fields.scale.value
        };
    }

    function updateMatrix() {
        const values = readValues();
        const labels = getLabels();
        tableBody.replaceChildren();

        const rows = [
            ["Situación problemática", values.problem],
            ["Pregunta general", values.question],
            ["Objetivo general", values.objective],
            ["Enfoque", labels.approach],
            [labels.concept, values.concept],
            [labels.dimension, values.dimension],
            [labels.evidence, values.evidence],
            ["Técnica o instrumento", labels.method]
        ];

        if (values.approach === "quantitative" && values.method === "questionnaire") {
            rows.push(["Escala considerada", labels.scale]);
        }

        rows.forEach(([labelText, value]) => {
            const row = document.createElement("tr");
            const headingCell = makeElement("th", "", labelText);
            headingCell.scope = "row";
            const valueCell = makeElement("td", "", value || "Pendiente de completar");
            row.append(headingCell, valueCell);
            tableBody.append(row);
        });
    }

    function reviewWork(event) {
        event.preventDefault();

        const values = readValues();
        const labels = getLabels();
        const missing = [];

        if (!values.problem) missing.push("Describe la situación problemática.");
        if (!values.question) missing.push("Escribe la pregunta general.");
        if (!values.objective) missing.push("Escribe el objetivo general.");
        if (!values.concept) missing.push(`Completa: ${labels.concept.toLowerCase()}.`);
        if (!values.dimension) missing.push(`Completa: ${labels.dimension.toLowerCase()}.`);
        if (!values.evidence) missing.push(`Completa: ${labels.evidence.toLowerCase()}.`);

        feedbackRegion.replaceChildren();
        feedbackRegion.append(makeElement("h3", "", "Orientaciones para revisar"));

        const feedbackList = makeElement("ul", "feedback-list");

        if (missing.length > 0) {
            missing.forEach((message) => addFeedbackItem(feedbackList, "attention", message));
        } else {
            addFeedbackItem(
                feedbackList,
                "positive",
                "Completaste los componentes principales de esta actividad. Revisa ahora si cada uno responde al anterior."
            );
        }

        if (values.question) {
            const hasQuestionMarks =
                values.question.startsWith("¿") && values.question.trim().endsWith("?");

            addFeedbackItem(
                feedbackList,
                hasQuestionMarks ? "positive" : "attention",
                hasQuestionMarks
                    ? "La pregunta tiene signos de interrogación. Comprueba además que sea delimitada y posible de responder."
                    : "Revisa la redacción de la pregunta y añade los signos de interrogación cuando corresponda."
            );
        }

        if (values.objective) {
            const firstWord = values.objective
                .trim()
                .split(/\s+/)[0]
                .toLowerCase()
                .replace(/[.,;:]/g, "");

            const usesObjectiveVerb = OBJECTIVE_VERBS.includes(firstWord);

            addFeedbackItem(
                feedbackList,
                usesObjectiveVerb ? "positive" : "attention",
                usesObjectiveVerb
                    ? `El objetivo comienza con el verbo “${firstWord}”. Verifica que esa acción responda a la pregunta.`
                    : "Revisa si puedes expresar el objetivo con un verbo compatible con la pregunta, como comprender, describir, explorar, analizar o identificar."
            );
        }

        const causalLanguage =
            /\b(causa|causan|causar|causó|provoca|provocan|provocar|produce|producen|producir|genera|generan|generar)\b/i;

        if (
            causalLanguage.test(values.problem) ||
            causalLanguage.test(values.question) ||
            causalLanguage.test(values.objective)
        ) {
            addFeedbackItem(
                feedbackList,
                "attention",
                "Aparece lenguaje causal. Comprueba que la teoría, la pregunta y el diseño permitan sostener causalidad; una asociación o una exploración de experiencias no la demuestra por sí sola."
            );
        }

        if (values.approach === "qualitative") {
            addFeedbackItem(
                feedbackList,
                "info",
                "Para el enfoque cualitativo, comprueba que las categorías o subcategorías estén sustentadas y que las preguntas abiertas permitan explorar experiencias. No necesitas una escala Likert por defecto."
            );
        } else {
            addFeedbackItem(
                feedbackList,
                "info",
                "Para el enfoque cuantitativo, verifica que la variable, dimensión e indicador tengan sustento teórico y que el instrumento recoja esa evidencia."
            );
        }

        if (
            values.approach === "quantitative" &&
            values.method === "questionnaire" &&
            values.scale !== "none"
        ) {
            addFeedbackItem(
                feedbackList,
                "info",
                "La escala seleccionada debe corresponder a lo que pregunta el ítem: por ejemplo, frecuencia para conductas en un periodo, acuerdo para afirmaciones o intensidad para grados de percepción."
            );
        }

        if (values.approach === "qualitative" && values.method === "questionnaire") {
            addFeedbackItem(
                feedbackList,
                "attention",
                "Un cuestionario no queda descartado automáticamente, pero revisa que corresponda al diseño y a las instrucciones del curso. No confundas una entrevista abierta con un ítem de escala."
            );
        }

        addFeedbackItem(
            feedbackList,
            "info",
            "Esta revisión es orientadora y no evalúa automáticamente el significado de tus respuestas. El equipo debe justificar sus decisiones y contrastarlas con la guía, la rúbrica y el docente."
        );

        feedbackRegion.append(feedbackList);
    }

    function fillExample() {
        fields.problem.value = EXAMPLE.problem;
        fields.question.value = EXAMPLE.question;
        fields.objective.value = EXAMPLE.objective;
        fields.approach.value = EXAMPLE.approach;
        updateApproachFields();
        fields.concept.value = EXAMPLE.concept;
        fields.dimension.value = EXAMPLE.dimension;
        fields.evidence.value = EXAMPLE.evidence;
        fields.method.value = EXAMPLE.method;
        fields.scale.value = EXAMPLE.scale;
        updateMatrix();

        feedbackRegion.replaceChildren(
            makeElement(
                "p",
                "example-reminder",
                "Se cargó un ejemplo didáctico de la guía. Es hipotético y debe verificarse y adaptarse; no representa un hallazgo."
            )
        );
    }

    function resetActivity() {
        window.setTimeout(() => {
            fields.approach.value = "qualitative";
            updateApproachFields();
            feedbackRegion.replaceChildren();
            copyStatus.textContent = "";
            updateMatrix();
        }, 0);
    }

    async function copySummary() {
        const values = readValues();
        const labels = getLabels();
        const summary = buildPlainMatrix(values, labels);

        try {
            await navigator.clipboard.writeText(summary);
            copyStatus.textContent = "Resumen copiado. Puedes pegarlo en tus notas.";
        } catch {
            copyStatus.textContent =
                "No se pudo copiar automáticamente. Selecciona la tabla y cópiala con Ctrl+C.";
        }
    }

    [
        fields.problem,
        fields.question,
        fields.objective,
        fields.concept,
        fields.dimension,
        fields.evidence
    ].forEach((field) => field.addEventListener("input", updateMatrix));

    fields.approach.addEventListener("change", updateApproachFields);

    fields.method.addEventListener("change", () => {
        scaleField.wrapper.hidden =
            fields.approach.value !== "quantitative" ||
            fields.method.value !== "questionnaire";
        updateMatrix();
    });

    fields.scale.addEventListener("change", updateMatrix);

    exampleButton.addEventListener("click", fillExample);
    form.addEventListener("submit", reviewWork);
    form.addEventListener("reset", resetActivity);
    copyButton.addEventListener("click", copySummary);

    updateApproachFields();
    updateMatrix();
}