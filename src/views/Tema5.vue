<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Desarrollo de la estrategia
    .cajon_purpura.p-4.mb-5
      .row.align-items-center.justify-content-between
        .col-lg-4
          img(src='@/assets/curso/tema5/t5-f1.svg', alt='T5-F1')
        .col-lg-8
          p La estrategia creativa es un proceso de desarrollo de ideas para la comunicación publicitaria, busca que la interacción entre el cliente y la marca sea lo más efectiva posible. Además, incluye varios elementos: objetivos, target comunicacional y concepto creativo.
    #t_5_1.titulo-segundo
      h2 5.1 Objetivos

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-8
        p Como ya se ha mencionado anteriormente, los objetivos tienen tres elementos básicos, Intención, qué se quiere lograr. Medida, qué porcentaje del objetivo planteado se quiere o se puede obtener. Plazo, en qué tiempo se puede lograr el objetivo planteado teniendo en cuenta los recursos disponibles.
        br
        p Tipo de objetivos, de acuerdo con el post publicado por el sitio web Publicidad y promoción (2010):
      .col-lg-4
        img(src='@/assets/curso/tema5/t5-f2.svg', alt='T5-F2')
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta fondo-purpura-clarito")
      div(titulo="Objetivos de marketing")
        p.mb-5 Básicamente hay tres grandes grupos generales de objetivos de marketing. Estos son:
        .row.align-items-center.justify-content-between.mb-5
          .col-lg-1
          .col-lg-4.pe-5
            img(src='@/assets/curso/tema5/t5-f3.svg', alt='T5-F3').px-5
          .col-lg-6
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 1
                p <b>Comerciales:</b> ganar participación de mercado, obtener más consumidores, generar ventas, etc.
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 2
                p <b>De <i>branding</i>:</b> que se desea hacer con la marca: mejorarla, posicionarla, darla a conocer, fortalecer su <i>brand value</i> o el <i>brand equity</i>, trabajar su <i>naming</i>, etc.
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 3
                p <b>Institucionales:</b> se trabaja sobre la imagen corporativa y la identidad de la empresa u organización en general.
          .col-lg-1
      div(titulo="Objetivos de comunicacion")
        p.mb-5 Básicamente hay tres grandes grupos generales de objetivos de marketing. Estos son:
        .row.align-items-center.justify-content-between.mb-5
          .col-lg-1
          .col-lg-4.pe-5
            img(src='@/assets/curso/tema5/t5-f4.svg', alt='T5-F4').px-5
          .col-lg-6
            p La función puntual de un objetivo de comunicación es acentuar o modificar conductas, hábitos o comportamientos en el target de campaña. Esencialmente un objetivo de comunicación debe informar adecuadamente, persuadir a través de una propuesta diferencial, dar a conocer claramente dicha propuesta y comunicar correctamente el mensaje; este último en la estrategia de comunicación está representado por la promesa y el reason why (soporte de promesa o argumentación).
          .col-lg-1
      div(titulo="Objetivos de medios")
        p.mb-5 Este tipo de objetivos están relacionados directamente con la planificación de acciones <i>Above The Line (ABT)</i>, acciones en medios masivos. Estos objetivos esencialmente son tres:
        .row.align-items-center.justify-content-between.mb-5
          .col-lg-1
          .col-lg-4.px-5
            img(src='@/assets/curso/tema5/t5-f5.svg', alt='T5-F5').px-5
          .col-lg-6
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 1
                p <b>Lograr tantos Puntos Brutos de Rating (PBR) o Gross Rating Point (GRP):</b> expresa la presión publicitaria ejercida por una pauta, ya que, en esta variable, intervienen tanto cobertura como frecuencia. Se miden semanalmente y deben estar indicados en la pauta.
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 2
                p <b>Alcanzar determinada cobertura neta:</b> se refiere a la cantidad de personas expuestas por lo menos una vez (más exactamente un minuto) a los comerciales de una pauta, pero solo de nuestro target objetivo. La cobertura también se conoce como <i>Reach</i> y se expresa en porcentajes.
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 3
                p <b>Obtener determinada frecuencia (tasa de repetición):</b> expresa la cantidad de veces que una persona ha estado expuesta a los comerciales de una pauta.
          .col-lg-1
      div(titulo="Objetivos Below The Line (BTL)")
        p.mb-5 Este tipo de objetivos están directamente ligados a conseguir efectos en personas específicas y no en un campo masivo de universos, ya que las acciones BTL tienen como misión acercarse en forma directa e individual a cada individuo de nuestro plan de acción. Estos objetivos son:
        .row.align-items-center.justify-content-between.mb-5
          .col-lg-1
          .col-lg-4.pe-5
            img(src='@/assets/curso/tema5/t5-f6.svg', alt='T5-F6').px-5
          .col-lg-6
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 1
                p Determinar contactos brutos a alcanzar.
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 2
                p Lograr porcentaje de contactos efectivos que alcanzará el plan.
              li 
                .lista-ol--cuadro__vineta.fondo-secundario
                  span 3
                p Analizar los contactos reales que el plan BTL ha logrado como potenciales consumidores de mi producto, servicio o marca.
          .col-lg-1
    #t_5_2.titulo-segundo
      h2 5.2 <i>Target</i> comunicacional

    .bloque-texto-a.p-4.mb-5.fondo-purpura_invertido
      .row.align-items-center.justify-content-between
        .col-lg-3
          img(src='@/assets/curso/tema5/t5-f7.svg', alt='T5-F7')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Este es un concepto utilizado de forma casi exclusiva por creativos y algunas agencias de publicidad; es un paso más allá de la segmentación de mercados y permite conocer de forma individual a los consumidores de un producto o servicio, obteniendo de ellos información detallada de su comportamiento, gustos, intereses y deseos.
            br
            p El desarrollo del target comunicacional se realiza con técnicas de investigación cualitativa y lo más adecuado es que el proceso sea llevado a cabo por personas con estudios en psicología del consumidor, antropología o sociología. El método más preciso y utilizado para el desarrollo de un target comunicacional es la observación.
    .row.align-items-center.justify-content-between
      .col-lg-8
        p El fin del desarrollo de este punto, es obtener toda la información posible del mercado objetivo a través de la individualización de los consumidores; en ese orden de ideas, es posible que sea necesario realizar varios targets comunicacionales y por lo tanto, varias versiones del mensaje, de acuerdo con las características de cada uno de ellos. 
        br
        p.mb-5 A continuación, se indica el proceso para realizar el target comunicacional:
      .col-lg-4
        img(src='@/assets/curso/tema5/t5-f8.svg', alt='T5-F8')
    h3 Segmentación del mercado
    p.mb-5 Este proceso ya se ha desarrollado con anterioridad y para el caso, se deben tomar el mercado real y el análisis psicográfico que de él se haya realizado; dicho mercado se debe separar por nichos o grupos específicos a través de una recta numérica sencilla, acudiendo a las variables básicas; por ejemplo, si el mercado real está conformado por mujeres de 20 a 35 años de edad, estratos 3 y 4 y habitantes de ciudades principales de Colombia, se hace la siguiente gráfica, la cual se irá transformando en la medida que se realice el análisis respectivo en este tema:
    .row.mb-5
      .col-lg-8.mx-auto
        img(src='@/assets/curso/tema5/t5-f9.svg', alt='T5-F9')
        figcaption Fuente: SENA (2020)
    p.mb-5 Con esta información es hora de tomar decisiones en cuanto a cuál o cuáles serán los targets comunicacionales. En este punto hay que tener en cuenta varios aspectos: el presupuesto de la campaña, si este es limitado es posible que deba realizarse un solo modelo de anuncio que abarque todo el mercado objetivo; las características del mercado al que va dirigida la campaña, en el caso del ejemplo es necesario preguntarse si existen coincidencias psicográficas en las mujeres de 20 a 35 años que se puedan incluir en un anuncio y las identifique a ambas, o en el desarrollo del mensaje incluir temáticas que sean compatibles con todas.
    .cajon.color-acento-contenido.p-4.mb-5.color-acento-contenido-clarito
      .row.align-items-center.justify-content-between
        .col-lg-3
          img(src='@/assets/curso/tema5/t5-f10.svg', alt='T5-F10').p-4
        .col-lg-9
          p Para el desarrollo del target comunicacional se deben entonces definir a partir de ese análisis psicográfico, los <i>targets</i> que se van a realizar; para ello, se seguirá aún más el mercado real teniendo en cuenta gustos, intereses, formas de pensar, proyectos a futuro, etc.
    h3 Selección
    p En el ejemplo de las mujeres de 20 a 35 años se pueden encontrar varias diferencias que las separan en cuanto a prioridades, estilo de vida y motivaciones, temas muy relevantes para un proceso de comunicación. 
    br
    p Una mujer de 20 años está comenzando a vivir, posiblemente está estudiando una carrerea o abriéndose paso en el mundo laboral; si bien tiene relaciones sentimentales, tal vez no sea una prioridad el tener hijos, casarse y conformar una familia, puesto que sus motivaciones serán pasarla bien con sus amigos, divertirse, salir, viajar o conocer. Sus principales preocupaciones radican en qué ponerse, con quién y a dónde ir de fiesta, ganar el semestre de la universidad y cumplir con algunas obligaciones en el hogar, que aún comparte con sus padres. 
    br
    p.mb-5 La mujer de 35 años, por su parte tiene otras motivaciones, si bien quiere viajar y conocer, tal vez sus expectativas sean mayores en función de su capacidad de endeudamiento; a esta edad por lo general ya se tienen hijos y una familia conformada, sus prioridades por lo tanto son sus hijos, esposo y hogar. A los 35 quizás se tengan mayores responsabilidades laborales, lo que implica un estilo de vida más atareado y complejo; situación que puede variar de acuerdo con el estrato social, situación que debe ser de análisis.
    .bloque-texto-a.p-4.mb-5.fondo-purpura_invertido
      .row.align-items-center.justify-content-between
        .col-lg-3
          img(src='@/assets/curso/tema5/t5-f11.svg', alt='T5-F11')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p De lo anterior, se puede concluir que el desarrollo de un anuncio publicitario dirigido a mujeres de 20 a 35 años debe tener varias versiones en cuanto al desarrollo del mensaje. Los targets comunicacionales entonces deben seleccionarse en función de sus características psicográficas; para ello, se divide la recta numérica en los grupos que el análisis haya arrojado, cabe anotar que esta división sigue siendo un aspecto netamente subjetivo:
    h5.text-center.mb-4 Selección del target
    .col-lg-8.mx-auto.mb-5
      img(src='@/assets/curso/tema5/t5-f12.svg', alt='T5-F12')
      figcaption Fuente: SENA (2020)
    p.mb-5 En este caso se han seleccionado tres grupos, uno de 20 a 22 años; se tuvo en cuenta que en promedio a los 22 años se está terminando una carrera profesional y comenzando una vida laboral activa, lo que implica que la conducta es muy similar hasta esa edad. De los 23 a los 30 se está consolidando una vida laboral, profesional y social, en estas edades se suele viajar, conocer personas y consolidar relaciones sentimentales. A los 31 se comienza la vida familiar, los proyectos económicos, inversiones y negocios. A cada uno de ellos es necesario realizar el target comunicacional, ya sea para realizar un anuncio dirigido a los tres o para varias versiones; para el primer caso esto ayuda a encontrar coincidencias y para el segundo a determinar el mensaje para cada uno.
    .cajon_purpura.p-4.mb-5.align-items-center.justify-content-between
      .row.align-items-center.justify-content-between
        .col-lg-8
          p El desarrollo de target comunicacional está por realizarse, lo siguiente que se debe hacer es comenzar a describirlo; como se dijo anteriormente, este proceso implica aplicar una técnica de investigación, lo recomendable es observar y entrevistar a personas que reúnan las características del grupo seleccionado. 
        .col-lg-4
          img(src='@/assets/curso/tema5/t5-f13.svg', alt='T5-F13')
    h3 Descripción del <i>target</i>
    .row.align-items-center.justify-content-between.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema5/t5-f14.svg', alt='T5-F14').px-4
      .col-lg-9
        .bloque-texto-a__texto.p-4
          p.mb-4 La redacción del target comunicacional es descriptiva, de esta forma facilita el proceso creativo, toda vez que se trata de contar la historia del mercado objetivo. Al desarrollo de este proceso se le llamará: “una semana en la vida de…”; una semana porque durante este tiempo se puede describir en casi todos los aspectos el estilo de vida del target, agregándole algunos elementos que se pueden incorporar dentro de la misma historia como los sueños, deseos, proyectos y datos de compra y consumo.
          .cajon.color-acento-contenido.p-5.mb-5.align-items-center.color-acento-contenido-clarito
            p El <i>Target</i> Comunicacional (TC) requiere comenzar con un nombre, este debe ser el más común o uno de los más comunes para el tipo de persona que se está describiendo; para esto deben tenerse en cuenta las tendencias; por ejemplo: en mujeres de 20 a 23 años un nombre muy común es Daniela.
    p.mb-5 Una vez se ha dado un nombre a la protagonista, es necesario comenzar a describir el día a día de la persona, incluyendo todos los detalles posibles: hora de levantarse, qué hace inmediatamente abre sus ojos, cuántas veces suena la alarma, si se baña inmediatamente, qué hace en el baño, si cepilla los dientes mientras se baña o cuando sale, etc. Entre más detalles se mencionen, mayores posibilidades habrá de realizar una estrategia creativa exitosa. La descripción debe incluir toda la rutina, hasta que se acuesta nuevamente.
    .bloque-texto-a.p-4.mb-5.fondo-purpura
      .row.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Tal vez la rutina sea muy similar entre semana, pero de acuerdo con las investigaciones es importante tener en cuenta todas las actividades que el grupo seleccionado realice. Por ejemplo, se encontró que este tipo de mujeres van al gimnasio tres veces por semana o están realizando cursos de arte una vez por semana, acuden al salón de belleza los miércoles o lo hacen cada 15 días. Todos los detalles deben incluirse. El fin de semana, por lo general hay un cambio de rutina, puede ser que estén realizando estudios de postgrado o actividades deportivas y recreativas. Los planes, proyectos e intereses deben incluirse en la historia como situaciones del día a día; por ejemplo, decir que la protagonista está planeando un viaje con su novio y deciden hacer las reservaciones de hoteles con varios meses de anticipación a través de sitios web especializados. También deben incluirse detalles de la música que escuchan, la comida que piden o preparan.
        .col-lg-3
          img(src='@/assets/curso/tema5/t5-f15.svg', alt='T5-F15')
    #t_5_3.titulo-segundo
      h2 5.3 El concepto creativo

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema5/t5-f16.svg', alt='T5-F16')
      .col-lg-8
        .bloque-texto-a__texto.p-4
          p El concepto creativo es la base principal para el desarrollo del mensaje de la campaña, este determina la forma que tendrá el mensaje que se dirigirá al mercado objetivo; es en este punto donde debe darse todo el despliegue creativo. 
          br
          p Para el desarrollo del concepto, es indispensable tener en cuenta las siguientes recomendaciones:
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f17.svg', alt='T3-F17')
      .crd_01__txt
        .h4 Originalidad
        p La forma como se comunique la marca con su público objetivo debe ser única, no parecerse a otro producto y menos aún si es de la competencia.
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f18.svg', alt='T3-F18')
      .crd_01__txt
        .h4 Claro
        p El concepto debe ser muy fácil de identificar para los consumidores y en lo posible que la relación de este con la marca y sus beneficios sea evidente.
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f19.svg', alt='T3-F19')
      .crd_01__txt
        .h4 Creativo
        p Por obvias razones el concepto de una estrategia de comunicación debe ser creativo, la creatividad permite no solo que la idea sea llamativa, sino que se destaque frente a otras.
    h3 Estructura del concepto creativo
    .cajon.color-acento-contenido.p-4.mb-5.color-acento-contenido-clarito
      .row.align-items-center.justify-content-between
        .col-lg-4
          img(src='@/assets/curso/tema5/t5-f20.svg', alt='T3-F20').p-4
        .col-lg-8
          p El concepto es también un proceso que permite al mensaje tener más definición y a la estrategia creativa un norte, por eso es importante que estos elementos se desarrollen teniendo en cuenta todos los parámetros ya establecidos en el brief y en los antecedentes de la marca.
    h3 Tipo
    p.mb-5 Cada campaña o estrategia de comunicación que se realice está ligada a un momento específico de la marca, producto, servicio o empresa. Cada producto o servicio atraviesa unas etapas durante su proceso comercial y cada una de ellas comprende un proceso de comunicación especial. Estas etapas están consignadas en el ciclo de vida del producto:
      .col-lg-8.mx-auto
        h5.text-center.mb-5 Ciclo de vida del producto
        img(src='@/assets/curso/tema5/t5-f21.svg', alt='T3-F21')
        figcaption Fuente: SENA (2020)
    p.my-5 En la gráfica se pueden observar las etapas y el tipo de comunicación que se requiere para cada una de ellas:
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="I+D+I")
        .row.align-items-center.justify-content-between
          .col-lg-1
          .col-lg-4
            img(src='@/assets/curso/tema5/t5-f22.svg', alt='T3-F22').p-4
          .col-lg-6
            h4.mb-4 I+D+I
            p esta es la etapa de ideación del producto o servicio, en este punto no hay comunicación masiva; sin embargo, es posible que en el desarrollo de las pruebas de mercadeo se realicen estrategias de comunicación dirigidas a segmentos muy específicos, con el fin de probar la respuesta del grupo objetivo al nombre del producto, al empaque o al estilo de comunicación que han planteado para hacer ajustes antes de su introducción definitiva al mercado.
      .py-3.py-md-4(titulo="Introducción")
          .row.align-items-center.justify-content-between
            .col-lg-1
            .col-lg-4
              img(src='@/assets/curso/tema5/t5-f23.svg', alt='T3-F23').p-4
            .col-lg-6
              h4.mb-4 Introducción
              p En esta etapa el producto es puesto en oferta; es decir, se pone a disposición de los compradores y consumidores. La comunicación que se realiza en este punto es de lanzamiento; aquí es necesario ser enfático en sus beneficios, tanto el principal como los secundarios y la comunicación se realiza utilizando todos los medios posibles y el concepto debe conectar con el consumidor. En ocasiones y cuando las marcas tienen un alto nivel de posicionamiento, es posible que realicen un Teaser, es decir, una etapa inicial con expectativa, generando inquietud en los consumidores y con ello, generar impulso de compra.
      .py-3.py-md-4(titulo="Crecimiento")
        .row.align-items-center.justify-content-between
          .col-lg-1
          .col-lg-4
            img(src='@/assets/curso/tema5/t5-f24.svg', alt='T3-F24').p-4
          .col-lg-6
            h4.mb-4 Crecimiento
            p En esta etapa del ciclo de vida del producto, la comunicación debe ser constante y enfática en los beneficios; en este proceso se está convenciendo a más miembros del mercado objetivo que se adhieran a la marca y se queden con ella. En este punto se realiza comunicación de mantenimiento, como su nombre lo indica debe mantenerse cautivo el mercado ganado y ganar más para lograr retorno sobre la inversión.
      .py-3.py-md-4(titulo="Madurez")
        .row.align-items-center.justify-content-between
          .col-lg-1
          .col-lg-4
            img(src='@/assets/curso/tema5/t5-f25.svg', alt='T3-F25').p-4
          .col-lg-6
            h4.mb-4 Madurez
            p En esta etapa ya hay un mercado cautivo y suficiente para que el producto genere ganancias, ya es reconocido y aceptado por el mercado. En este punto se realiza comunicación de recordación, la cual implica que haya mucha interacción entre la marca y sus consumidores, comunicación sencilla, breve y directa con presencia de la marca, el fin es que el mercado no olvide la marca.
      .py-3.py-md-4(titulo="Declive")
        .row.align-items-center.justify-content-between
          .col-lg-1
          .col-lg-4
            img(src='@/assets/curso/tema5/t5-f26.svg', alt='T3-F26').p-4
          .col-lg-6
            h4.mb-4 Declive
            p Esta etapa se produce por varias razones, la principal es la llegada al mercado de productos similares que han captado la atención de los consumidores con otros beneficios, menor precio u otras presentaciones; en ese punto, en ocasiones es necesario realizar cambios al producto para adaptarlo a las nuevas preferencias del público objetivo, esto implica que el ciclo de vida comienza nuevamente y es necesario realizar un relanzamiento, las características de este tipo de comunicación son similares a las del lanzamiento, con la diferencia que el posicionamiento del producto va a permitir llegar de una forma más rápida al crecimiento y la madurez; es decir, las fases de la comunicación serán más cortas.
    h3 Tono
    .bloque-texto-a.p-4.mb-5.fondo-purpura_invertido
      .row.align-items-center.justify-content-between
        .col-lg-3
          img(src='@/assets/curso/tema5/t5-f27.svg', alt='T5-F27')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p El diseño del mensaje es la parte más complicada y demorada del proceso, el concepto es la base para su elaboración y cada parte de él contribuye poco a poco al desarrollo. El tono constituye un elemento muy importante en la elaboración del mensaje y desarrollo de la idea, porque determina en gran medida la empatía que la marca tiene con el grupo objetivo y muestra rasgos muy relevantes de la personalidad de la marca. Es necesario definir el tono de la comunicación teniendo en cuenta todos esos elementos, pues el mercado suele ser susceptible a ciertos aspectos que pueden llegar a ser ofensivos o transgredir la forma de pensar de algunos miembros del mercado.
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f28.svg', alt='T5-F28')
      .crd_01__txt
        .h4 Comunicacional
        p Es directo, sencillo y plano; implica poco despliegue creativo y es muy apto para comunicar ofertas de un solo día o dar información fugaz de alguna eventualidad del producto o servicio. Este tono de comunicación es poco persuasivo.
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f29.svg', alt='T5-F29')
      .crd_01__txt
        .h4 Racional
        p Si bien un bajo porcentaje de las compras que se realizan, se hacen de forma racional, este es un tono muy persuasivo, pero sobre todo disuasivo. Es muy eficaz en comunicación institucional y para campañas de bien público en las que hay que convencer al público objetivo que realice una acción específica para evitar ciertas consecuencias; por ejemplo, las campañas que promueven el apoyo a fundaciones o las que invitan a moderar el consumo de alcohol. Este tono genera algo grado de recordación.
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f30.svg', alt='T5-F30')
      .crd_01__txt
        .h4 Emotivo
        p es tal vez el más eficaz debido al comportamiento en el consumo de la mayoría de las personas; un alto porcentaje de las compras se realizan motivadas por las emociones, es por eso por lo que muchos anuncios y campañas son realizadas con este tono de comunicación. Tiene el objetivo de hacer brotar sentimientos como la ternura, llanto, compasión, ira y sobrecogimiento. Es muy persuasivo y recordativo.
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f31.svg', alt='T5-F31')
      .crd_01__txt
        .h4 Humorístico
        p Es un tono muy utilizado, altamente efectivo y recordativo; sin embargo, no es apto para todas las marcas. Es muy eficiente en publicidad de productos para niños y jóvenes y para productos de consumo masivo. Sin embargo y debido a las tendencias del mercado, se han lanzado campañas muy exitosas de productos financieros, seguros y telecomunicaciones con tono humorístico.
    .crd_01.mb-5
      .crd_01__icon
        img(src='@/assets/curso/tema5/t5-f32.svg', alt='T5-F32')
      .crd_01__txt
        .h4 Aspiracional
        p Es un tono muy eficaz para productos financieros, agencias de viajes y educación, tiene un alto nivel de persuasión, aunque es poco recordativo, es efectivo en el momento en que el mercado objetivo es expuesto al mensaje, de ahí su nivel de uso en campañas en medios digitales como la web y las redes sociales. Tiene un enfoque más alto en el mercado de adultos jóvenes.
    h5 Tema
    p.mb-5 El tema es un elemento subjetivo y es donde se da rienda suelta a la creatividad, es en este punto donde el target comunicacional realizado anteriormente toma mayor relevancia, pues en cada uno de los detalles descritos en él, se pueden encontrar temas que sean eficaces para el diseño del mensaje. El tema se refiere a un momento, lugar y situación específicos en la que se desarrollará el mensaje, ya sea audiovisual, impreso, digital, textual o auditivo.
    .cajon_purpura.p-4.mb-5.align-items-center.justify-content-between
      .row.align-items-center.justify-content-between
        .col-lg-3
          img(src='@/assets/curso/tema5/t5-f33.svg', alt='T5-F33').p-4
        .col-lg-9
          p.px-4 Se puede tomar como tema una cena familiar; este contiene los tres elementos descritos: cena indica que es en la noche, familiar una situación específica y las posibles personas que intervienen en ella y el lugar porque se puede deducir que será en una casa o en un restaurante. Es importante definir cada uno de estos elementos en la descripción del tema.
    h3 El racional creativo
    p El racional creativo es un documento que recoge toda la información anterior en una idea concreta; es decir, es la idea en sí, descrita y estructurada. Para su desarrollo es necesario tener en cuenta todos los elementos de la estrategia: descripción del mercado objetivo, target comunicacional y concepto creativo.
    br
    p.mb-4 Adicionalmente, el racional creativo debe tener dentro de su base dos elementos inspiradores que tal vez se hayan detectado en el proceso de investigación y desarrollo del target comunicacional; la propuesta de valor y el <i>key insight</i>.
  .container.p-4.p-md-5.container.color-acento-contenido
    .row.align-items-center.justify-content-between
      .col-lg-4
        img(src='@/assets/curso/tema5/t5-f34.svg', alt='T5-F34').p-4
      .col-lg-8
        h5.mb-4 Propuesta de valor
        p.mb-4 Hoy en día se hace mucho énfasis en este elemento y se suele confundir con el factor diferenciador de un producto o servicio. El diferenciador o USP (Unique Selling Propotition) es una técnica que se debe al publicista Rosser Reeves de la agencia norteamericana Ted Bates and Company, que ha terminado siendo un referente universal de la publicidad.
        a.boton.boton--a(:href="obtenerLink('/downloads/propuestadevalor_infografia.pdf')" target="_blank" type="application/pdf")
          span.textos-color-secundario Descargar
          i.fas.fa-file-download.textos-color-secundario
  .container.p-4.p-md-5.tarjeta--blanca
    .row.row.align-items-center.justify-content-between.mb-5
      .col-lg-8
        h5 Los insights
        p Los insights representan un aspecto culto, profundo y a menudo inconsciente del pensamiento, sentimiento o comportamiento del consumidor que explica la relación estrecha, emocional y simbólica que este sostiene con los productos o servicios que consume o usa. La identificación y desarrollo de insights del consumidor bajo la forma de promesas publicitarias, estrategias de comunicación y diseño de nuevos productos, es la clave para el éxito del negocio, pero su puesta en marcha no siempre es sencilla. A menudo requiere altas dosis de intuición, olfato psicológico, empatía y sobretodo suerte (lograr descubrimientos afortunados por accidente). El momento de descubrimiento de un consumer insights es un momento de elevada revelación e inspiración.
      .col-lg-4
        img(src='@/assets/curso/tema5/t5-f35.svg', alt='T5-F35').p-5
    p El insight es una palabra que proviene de la psicología, y se utiliza cuando el psicoterapeuta puede entender con claridad el problema (motivo de consulta) de su paciente luego de largas sesiones de auscultarlo y conversar con él. Ese momento, el de la revelación, es propiamente un insight pues el terapeuta comprende (¡por fin!) el origen del problema y las motivaciones más ocultas del paciente para actuar de la forma que hace. 
    br
    p.mb-5 La publicidad utiliza el concepto cuando un creativo identifica datos reveladores sobre la conducta del consumidor que antes no pensaba, sabía o tenía en mente.
    .bloque-texto-b.color-secundario.p-4.fondo-purpura-before
      .bloque-texto-d__texto
        i.fas.fa-quote-left
        span.h5.mb-0 El insight psicológico permite así comprender a los productos no solo como satisfactores de necesidades biológicas o funcionales, sino también como de gustos y demandas en ocasiones no consientes.
        i.fas.fa-quote-right
    span.ps-4 - (Roig, 2011)
    h5.my-5 ¿Cómo hallar insights?
    .row.align-items-start.justify-content-between
      .col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema3/t3-f27.svg', alt='T3-F27')
          .tarjeta.p-4.fondo-gris
            .h4.text-center.mt-5 PASO 1
            p.text-center.mb-5 <b>Descubriendo la forma</b> del cómo el consumidor se percibe y concibe a sí mismo.
      .col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema3/t3-f28.svg', alt='T3-F28')
          .tarjeta.p-4.fondo-gris
            .h4.text-center.mt-5 PASO 2
            p.text-center.mb-5 <b>Mirando el mercado</b> tal como el consumidor lo mira (percibe). Esto es, mirar el mercado por y desde los ojos del consumidor.
      .col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema3/t3-f29.svg', alt='T3-F29')
          .tarjeta.p-4.fondo-gris
            .h4.text-center.mt-5 PASO 3
            p.text-center.mb-5 <b>Explorando la psicología</b> profunda del consumo y el rol simbólico que ésta tiene para el consumidor.
      .col-lg-2
      .col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema3/t3-f30.svg', alt='T3-F30')
          .tarjeta.p-4.fondo-gris
            .h4.text-center.mt-5 PASO 4
            p.text-center.mb-5 <b>Indagando, observando, escuchando y explorando.</b> El insight no aparece fácilmente: hay que encontrarlo. La mejor manera de hacerlo es estando en contacto permanente y en forma profunda con nuestros consumidores.
      .col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema3/t3-f31.svg', alt='T3-F31')
          .tarjeta.p-4.fondo-gris
            .h4.text-center.mt-5 PASO 5
            p.text-center.mb-5 <b>Usando el olfato e intuición psicológica.</b> Un consumer insight tiene tanto de intuición como de hechos fácticos. (Roig, 2011) 
      .col-lg-2
    p.mb-5 Émile Durkheim a mediados del siglo XIX creó el método decir, sentir, actuar; muy eficaz para el hallazgo de insights; el cual, se representa a través de lo indicado por Consumer truth (2020):
    ul.lista-ul--separador.ps-5(span style="margin: 1.5em auto 3em")
      li 
        i.fas.fa-play.colorPurpura
        p <b>El decir del consumidor - técnicas facilitadoras:</b> trata de técnicas basadas en el decir del consumidor (expresión, ideas, conceptos, creencias en torno al consumo). A través de juegos de palabras, asociación de ideas, brainstorming, collage de imágenes y otras tareas creativas, el consumidor es ayudado en su proceso de enunciar el porqué de su consumo y la relación estrecha que tiene (o no tiene) con los productos.
      li 
        i.fas.fa-play.colorPurpura
        p <b>El sentir del consumidor – técnicas proyectivas:</b> trata de técnicas basadas en el sentir del consumidor (sentimientos y emociones profundas que despierta y suscita el consumo). Mediante técnicas basadas en conflictos emocionales, a través de frases/historias incompletas, etc., se logran obtener profundas expresiones emocionales que subyacen el consumo que a menudo son “constreñidas” por el uso de la razón y el imperio de la lógica. 
      li 
        i.fas.fa-play.colorPurpura
        p <b>El actuar del consumidor – técnicas etnográficas:</b> trata de técnicas basadas en el hacer (la acción de compra y consumo). El consumidor es observado en su contexto natural y hábitat para observar “in situ” el comportamiento cotidiano, las dinámicas y rituales del consumo. Se basan en el fundamento que el consumidor suele decir una cosa y hacer otra, entonces es necesario acudir a la observación y no solo a la declaración. Entre estas técnicas se aplican el “Acompañamiento”, “One day in the life”, “Observación Participante”, “In Home Visit”, “Shopper Trips”, entre otras.
    .cajon_purpura.p-4.mb-5.align-items-center.justify-content-between
      .row.align-items-center.justify-content-between
        .col-lg-2
          img(src='@/assets/curso/tema5/t5-f36.svg', alt='T5-F36').p-4._128pixeles.mx-auto
        .col-lg-10
          p Como complemento del proceso de identificación de insights, se recomienda aplicar la pirámide de los insights que se basa en el trabajo de Mohan Sawhney (2003). Research that Produces Consumer Insights:
    h3.text-center Pirámide de los <i>insights</i>
    .col-lg-8.mx-auto.piramide-insights.p-4
      p.text-center <b>Idea de marketing:<br><br></b>Estrategia de innovación, branding o comunicación basados en consumer insights.
    img(src='@/assets/curso/tema5/t5-f37.svg', alt='T5-F37').p-3._96px.mx-auto
    .col-lg-8.mx-auto.piramide-insights.p-4
      p.text-center <b>Consumer insight:<br><br></b>Verdades desnudas del consumidor que conectan las marcas con las personas, de forma poco evidente.
    img(src='@/assets/curso/tema5/t5-f37.svg', alt='T5-F37').p-3._96px.mx-auto
    .col-lg-8.mx-auto.piramide-insights.p-4
      p.text-center <b>Hallazgo:<br><br></b>Metáforas profundas que se derivan de las informaciones, lo que el producto significa.
    img(src='@/assets/curso/tema5/t5-f37.svg', alt='T5-F37').p-3._96px.mx-auto
    .col-lg-8.mx-auto.piramide-insights.p-4
      p.text-center <b>Información:<br><br></b>Interpretación de los hechos detrás de los datos.
    img(src='@/assets/curso/tema5/t5-f37.svg', alt='T5-F37').p-3._96px.mx-auto
    .col-lg-8.mx-auto.piramide-insights.p-4
      p.text-center <b>Dato:<br><br></b>Observaciones, hechos, estadísticas, SIM.
    figcaption.my-5 Fuente: SENA (2020), basada en Sawhney (2003)
    


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
