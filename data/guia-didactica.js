export const GUIA_DIDACTICA = {
    portada: {
        fundamento:
            "La portada identifica el trabajo y a sus integrantes. Debe permitir reconocer el tema, el curso y la participación declarada por cada integrante.",
        pasos: [
            "Escribe el título acordado por el equipo y comprueba que represente el problema y la población delimitada.",
            "Incluye los apellidos y nombres de todos los integrantes, según el formato solicitado.",
            "Registra el porcentaje de trabajo individual de cada integrante. Verifica que la distribución esté acordada por el equipo.",
            "Añade los datos del curso que solicite la ficha EC2 y revisa el formato institucional."
        ],
        ejemplo:
            "Título provisional: “Prácticas discriminatorias por colorismo y bienestar estudiantil en [población por confirmar], [sede], 2026”. La población y la sede deben coincidir con la pregunta y la matriz.",
        conexion:
            "El título debe expresar el mismo tema, población y alcance que la introducción y la matriz. Si cambia la delimitación, revisa también la portada.",
        prompt:
            "Revisa este título de investigación y comprueba si coincide con el problema, la población, el lugar y el periodo confirmados. Señala datos faltantes con [POR CONFIRMAR]. No inventes información.",
        errores: [
            "Usar un título amplio que no identifica el foco del estudio.",
            "Incluir nombres incompletos o porcentajes no acordados.",
            "Presentar como definitiva una población que aún está en discusión."
        ],
        checklist: [
            "El título corresponde al problema delimitado.",
            "Están incluidos todos los integrantes y sus porcentajes acordados.",
            "Los datos de la portada siguen el formato del curso."
        ]
    },

    introduccion: {
        fundamento:
            "La introducción conduce desde el tema general hasta el problema concreto. Conviene distinguir tres niveles: el tema nombra el campo de interés; la situación problemática describe una tensión situada y respaldada por información; el problema investigable delimita qué aspecto se estudiará. Una afirmación sobre la población del equipo requiere evidencia: no debe presentarse como dato propio antes de recolectarlo.",
        pasos: [
            "Define el tema y los conceptos centrales con apoyo de fuentes.",
            "Describe la situación problemática con antecedentes, documentos o registros pertinentes.",
            "Delimita grupo, contexto, lugar y periodo según el alcance que el equipo puede estudiar.",
            "Explica qué se conoce y qué aspecto concreto falta comprender o medir.",
            "Cierra con la pregunta de investigación y el enfoque general del estudio.",
            "Ajusta la extensión a una página y a las indicaciones de la ficha."
        ],
        ejemplo:
            "Tema: colorismo. Situación problemática: valoraciones jerárquicas y tratos diferenciados asociados al tono de piel. Pregunta provisional: “¿Qué relación existe entre las prácticas discriminatorias por colorismo y el bienestar de estudiantes de [población por confirmar], en [sede], durante [periodo]?”. Los corchetes deben resolverse con información confirmada; la pregunta es un ejemplo, no una decisión aprobada.",
        conexion:
            "La pregunta debe conservar el mismo fenómeno, población, lugar y periodo en el título, los objetivos, la matriz, el instrumento y la descripción de participantes.",
        prompt:
            "Con base solo en las fuentes y datos que te proporcionaré, separa tema, situación problemática y problema investigable. Propón una pregunta delimitada. Señala discrepancias con [POR CONFIRMAR]. No inventes datos, citas ni referencias.",
        errores: [
            "Confundir el tema con el problema de investigación.",
            "Afirmar que un grupo vive una experiencia antes de recoger evidencia.",
            "Usar una pregunta sobre toda la universidad si la muestra corresponde solo a una carrera, ciclo o sede.",
            "Presentar una asociación como si demostrara causalidad."
        ],
        checklist: [
            "La situación problemática tiene respaldo identificable.",
            "La pregunta se puede responder con el diseño previsto.",
            "La población y el periodo coinciden con los demás apartados.",
            "La extensión respeta la indicación del curso."
        ]
    },

    "causas-consecuencias": {
        fundamento:
            "Este apartado organiza factores vinculados con el problema y posibles consecuencias. La palabra “causa” implica una explicación que necesita evidencia suficiente. Un estudio correlacional transversal puede examinar asociaciones, pero por sí solo no demuestra causalidad. Distingue hallazgos previos, hipótesis teóricas y aspectos que el equipo todavía investigará.",
        pasos: [
            "Identifica factores o mecanismos que la literatura relaciona con el problema.",
            "Separa los niveles de análisis pertinentes, por ejemplo, social, cultural, interpersonal o institucional.",
            "Relaciona cada factor y consecuencia con una fuente o indica que se trata de una hipótesis por explorar.",
            "Utiliza expresiones prudentes como “se ha asociado”, “podría relacionarse” o “la literatura examina”.",
            "Incluye solo factores y consecuencias vinculados con el alcance del trabajo.",
            "Ajusta la extensión a una página, según la ficha."
        ],
        ejemplo:
            "En el caso del colorismo, podrían examinarse discursos que asocian belleza o estatus con ciertos tonos de piel, comentarios interpersonales y prácticas institucionales. La literatura podría orientar preguntas sobre autoestima, bienestar, relaciones o participación académica. El equipo no debe afirmar que ocurrieron con una frecuencia determinada entre sus estudiantes sin haberlo investigado.",
        conexion:
            "Los factores incluidos deben relacionarse con los conceptos o dimensiones de la matriz. Un supuesto sin fuente que no será investigado no debe transformarse en pregunta, indicador o conclusión.",
        prompt:
            "Organiza los factores y posibles consecuencias del problema usando las fuentes proporcionadas. Para cada elemento indica nivel, afirmación prudente, evidencia y si es antecedente o aspecto por investigar. Evita afirmar causalidad no demostrada.",
        errores: [
            "Afirmar que el problema provoca un resultado en la población antes de analizar datos.",
            "Presentar hipótesis del equipo como hechos constatados.",
            "Incluir consecuencias que no se relacionan con la pregunta o los objetivos."
        ],
        checklist: [
            "Cada afirmación tiene fuente o está identificada como hipótesis.",
            "El lenguaje corresponde al diseño de investigación.",
            "El apartado se relaciona con la matriz y el alcance del trabajo."
        ]
    },

    justificacion: {
        fundamento:
            "La justificación explica por qué se realiza el estudio, qué conocimiento podría aportar y a quién podría ser útil. Puede abordar relevancia social, académica, práctica o metodológica, siempre con un alcance proporcional a la investigación. La importancia del tema debe argumentarse con evidencias y destinatarios concretos.",
        pasos: [
            "Identifica la necesidad o el vacío que hace pertinente el estudio y respáldalo.",
            "Explica qué aporte académico se espera.",
            "Señala quiénes podrían utilizar el conocimiento producido.",
            "Describe un uso potencial de los resultados y sus límites.",
            "Comprueba que la justificación sea compatible con la población, las variables o categorías y el diseño.",
            "Ajusta la extensión a una página, según la ficha."
        ],
        ejemplo:
            "El estudio podría aportar información situada sobre cómo estudiantes de [población confirmada] perciben prácticas vinculadas al tono de piel y cómo estas se relacionan con dimensiones del bienestar sustentadas teóricamente. Los resultados podrían orientar futuras conversaciones institucionales, pero no demostrarían por sí solos la eficacia de una intervención ni representarían a grupos fuera de la muestra.",
        conexion:
            "La pregunta determina qué conocimiento puede producirse; los objetivos precisan ese aporte y la población indica a quiénes se refieren los resultados. La justificación no debe prometer más de lo que el diseño permite.",
        prompt:
            "Redacta una justificación con relevancia social, aporte académico y utilidad potencial. Usa únicamente las fuentes proporcionadas, limita las afirmaciones al alcance del diseño e identifica la evidencia que falta. No prometas resolver el problema.",
        errores: [
            "Prometer que el estudio eliminará o resolverá el problema.",
            "Afirmar beneficios para personas que no forman parte del alcance.",
            "Repetir que el tema es importante sin explicar por qué ni para quién."
        ],
        checklist: [
            "Se explica el aporte esperado y quién podría utilizarlo.",
            "Las afirmaciones están respaldadas.",
            "Se diferencia utilidad potencial de impacto comprobado."
        ]
    },

    "bases-teoricas": {
        fundamento:
            "Las bases teóricas definen los conceptos del estudio y sintetizan el conocimiento pertinente. Los antecedentes se comparan por su pregunta, población, método, hallazgos y límites; no se presentan como una sucesión de resúmenes. Las dimensiones de la matriz deben derivarse de conceptos y evidencias, no de una subdivisión improvisada. La extensión indicada para este apartado es de cuatro páginas.",
        pasos: [
            "Define los términos centrales con fuentes académicas y explica cómo se usarán en el estudio.",
            "Sintetiza antecedentes nacionales e internacionales: pregunta, población, método, hallazgo y limitación.",
            "Justifica cada variable, categoría o dimensión mediante teoría o evidencia.",
            "Explica las relaciones conceptuales que el estudio examinará, sin presentarlas como resultados.",
            "Concluye con una síntesis que conecte la teoría con la matriz."
        ],
        ejemplo:
            "Esquema orientador para el caso: 2. Bases teóricas; 2.1 Antecedentes de investigación; 2.1.1 Estudios sobre colorismo y educación superior; 2.1.2 Estudios sobre discriminación, tono de piel y bienestar; 2.2 Conceptos centrales; 2.3 Prácticas discriminatorias por colorismo; 2.3.1 Dimensión ideológico-cultural, 2.3.2 dimensión interpersonal y 2.3.3 dimensión institucional-estructural; 2.4 Bienestar y dimensiones que el equipo logre fundamentar; 2.5 Relación conceptual entre los constructos; 2.6 Síntesis y enlace con la matriz. Es un índice posible: cada subtítulo debe desarrollarse con fuentes y ajustarse a la rúbrica.",
        conexion:
            "La definición teórica de una variable o categoría debe preceder a su uso en la matriz. Cada dimensión necesita sustento y debe conectarse con indicadores, técnicas o instrumentos pertinentes. Si las facetas propuestas para bienestar no forman un constructo defendible, se debe revisar la matriz.",
        prompt:
            "Elabora un esquema de cuatro páginas para las bases teóricas del proyecto. Para cada concepto y dimensión señala qué fuente lo respalda, qué aporta y cómo se conecta con la matriz. Compara antecedentes por población y método. Marca lo que carezca de sustento como [PENDIENTE DE FUNDAMENTAR]. No inventes referencias.",
        errores: [
            "Enumerar autores sin comparar sus aportes.",
            "Confundir antecedentes con definiciones teóricas.",
            "Presentar dimensiones propuestas por el equipo como una escala validada.",
            "Copiar dimensiones de otro modelo sin justificar su pertinencia."
        ],
        checklist: [
            "Cada concepto central tiene una fuente académica identificable.",
            "Cada dimensión está fundamentada.",
            "Los antecedentes se comparan y conservan sus límites.",
            "La extensión y organización siguen la ficha y la rúbrica."
        ]
    },

    ods: {
        fundamento:
            "La relación con los Objetivos de Desarrollo Sostenible debe argumentarse conectando el propósito del estudio con metas oficiales concretas. Mencionar el nombre de un ODS no demuestra que la investigación contribuya directamente a cumplirlo. El trabajo puede producir información pertinente sin medir un impacto global.",
        pasos: [
            "Selecciona tres ODS pertinentes para el problema y la población.",
            "Consulta sus metas en el portal oficial de Naciones Unidas.",
            "Explica qué aspecto de la pregunta o del propósito se relaciona con cada meta.",
            "Distingue afinidad temática de impacto demostrado.",
            "No agregues una variable a la matriz únicamente por mencionar un ODS."
        ],
        ejemplo:
            "Para el caso del colorismo podrían evaluarse, si la argumentación lo sustenta, el ODS 10 y su meta 10.2 sobre inclusión social; el ODS 4 y la meta 4.7; y el ODS 16 y la meta 16.7 sobre decisiones inclusivas. Son opciones ilustrativas, no obligatorias. El equipo debe revisar el texto oficial de cada meta y justificar su elección.",
        conexion:
            "La relación con los ODS debe ser compatible con el problema, la población y lo que realmente mide o explora el estudio. Si el trabajo recoge percepciones, no debe afirmar que evalúa políticas institucionales sin evidencia para ello.",
        prompt:
            "Sugiere tres ODS pertinentes al proyecto. Verifica sus metas en el portal oficial de Naciones Unidas y explica la relación con la pregunta, la población y el aporte real del estudio. Distingue lo que puede afirmarse de lo que no. No inventes metas.",
        errores: [
            "Afirmar que la investigación cumple una meta global por mencionar el ODS.",
            "Nombrar un objetivo sin relacionarlo con una meta concreta.",
            "Atribuir impactos que el diseño no mide."
        ],
        checklist: [
            "Se seleccionan tres ODS relacionados con el tema.",
            "Cada relación se conecta con una meta oficial.",
            "Se diferencia aporte potencial de impacto comprobado."
        ],
        recursos: [
            {
                texto: "Consultar los Objetivos de Desarrollo Sostenible en el sitio oficial de Naciones Unidas",
                enlace: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/"
            }
        ]
    },

    "matriz-consistencia": {
        fundamento:
            "La matriz resume la coherencia lógica de la investigación y se revisa durante todo el proceso. Debe conectar problema, preguntas, objetivos, hipótesis cuando correspondan, variables o categorías, dimensiones, indicadores, método, instrumento y análisis. En estudios cualitativos, organiza preguntas, categorías, participantes, técnicas y estrategia de análisis sin forzar una operacionalización numérica.",
        pasos: [
            "Escribe la pregunta general y fija población, lugar y periodo.",
            "Formula el objetivo general con una acción compatible con la pregunta y el diseño.",
            "Deriva preguntas y objetivos específicos que mantengan correspondencia.",
            "Define variables o categorías y justifica las dimensiones con las bases teóricas.",
            "Conecta cada dimensión con indicadores, preguntas de entrevista o ítems, según el enfoque.",
            "Indica técnica, instrumento y análisis previstos.",
            "Lee cada fila horizontalmente y cada columna verticalmente para encontrar rupturas."
        ],
        ejemplo:
            "Ruta cuantitativa provisional: prácticas discriminatorias por colorismo (X) y bienestar (Y), con dimensiones solo si el marco teórico las sostiene; cada dimensión debe conducir a indicadores y a un instrumento compatible. Ruta cualitativa: pregunta, objetivos, categorías y subcategorías, participantes, técnica, instrumento y estrategia interpretativa. En ambos casos, la población y el periodo deben conservarse en todos los componentes.",
        conexion:
            "La matriz relaciona los apartados del trabajo. Si cambia la población, la pregunta, un constructo o el instrumento, revisa también título, introducción, objetivos, participantes, bitácora y análisis. X₁, X₂ y X₃ pueden nombrar dimensiones de X si la teoría lo sostiene; no se convierten automáticamente en variables independientes.",
        prompt:
            "Audita la matriz adjunta fila por fila. Identifica inconsistencias, información faltante y conexiones débiles entre dimensión, indicador, instrumento y análisis. Propón ajustes provisionales sin inventar datos. Distingue variables de dimensiones y adapta la revisión al enfoque cualitativo o cuantitativo.",
        errores: [
            "Completar la matriz al final copiando términos que no coinciden.",
            "Tratar dimensiones X₁, X₂ y X₃ como variables independientes sin justificarlo.",
            "Incluir indicadores sin instrumento o instrumentos sin vínculo con objetivos.",
            "Forzar categorías cualitativas a una escala numérica."
        ],
        checklist: [
            "Pregunta, objetivo, población, lugar y periodo son coherentes.",
            "Cada indicador se conecta con una técnica o instrumento.",
            "El análisis puede responder a las preguntas y objetivos.",
            "Las hipótesis solo se incluyen cuando corresponden al diseño."
        ]
    },

    "personas-afectadas": {
        fundamento:
            "La población es el conjunto de unidades que cumplen los criterios del estudio; la muestra es el subconjunto que se selecciona. La caracterización debe incluir solo información pertinente para delimitar participantes y responder la pregunta. Recoger datos personales o sensibles requiere justificación y medidas de protección.",
        pasos: [
            "Define la unidad de análisis y los criterios de inclusión y exclusión.",
            "Confirma población, carrera, ciclo, sede y periodo con una fuente institucional.",
            "Describe edad, género u otras características solo cuando sean necesarias para el estudio.",
            "Explica cómo se seleccionarán participantes y, si corresponde, cómo se determinará el tamaño muestral.",
            "Limita las conclusiones a la población que el diseño realmente representa."
        ],
        ejemplo:
            "La guía señala una discrepancia del borrador: en algunos lugares se menciona a estudiantes de toda la universidad y en otros a estudiantes de segundo ciclo de Psicología de la sede Ate. También aparecen N = 380 y n = 200 como cifras del borrador. No deben presentarse como datos confirmados hasta verificar población, periodo y procedimiento con el equipo y el docente.",
        conexion:
            "La pregunta debe referirse a la población que efectivamente se estudiará. La matriz, el instrumento y las conclusiones deben usar el mismo alcance. Una muestra por conveniencia no debe describirse como aleatoria.",
        prompt:
            "Revisa el borrador y organiza una ficha de población, muestra, criterios y características pertinentes. Separa datos citados de datos confirmados. Señala discrepancias con [POR CONFIRMAR]. No inventes cifras ni información institucional.",
        errores: [
            "Usar población y muestra como si fueran sinónimos.",
            "Llamar aleatoria a una selección realizada por facilidad.",
            "Recolectar identificadores o datos sensibles que no se necesitan.",
            "Generalizar resultados a una población mayor que la representada."
        ],
        checklist: [
            "La población coincide con la pregunta y la matriz.",
            "El procedimiento de selección se puede explicar.",
            "Las características registradas son pertinentes y necesarias."
        ]
    },

    "consentimiento-bitacora": {
        fundamento:
            "La participación debe ser voluntaria e informada. La persona debe comprender el propósito, las actividades, el uso de sus respuestas y su derecho a no responder o retirarse según el protocolo aplicable. La autorización para participar no equivale necesariamente a la autorización para grabar o difundir imagen y voz.",
        pasos: [
            "Utiliza el consentimiento institucional vigente y no modifiques sus cláusulas sin autorización.",
            "Explica el propósito y las actividades en un lenguaje comprensible antes de invitar a participar.",
            "Solicita por separado los permisos de grabación o difusión cuando el formato lo requiera.",
            "Usa códigos y guarda identificadores por separado cuando sea posible.",
            "Consulta al docente si participarán menores u otros grupos que requieran salvaguardas especiales.",
            "Registra en la bitácora solo la información solicitada por el formato oficial."
        ],
        ejemplo:
            "Una persona puede aceptar responder preguntas para una actividad y no autorizar que su rostro o voz aparezcan en YouTube. El equipo debe respetar esa decisión y utilizar los formatos institucionales indicados; la guía no sustituye al consentimiento oficial.",
        conexion:
            "El consentimiento, la técnica de recolección y la protección de datos forman parte del procedimiento metodológico. No se debe confundir el permiso para responder un cuestionario con el consentimiento de una entrevista ni con la autorización de difusión audiovisual.",
        prompt:
            "Revisa el consentimiento institucional adjunto sin reescribir sus cláusulas. Indica qué información debe explicar el equipo y qué permisos requiere para participar, grabar o publicar. No solicites ni incluyas datos personales.",
        errores: [
            "Grabar primero y pedir autorización después.",
            "Prometer anonimato en un video donde el rostro será visible.",
            "Publicar datos identificables o conservarlos sin necesidad.",
            "Usar un formato desactualizado o modificarlo sin autorización."
        ],
        checklist: [
            "La persona comprende el propósito y el uso de sus datos.",
            "Se cuenta con permiso específico para grabar y difundir cuando corresponde.",
            "Los datos se minimizan y se mantienen protegidos."
        ]
    },

    video: {
        fundamento:
            "El video de la EC2 es un producto comunicativo que evidencia el trabajo del equipo. Una entrevista breve para el video no sustituye automáticamente al instrumento de investigación. Las preguntas deben ser neutrales, comprensibles y no presuponer experiencias.",
        pasos: [
            "Planifica una duración de cinco a siete minutos e incluye portada, curso e integrantes.",
            "Distribuye la participación para que todos los integrantes aparezcan en diferentes escenarios, según la consigna.",
            "Prepara cinco preguntas abiertas y neutrales sobre la problemática.",
            "Presenta la entrevista como testimonio y no como una medida de prevalencia.",
            "Incluye una propuesta o reflexión y cierra con créditos o referencias pertinentes.",
            "Solicita el consentimiento y permiso de grabación y difusión que correspondan.",
            "Publica el video en YouTube según las indicaciones del curso e incorpora el enlace en el trabajo de Canvas."
        ],
        ejemplo:
            "Preguntas posibles sobre colorismo: ¿Qué entiendes por comentarios o tratos relacionados con el tono de piel en espacios universitarios?; ¿En qué situaciones podrían aparecer?; ¿Qué hace que un comentario se perciba como incómodo o discriminatorio?; ¿Qué efectos podrían tener esas situaciones en la convivencia o participación, según lo que conoces u observas?; ¿Qué prácticas podrían favorecer una convivencia respetuosa? Deben adaptarse a la ficha de entrevista institucional.",
        conexion:
            "Las preguntas abiertas del video tienen un propósito comunicativo y no son ítems Likert. Si la investigación usa un cuestionario, debe mantenerse diferenciado del guion del video. Un testimonio individual no demuestra la frecuencia de una experiencia en toda la población.",
        prompt:
            "Diseña un guion de cinco preguntas neutrales para un video de cinco a siete minutos sobre el problema. Incluye presentación, transiciones y cierre. No presupongas experiencias, permite no responder y recuerda que esta entrevista no sustituye al instrumento de investigación.",
        errores: [
            "Pedir a la persona entrevistada que confirme una hipótesis.",
            "Editar un testimonio como si representara a toda la población.",
            "Olvidar el consentimiento para grabar y publicar.",
            "Excluir a integrantes cuando la consigna pide que todos aparezcan."
        ],
        checklist: [
            "La duración está entre cinco y siete minutos.",
            "Incluye portada, curso, equipo, cinco preguntas y propuesta.",
            "Todos los integrantes aparecen según la consigna.",
            "Se cuenta con los permisos necesarios para grabar y publicar."
        ]
    },

    referencias: {
        fundamento:
            "Las citas en el texto identifican de dónde procede una idea y la lista final permite localizar la fuente. Cada cita debe tener una referencia y cada entrada de referencias debe haber sido consultada y citada en el trabajo. APA 7 requiere datos bibliográficos precisos.",
        pasos: [
            "Consulta la fuente original, editorial, DOI o repositorio institucional.",
            "Verifica autoría, año, título, revista o editorial y demás metadatos disponibles.",
            "Comprueba que cada cita autor-año tenga su entrada correspondiente y viceversa.",
            "Aplica el formato APA 7 y presenta el DOI como URL cuando corresponda.",
            "Elimina duplicados y no incluyas fuentes que no hayas consultado."
        ],
        ejemplo:
            "La guía propone antecedentes sobre colorismo en educación superior, discursos sobre racismo y estudios sobre discriminación y bienestar. Antes de citar a Batista-da-Silva (2022), Kogan y Galarza (2017) o Dominguez-Vergara et al. (2026), abre las fuentes y coteja que los datos bibliográficos y la interpretación correspondan al original.",
        conexion:
            "Las fuentes que describen el problema pueden aparecer en la introducción; las que sustentan conceptos y dimensiones deben desarrollarse en las bases teóricas. La bibliografía debe respaldar las decisiones de la matriz.",
        prompt:
            "Audita estas referencias en las páginas editoriales, DOI o repositorios disponibles. Devuelve en APA 7 solo los metadatos confirmados. Señala entradas duplicadas y campos faltantes. No completes datos por inferencia.",
        errores: [
            "Copiar una referencia sin abrir ni consultar la fuente original.",
            "Incluir obras en la lista final que no se citan en el trabajo.",
            "Completar revista, volumen, páginas o DOI mediante conjeturas."
        ],
        checklist: [
            "Las citas y referencias se corresponden en ambas direcciones.",
            "Los metadatos y DOI fueron cotejados.",
            "La bibliografía responde a la rúbrica vigente."
        ]
    },

    "cantidad-referencias": {
        fundamento:
            "La cantidad de referencias no debe suponerse a partir de una recomendación general. La determina la rúbrica vigente o la indicación del docente. La calidad depende de la pertinencia y verificación de las fuentes, no solo de alcanzar un número.",
        pasos: [
            "Consulta la rúbrica y las indicaciones actuales en Canvas.",
            "Registra el número solicitado y cualquier criterio de actualidad o tipo de fuente.",
            "Revisa que cada referencia sea pertinente, verificable y utilizada en el trabajo.",
            "Si la rúbrica no especifica una cantidad, consúltalo antes de cerrar la entrega."
        ],
        ejemplo:
            "Si la rúbrica exige un mínimo, el equipo debe comprobar que el trabajo incluya ese número de fuentes consultadas y citadas. No se debe completar la lista con entradas irrelevantes o no verificadas.",
        conexion:
            "El número de referencias influye en la planificación de las bases teóricas, pero no reemplaza la necesidad de sustentar cada concepto, antecedente o dimensión.",
        prompt:
            "A partir de la rúbrica adjunta, extrae el número de referencias requerido y los criterios aplicables. Si no aparece claramente, indícalo como [CONSULTAR AL DOCENTE]. No infieras requisitos.",
        errores: [
            "Asumir una cantidad no indicada por el curso.",
            "Agregar fuentes solo para alcanzar un número.",
            "Confundir cantidad de fuentes con calidad del sustento."
        ],
        checklist: [
            "Se consultó la rúbrica vigente.",
            "La cantidad exigida está confirmada.",
            "Las fuentes incluidas son pertinentes y fueron consultadas."
        ]
    },

    bitacora: {
        fundamento:
            "La bitácora documenta fuentes, decisiones metodológicas, versiones de instrumentos, tareas y cambios del equipo. Debe completarse en el Excel entregado por el curso. No se sustituye por una plantilla paralela y no es una lista de datos personales.",
        pasos: [
            "Lee los encabezados, instrucciones y validaciones del Excel institucional.",
            "Registra las fuentes consultadas y el aporte de cada una según los campos disponibles.",
            "Anota cambios en la pregunta, población, instrumentos y acuerdos del equipo.",
            "Usa códigos para las respuestas cuando sea posible y protege los identificadores.",
            "Marca la información pendiente o no aplicable sin inventar datos.",
            "Consulta al docente antes de crear campos o modificar el formato."
        ],
        ejemplo:
            "Registro posible, si el formato lo permite: decisión metodológica; población por confirmar; evidencia: el borrador menciona población universitaria general y la matriz menciona estudiantes de segundo ciclo de Psicología, sede Ate; acción: contrastar el alcance con la fuente institucional y acordarlo con el docente. No inventes nombres, contactos ni fechas.",
        conexion:
            "Si se modifica la población, pregunta o instrumento, la bitácora debe registrar la decisión y el equipo debe revisar los elementos relacionados de la matriz y del informe.",
        prompt:
            "Con los encabezados del Excel institucional, explica qué información del proyecto corresponde a cada campo. No crees campos nuevos ni incluyas datos personales. Distingue datos confirmados, datos del borrador e información por verificar.",
        errores: [
            "Crear una plantilla distinta a la oficial.",
            "Completar celdas con datos supuestos.",
            "Guardar nombres de participantes cuando basta un código.",
            "No registrar cambios que afectan la matriz."
        ],
        checklist: [
            "Se usa el archivo Excel entregado por el curso.",
            "Las fuentes y decisiones pueden rastrearse.",
            "Los datos personales se minimizan y se resguardan."
        ]
    },

    "entrega-exposicion": {
        fundamento:
            "La revisión final verifica que el informe, la matriz, la bitácora, el video y la exposición respondan a una misma investigación. La rúbrica y las comunicaciones vigentes del curso determinan los requisitos específicos de entrega.",
        pasos: [
            "Comprueba la coherencia entre problema, pregunta, objetivos, población, instrumento y matriz.",
            "Revisa que las bases teóricas sustenten los conceptos y dimensiones utilizados.",
            "Confirma los formatos oficiales de consentimiento y bitácora.",
            "Verifica el enlace del video, las diapositivas y los archivos que se cargarán en Canvas.",
            "Acuerda quién realizará la carga y confirma la fecha y hora en Canvas.",
            "Prepara la exposición en PowerPoint y la participación de todos los ponentes."
        ],
        ejemplo:
            "Antes de entregar, el equipo puede revisar: población confirmada; dimensiones de bienestar sustentadas; indicadores conectados con instrumentos; entrevista del video diferenciada del cuestionario; consentimiento para difusión; Excel oficial completado; referencias APA 7 cotejadas.",
        conexion:
            "Un cambio de población o método puede afectar el título, la introducción, los objetivos, la matriz, el instrumento, el consentimiento y las conclusiones. Revisa el conjunto antes de subir la versión final.",
        prompt:
            "Revisa la lista de productos de la EC2 y la rúbrica vigente. Elabora una lista de verificación con estado, evidencia y pendiente responsable. No inventes fechas ni requisitos; marca lo que deba confirmarse en Canvas.",
        errores: [
            "Subir archivos incompletos o versiones distintas entre integrantes.",
            "Usar una rúbrica o formato de otro periodo sin confirmarlo.",
            "Dejar para el final la verificación del enlace del video o la bitácora."
        ],
        checklist: [
            "El informe y la matriz presentan la misma población y pregunta.",
            "La bitácora y los formatos corresponden a los del curso.",
            "Los archivos, diapositivas y enlace están listos para Canvas.",
            "Fecha, hora y condiciones de exposición están confirmadas."
        ]
    }
};