<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Desarrollo de la estrategia
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img1.svg', alt='')
      .col-sm-12.col-lg-11
        p.mb-0 La estrategia creativa es un proceso de desarrollo de ideas para la comunicación publicitaria, busca que la interacción entre el cliente y la marca sea lo más efectiva posible. Además, incluye varios elementos: objetivos, #[i target] comunicacional y concepto creativo. 
    Separador
    #t_5_1.titulo-segundo.color-secundario
      h2  5.1 Objetivos

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-9
        p Como ya se ha mencionado anteriormente, los objetivos tienen tres elementos básicos:
        ul.lista-ul.mb-5
          li 
            i.fas.fa-check-circle.color-primario
            |  #[b Intención:]  qué se quiere lograr.
          li 
            i.fas.fa-check-circle.color-primario
            |  #[b Medida:] qué porcentaje del objetivo planteado   se quiere o se puede obtener. 
          li 
            i.fas.fa-check-circle.color-primario
            |  #[b Plazo:] en qué tiempo se puede lograr el objetivo planteado teniendo en cuenta los recursos disponibles.

        p Tipos de objetivos, de acuerdo con el post publicado por el sitio web publicidad y promoción (2010):

      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img2.png', alt='')

    TabsC.color-secundario.mb-5
      .p-4(titulo="Objetivos de <i>marketing</i>")
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img3.svg', alt='')
            
          .col-sm-12.col-lg-6
            p Básicamente hay tres grandes grupos generales de objetivos de #[i marketing ]. Estos son:
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 1
                span  #[b Comerciales:] ganar participación de mercado, obtener más consumidores, generar ventas, etc.

              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 2
                span  #[b De #[i branding]:] que se desea hacer con la marca: mejorarla, posicionarla, darla a conocer, fortalecer su #[i brand value] o el #[i brand equity], trabajar su #[i naming], etc.

              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 3
                span  #[b Institucionales:] se trabaja sobre la imagen corporativa y la identidad de la empresa u organización en general.

      .p-4(titulo="Objetivos de comunicación")
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img4.svg', alt='')
            
          .col-sm-12.col-lg-6
            ul.lista-ul.mb-5
              li.d-flex
                i.fas.fa-check-circle.color-primario
                span La función puntual de un objetivo de comunicación es acentuar o modificar conductas, hábitos o comportamientos en el #[i target] de campaña.

              li.d-flex
                i.fas.fa-check-circle.color-primario
                span Esencialmente un objetivo de comunicación debe informar adecuadamente, persuadir a través de una propuesta diferencial, dar a conocer claramente dicha propuesta y comunicar correctamente el mensaje; este último en la estrategia de comunicación está representado por la promesa y el #[i reason why] (soporte de promesa o argumentación).
      .p-4(titulo="Objetivos de medios")
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img5.svg', alt='')
            
          .col-sm-12.col-lg-6
            p Este tipo de objetivos están relacionados directamente con la planificación de acciones #[i Above The Line] (ABT), acciones en medios masivos. Estos objetivos esencialmente son tres:
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 1
                span #[b Lograr tantos Puntos Brutos de #[i Rating] (PBR) o #[i Gross Rating Point] (GRP):] expresa la presión publicitaria ejercida por una pauta, ya que, en esta variable, intervienen tanto cobertura como frecuencia. Se miden semanalmente y deben estar indicados en la pauta.

              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 2
                span #[b Alcanzar determinada cobertura neta:] se refiere a la cantidad de personas expuestas por lo menos una vez (más exactamente un minuto) a los comerciales de una pauta, pero solo de nuestro #[i target] objetivo. La cobertura también se conoce como #[i Reach] y se expresa en porcentajes.


              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 3
                span #[b Obtener determinada frecuencia (tasa de repetición):] expresa la cantidad de veces que una persona ha estado expuesta a los comerciales de una pauta.
      .p-4(titulo="Objetivos <i>Below The Line</i> (BTL)")
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img6.svg', alt='')
            
          .col-sm-12.col-lg-6
            p Este tipo de objetivos están directamente ligados a conseguir efectos en personas específicas y no en un campo masivo de universos, ya que las acciones BTL tienen como misión acercarse en forma directa e individual a cada individuo de nuestro plan de acción. Estos objetivos son:
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 1
                span Determinar contactos brutos a alcanzar.

              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 2
                span Lograr porcentaje de contactos efectivos que alcanzará el plan.

              li.d-flex
                .lista-ol--cuadro__vineta.cs
                  span.fw-bold 3
                span Analizar los contactos reales que el plan BTL ha logrado como potenciales consumidores de mi producto, servicio o marca.
    Separador
    #t_5_2.titulo-segundo.color-secundario
      h2  5.2 #[i Target] comunicacional
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Este es un concepto utilizado de forma casi exclusiva por creativos y algunas agencias de publicidad; es un paso más allá de la segmentación de mercados y permite conocer de forma individual a los consumidores de un producto o servicio, obteniendo de ellos información detallada de su comportamiento, gustos, intereses y deseos.
        p.mb-3 El desarrollo del #[i target] comunicacional se realiza con técnicas de investigación cualitativa y lo más adecuado es que el proceso sea llevado a cabo por personas con estudios en psicología del consumidor, antropología o sociología. El método más preciso y utilizado para el desarrollo de un #[i target] comunicacional es la observación.
        p.mb-3 El fin del desarrollo de este punto, es obtener toda la información posible del mercado objetivo a través de la individualización de los consumidores; en ese orden de ideas, es posible que sea necesario realizar varios #[i targets] comunicacionales y por lo tanto, varias versiones del mensaje, de acuerdo con las características de cada uno de ellos.
        p.mb-0 A continuación, se indica el proceso para realizar el #[i target] comunicacional:
      
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img7.png', alt='')
    .d-flex.mb-4.align-items-center
        img.w-card-icon(src="@/assets/curso/temas/tema3/img51.svg")
        .bg9.py-2.w-card-text.fw-bold Segmentación del mercado
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-7
        p Este proceso ya se ha llevado a cabo anteriormente, en este caso, se debe considerar el mercado real y el análisis psicográfico realizado. Dicho mercado debe dividirse en nichos o grupos específicos utilizando una recta numérica sencilla, basada en variables básicas. 
        p #[b Por ejemplo:] si el mercado real está compuesto por mujeres de 20 a 35 años de edad, pertenecientes a los estratos 3, 4 y residentes de las principales ciudades de Colombia, se elabora la siguiente gráfica, la cual se irá modificando a medida que se realice el análisis correspondiente en este tema.
      .col-sm-12.col-lg-5
        .titulo-sexto.color-secundario
          h5 Figura 1.
          span
            |  Segmentación del mercado
        figure
          img.img-a(src='@/assets/curso/temas/tema5/img8.svg', alt='La gráfica presenta la segmentación del mercado con base al análisis de las edades y los estratos de las mujeres en las ciudades de Colombia, donde la edad mínima es 20 años y la máxima 35 años.')
          
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img9.svg', alt='')

      .col-sm-12.col-lg-8
        p Con esta información es hora de tomar decisiones en cuanto a cuál o cuáles serán los #[i targets] comunicacionales. En este punto hay que tener en cuenta varios aspectos: el presupuesto de la campaña, si este es limitado es posible que deba realizarse un solo modelo de anuncio que abarque todo el mercado objetivo; las características del mercado al que va dirigida la campaña, en el caso del ejemplo es necesario preguntarse si existen coincidencias psicográficas en las mujeres de 20 a 35 años que se puedan incluir en un anuncio y las identifique a ambas, o en el desarrollo del mensaje incluir temáticas que sean compatibles con todas.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Para el desarrollo del #[i target] comunicacional se deben entonces definir a partir de ese análisis psicográfico, los #[i targets] que se van a realizar; para ello, se seguirá aún más el mercado real teniendo en cuenta gustos, intereses, formas de pensar, proyectos a futuro, etc.
    .titulo-cus.mb-4.w-1
      h4 Selección
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-8
        p.mb-3 En el ejemplo de las mujeres de 20 a 35 años se pueden encontrar varias diferencias que las separan en cuanto a prioridades, estilo de vida y motivaciones, temas muy relevantes para un proceso de comunicación.
        p.mb-3 Una mujer de 20 años está comenzando a vivir, posiblemente está estudiando una carrerea o abriéndose paso en el mundo laboral; si bien tiene relaciones sentimentales, tal vez no sea una prioridad el tener hijos, casarse y conformar una familia, puesto que sus motivaciones serán pasarla bien con sus amigos, divertirse, salir, viajar o conocer. Sus principales preocupaciones radican en qué ponerse, con quién y a dónde ir de fiesta, ganar el semestre de la universidad y cumplir con algunas obligaciones en el hogar, que aún comparte con sus padres.
        p.mb-0 La mujer de 35 años, por su parte tiene otras motivaciones, si bien quiere viajar y conocer, tal vez sus expectativas sean mayores en función de su capacidad de endeudamiento; a esta edad por lo general ya se tienen hijos y una familia conformada, sus prioridades por lo tanto son sus hijos, esposo y hogar. A los 35 quizás se tengan mayores responsabilidades laborales, lo que implica un estilo de vida más atareado y complejo; situación que puede variar de acuerdo con el estrato social, situación que debe ser de análisis.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img10.png', alt='')
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        .cajon.color-acento-contenido.p-5.mb-cus
          p.mb-0 De lo anterior, se puede concluir que el desarrollo de un anuncio publicitario dirigido a mujeres de 20 a 35 años debe tener varias versiones en cuanto al desarrollo del mensaje. Los #[i targets] comunicacionales entonces deben seleccionarse en función de sus características psicográficas; para ello, se divide la recta numérica en los grupos que el análisis haya arrojado, cabe anotar que esta división sigue siendo un aspecto netamente subjetivo:
      .col-sm-12.col-lg-5
        .titulo-sexto.color-secundario
          h5 Figura 2.
          span
            |  Selección del #[i target]
        figure
          img.img-a(src='@/assets/curso/temas/tema5/img11.svg', alt='La selección del target es con base a las características psíquicas donde posteriormente se dividen en grupos por edades.')
          
    p En este caso se han seleccionado tres grupos, uno de 20 a 22 años; se tuvo en cuenta que en promedio a los 22 años se está terminando una carrera profesional y comenzando una vida laboral activa, lo que implica que la conducta es muy similar hasta esa edad. De los 23 a los 30 se está consolidando una vida laboral, profesional y social, en estas edades se suele viajar, conocer personas y consolidar relaciones sentimentales. A los 31 se comienza la vida familiar, los proyectos económicos, inversiones y negocios. A cada uno de ellos es necesario realizar el #[i target] comunicacional, ya sea para realizar un anuncio dirigido a los tres o para varias versiones; para el primer caso esto ayuda a encontrar coincidencias y para el segundo a determinar el mensaje para cada uno.
    p.mb-5 El desarrollo de #[i target] comunicacional está por realizarse, lo siguiente que se debe hacer es comenzar a describirlo; como se dijo anteriormente, este proceso implica aplicar una técnica de investigación, lo recomendable es observar y entrevistar a personas que reúnan las características del grupo seleccionado.
    .titulo-cus.mb-4.w-2 
      h4  Descripción del #[i target]  
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img12.svg', alt='')
      .col-sm-12.col-lg-8
        p La redacción del #[i target] comunicacional es descriptiva, de esta forma facilita el proceso creativo, toda vez que se trata de contar la historia del mercado objetivo. Al desarrollo de este proceso se le llamará: “una semana en la vida de…”; una semana porque durante este tiempo se puede describir en casi todos los aspectos el estilo de vida del #[i target], agregándole algunos elementos que se pueden incorporar dentro de la misma historia como los sueños, deseos, proyectos y datos de compra y consumo.
        .cajon.color-acento-contenido.p-4
            p.mb-0 El #[i Target] Comunicacional (TC) requiere comenzar con un nombre, este debe ser el más común o uno de los más comunes para el tipo de persona que se está describiendo; para esto deben tenerse en cuenta las tendencias; por ejemplo: en mujeres de 20 a 23 años un nombre muy común es Daniela.

    p.mb-5 Una vez se ha dado un nombre a la protagonista, es necesario comenzar a describir el día a día de la persona, incluyendo todos los detalles posibles: hora de levantarse, qué hace inmediatamente abre sus ojos, cuántas veces suena la alarma, si se baña inmediatamente, qué hace en el baño, si cepilla los dientes mientras se baña o cuando sale, etc. Entre más detalles se mencionen, mayores posibilidades habrá de realizar una estrategia creativa exitosa. La descripción debe incluir toda la rutina, hasta que se acuesta nuevamente.
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img15.png', alt='')

      .col-sm-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-4
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img.w-75.m-auto(src='@/assets/curso/temas/tema5/img13.svg', alt='')
          .col-sm-12.col-lg-10
            p.mb-0 Tal vez la rutina sea muy similar entre semana, pero de acuerdo con las investigaciones es importante tener en cuenta todas las actividades que el grupo seleccionado realice.
        .cajon.color-secundario.p-4.mb-4
            p.mb-0 #[b Por ejemplo:]  se encontró que este tipo de mujeres van al gimnasio tres veces por semana o están realizando cursos de arte una vez por semana, acuden al salón de belleza los miércoles o lo hacen cada 15 días; todos los detalles deben incluirse.
        .row.justify-content-center.align-items-center.mb-4
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img.w-75.m-auto(src='@/assets/curso/temas/tema5/img14.svg', alt='')
          .col-sm-12.col-lg-10
            p.mb-0 El fin de semana, por lo general hay un cambio de rutina, puede ser que estén realizando estudios de postgrado o actividades deportivas y recreativas. Los planes, proyectos e intereses deben incluirse en la historia como situaciones del día a día.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 #[b Por ejemplo:] decir que la protagonista está planeando un viaje con su novio y deciden hacer las reservaciones de hoteles con varios meses de anticipación a través de sitios #[i web] especializados. También deben incluirse detalles de la música que escuchan, la comida que piden o preparan.

    Separador
    #t_5_3.titulo-segundo.color-secundario
      h2 5.3 El concepto creativo
    p El concepto creativo es la base principal para el desarrollo del mensaje de la campaña, este determina la forma que tendrá el mensaje que se dirigirá al mercado objetivo; es en este punto donde debe darse todo el despliegue creativo.
    p Para el desarrollo del concepto, es indispensable tener en cuenta las siguientes recomendaciones:
    .row.justify-content-center.mb-5
      .col-sm-12.col-md-6.col-lg-4.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img15.svg').d-none.d-lg-block
          .tarjeta.bgimg3.w-100
            .text-center.p-4
              p.title-card.bg3.text-white.mb-4 Originalidad  
              p.mt-3.mb-5.pb-5 La forma como se comunique la marca con su público objetivo debe ser única, no parecerse a otro producto y menos aún si es de la competencia.
      .col-sm-12.col-md-6.col-lg-4.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img16.svg').d-none.d-lg-block
          .tarjeta.bgimg3.w-100
            .text-center.p-4
              .title-card.bg4 Claro
              p.mt-3.mb-5.pb-5 El concepto debe ser muy fácil de identificar para los consumidores y en lo posible que la relación de este con la marca y sus beneficios sea evidente.
      .col-sm-12.col-md-6.col-lg-4.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img17.svg').d-none.d-lg-block
          .tarjeta.bgimg3.w-100
            .text-center.p-4
              p.title-card.bg3.text-white.mb-4 Creativo
              p.mt-3.mb-5.pb-5 Por obvias razones el concepto de una estrategia de comunicación debe ser creativo, la creatividad permite no solo que la idea sea llamativa, sino que se destaque frente a otras.

    .d-flex.mb-3.align-items-center
        img.w-card-icon(src="@/assets/curso/temas/tema3/img51.svg")
        .bg9.py-2.w-card-text.fw-bold Estructura del concepto creativo
    p.mb-5 El concepto es también un proceso que permite al mensaje tener más definición y a la estrategia creativa un norte, por eso es importante que estos elementos se desarrollen teniendo en cuenta todos los parámetros ya establecidos en el #[i brief] y en los antecedentes de la marca.
    .titulo-cus.mb-4.w-3
          h4   Tipo
    p Cada campaña o estrategia de comunicación que se realice está ligada a un momento específico de la marca, producto, servicio o empresa. Cada producto o servicio atraviesa unas etapas durante su proceso comercial y cada una de ellas comprende un proceso de comunicación especial. Estas etapas están consignadas en el ciclo de vida del producto.
    .titulo-sexto.color-secundario
      h5 Figura 3.
      span
        |  Ciclo de vida del producto
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-10
        figure
          img.img-a(src='@/assets/curso/temas/tema5/img16.svg', alt='Cada campaña se lleva a cabo de acuerdo a un ciclo de vida especifico del producto: I+D+I: prueba de mercado. Introducción: lanzamiento. Crecimiento: mantenimiento. Madurez: recordación. Declive: relanzamiento')
          
    p En la gráfica se pueden evidenciar las etapas y el tipo de comunicación que se requiere para cada una de ellas:
    .row.justify-content-center.mb-4
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img.img-a(src='@/assets/curso/temas/tema5/img17.svg')
      .col-sm-12.col-lg-9
       TabsA.color-acento-botones.mb-5
        .tarjeta.color-acento-botones--borde.p-4(titulo="I+D+I")
          p.mb-0 Esta es la etapa de ideación del producto o servicio, en este punto no hay comunicación masiva; sin embargo, es posible que en el desarrollo de las pruebas de mercadeo se realicen estrategias de comunicación dirigidas a segmentos muy específicos, con el fin de probar la respuesta del grupo objetivo al nombre del producto, al empaque o al estilo de comunicación que han planteado para hacer ajustes antes de su introducción definitiva al mercado.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Introducción")
          p.mb-0 En esta etapa el producto es puesto en oferta; es decir, se pone a disposición de los compradores y consumidores. La comunicación que se realiza en este punto es de lanzamiento; aquí es necesario ser enfático en sus beneficios, tanto el principal como los secundarios y la comunicación se realiza utilizando todos los medios posibles y el concepto debe conectar con el consumidor. En ocasiones y cuando las marcas tienen un alto nivel de posicionamiento, es posible que realicen un #[i Teaser], es decir, una etapa inicial con expectativa, generando inquietud en los consumidores y con ello, generar impulso de compra.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Crecimiento")
          p.mb-0 En esta etapa del ciclo de vida del producto, la comunicación debe ser constante y enfática en los beneficios; en este proceso se está convenciendo a más miembros del mercado objetivo que se adhieran a la marca y se queden con ella. En este punto se realiza comunicación de mantenimiento, como su nombre lo indica debe mantenerse cautivo el mercado ganado y ganar más para lograr retorno sobre la inversión.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Madurez")
          p.mb-0 En esta etapa ya hay un mercado cautivo y suficiente para que el producto genere ganancias, ya es reconocido y aceptado por el mercado. En este punto se realiza comunicación de recordación, la cual implica que haya mucha interacción entre la marca y sus consumidores, comunicación sencilla, breve y directa con presencia de la marca, el fin es que el mercado no olvide la marca.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Declive")
          p.mb-0 Esta etapa se produce por varias razones, la principal es la llegada al mercado de productos similares que han captado la atención de los consumidores con otros beneficios, menor precio u otras presentaciones; en ese punto, en ocasiones es necesario realizar cambios al producto para adaptarlo a las nuevas preferencias del público objetivo, esto implica que el ciclo de vida comienza nuevamente y es necesario realizar un relanzamiento, las características de este tipo de comunicación son similares a las del lanzamiento, con la diferencia que el posicionamiento del producto va a permitir llegar de una forma más rápida al crecimiento y la madurez; es decir, las fases de la comunicación serán más cortas.
    .titulo-cus.mb-4.w-3
          h4   Tono
    p.mb-5 El diseño del mensaje es la parte más complicada y demorada del proceso, el concepto es la base para su elaboración y cada parte de él contribuye poco a poco al desarrollo. El tono constituye un elemento muy importante en la elaboración del mensaje y desarrollo de la idea, porque determina en gran medida la empatía que la marca tiene con el grupo objetivo y muestra rasgos muy relevantes de la personalidad de la marca. Es necesario definir el tono de la comunicación teniendo en cuenta todos esos elementos, pues el mercado suele ser susceptible a ciertos aspectos que pueden llegar a ser ofensivos o transgredir la forma de pensar de algunos miembros del mercado.
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src='@/assets/curso/temas/tema5/img20.svg')
        h5.text-center.mt-4 Comunicacional
        p.mt-3.text-center.txt-sistema Es directo, sencillo y plano; implica poco despliegue creativo y es muy apto para comunicar ofertas de un solo día o dar información fugaz de alguna eventualidad del producto o servicio. Este tono de comunicación es poco persuasivo.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src='@/assets/curso/temas/tema5/img21.svg')
        h5.text-center.mt-4 Racional
        p.mt-3.text-center.txt-sistema Si bien un bajo porcentaje de las compras que se realizan, se hacen de forma racional, este es un tono muy persuasivo, pero sobre todo disuasivo. Es muy eficaz en comunicación institucional y para campañas de bien público en las que hay que convencer al público objetivo que realice una acción específica para evitar ciertas consecuencias; por ejemplo, las campañas que promueven el apoyo a fundaciones o las que invitan a moderar el consumo de alcohol. Este tono genera algo grado de recordación.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src='@/assets/curso/temas/tema5/img22.svg')
        h5.text-center.mt-4  Emotivo
        p.mt-3.text-center.txt-sistema Es tal vez el más eficaz debido al comportamiento en el consumo de la mayoría de las personas; un alto porcentaje de las compras se realizan motivadas por las emociones, es por eso por lo que muchos anuncios y campañas son realizadas con este tono de comunicación. Tiene el objetivo de hacer brotar sentimientos como la ternura, llanto, compasión, ira y sobrecogimiento. Es muy persuasivo y recordativo.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src='@/assets/curso/temas/tema5/img18.svg')
        h5.text-center.mt-4 Humorístico
        p.mt-3.text-center.txt-sistema Es un tono muy utilizado, altamente efectivo y recordativo; sin embargo, no es apto para todas las marcas. Es muy eficiente en publicidad de productos para niños, jóvenes y para productos de consumo masivo.
        p.mt-3.text-center.txt-sistema Además, debido a las tendencias del mercado, se han lanzado campañas muy exitosas de productos financieros, seguros y telecomunicaciones con tono humorístico.

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src='@/assets/curso/temas/tema5/img19.svg')
        h5.text-center.mt-4 Aspiracional
        p.mt-3.text-center.txt-sistema Es un tono muy eficaz para productos financieros, agencias de viajes y educación, tiene un alto nivel de persuasión, aunque es poco recordativo, es efectivo en el momento en que el mercado objetivo es expuesto al mensaje, de ahí su nivel de uso en campañas en medios digitales como la #[i web] y las redes sociales. Tiene un enfoque más alto en el mercado de adultos jóvenes.
      
    .titulo-cus.mb-4.w-3
        h4 Tema
    p.mb-5 El tema es un elemento subjetivo y es donde se da rienda suelta a la creatividad, es en este punto donde el #[i target] comunicacional realizado anteriormente toma mayor relevancia, pues en cada uno de los detalles descritos en él, se pueden encontrar temas que sean eficaces para el diseño del mensaje. El tema se refiere a un momento, lugar y situación específicos en la que se desarrollará el mensaje, ya sea audiovisual, impreso, digital, textual o auditivo.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img23.svg')
      .col-sm-12.col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Se puede tomar como tema una cena familiar; este contiene los tres elementos descritos: cena indica que es en la noche, familiar una situación específica y las posibles personas que intervienen en ella y el lugar porque se puede deducir que será en una casa o en un restaurante. Es importante definir cada uno de estos elementos en la descripción del tema.
    .d-flex.mb-4.align-items-center
        img.w-card-icon(src="@/assets/curso/temas/tema3/img51.svg")
        .bg9.py-2.w-card-text.fw-bold El racional creativo
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-10
        p El racional creativo es un documento que recoge toda la información anterior en una idea concreta; es decir, es la idea en sí, descrita y estructurada. Para su desarrollo es necesario tener en cuenta todos los elementos de la estrategia: descripción del mercado objetivo, #[i target] comunicacional y concepto creativo.
        p.mb-0 Adicionalmente, el racional creativo debe tener dentro de su base dos elementos inspiradores que tal vez se hayan detectado en el proceso de investigación y desarrollo del #[i target] comunicacional; la propuesta de valor y el #[i key insight].
      .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img38.svg', alt='')
    //.fullview-2
      .row.justify-content-center.align-items-center.mb-5.p-5
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema5/img24.svg')
        .col-sm-12.col-lg-9
          h4.text-white Propuesta de valor
          p.mb-5 Hoy en día se hace mucho énfasis en este elemento y se suele confundir con el factor diferenciador de un producto o servicio. El diferenciador o USP (#[i Unique Selling Propotition]) es una técnica que se debe al publicista Rosser Reeves de la agencia norteamericana Ted Bates and Company, que ha terminado siendo un referente universal de la publicidad.
          a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/propuestadevalor_infografia.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .d-flex.mb-4.align-items-center
        img.w-card-icon(src="@/assets/curso/temas/tema3/img51.svg")
        .bg9.py-2.w-card-text.fw-bold Propuesta de valor
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img25.png')
      .col-sm-12.col-lg-8.bg10.p-5
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-8
              p.mb-5 Hoy en día se hace mucho énfasis en este elemento y se suele confundir con el factor diferenciador de un producto o servicio. El diferenciador o USP (#[i Unique Selling Propotition]) es una técnica que se debe al publicista Rosser Reeves de la agencia norteamericana Ted Bates and Company, que ha terminado siendo un referente universal de la publicidad.
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/propuestadevalor_infografia.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema5/img24.svg')
        
    .d-flex.mb-4.align-items-center
        img.w-card-icon(src="@/assets/curso/temas/tema3/img51.svg")
        .bg9.py-2.w-card-text.fw-bold Los #[i insights]
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-9
        p Los #[i insights] representan un aspecto culto, profundo y a menudo inconsciente del pensamiento, sentimiento o comportamiento del consumidor que explica la relación estrecha, emocional y simbólica que este sostiene con los productos o servicios que consume o usa. La identificación y desarrollo de #[i insights] del consumidor bajo la forma de promesas publicitarias, estrategias de comunicación y diseño de nuevos productos, es la clave para el éxito del negocio, pero su puesta en marcha no siempre es sencilla. A menudo requiere altas dosis de intuición, olfato psicológico, empatía y sobre todo suerte (lograr descubrimientos afortunados por accidente). El momento de descubrimiento de un #[i consumer  insights] es un momento de elevada revelación e inspiración.
        p El #[i insight] es una palabra que  proviene de la psicología, y se utiliza cuando el psicoterapeuta puede entender con claridad el problema (motivo de consulta) de su paciente luego de largas sesiones de auscultarlo y conversar con él. Ese momento, el de la revelación, es propiamente un #[i insight] pues el terapeuta comprende el origen del problema y las motivaciones más ocultas del paciente para actuar de la forma que hace.
        p La publicidad utiliza el concepto cuando un creativo identifica datos reveladores sobre la conducta del consumidor que antes no pensaba, sabía o tenía en mente.
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img26.svg')
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .bloque-texto-c.color-secundario.p-4
          .d-flex
            i.fas.fa-quote-left
            p.mb-3.mt-2.mx-3 El #[i insight] psicológico permite así comprender a los productos no solo como satisfactores de necesidades biológicas o funcionales, sino también como de gustos y demandas en ocasiones no consientes.
              i.fas.fa-quote-right.com-cus
          .d-flex.justify-content-end
            span.mb-3 - (Roig, 2011)
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img27.png')

      .col-sm-12.col-lg-8
        h4 ¿Cómo hallar #[i insights]?
        .tarjeta.bgimg6.p-4
          PasosB.color-secundario
            .row.mt-5.justify-content-center.align-items-center(titulo="Paso 1")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema5/img28.png', alt='')
              .col-sm-12.col-lg-6
                p Descubriendo la forma del cómo el consumidor se percibe y concibe a sí mismo.
            .row.mt-5.justify-content-center.align-items-center(titulo="Paso 2")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema5/img29.png', alt='')
              .col-sm-12.col-lg-6
                p Analizar el mercado tal como el consumidor lo percibe. Esto es, mirar el mercado por y desde el consumidor.
            .row.mt-5.justify-content-center.align-items-center(titulo="Paso 3")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema5/img30.png', alt='')
              .col-sm-12.col-lg-6
                p Explorando la psicología profunda del consumo y el rol simbólico que ésta tiene para el consumidor.
            .row.mt-5.justify-content-center.align-items-center(titulo="Paso 4")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema5/img31.png', alt='')
              .col-sm-12.col-lg-6
                p Indagando, observando, escuchando y explorando. El #[i insight] no aparece fácilmente: hay que encontrarlo. La mejor manera de hacerlo es estando en contacto permanente y en forma profunda con nuestros consumidores.
            .row.mt-5.justify-content-center.align-items-center(titulo="Paso 5")
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema5/img32.png', alt='')
              .col-sm-12.col-lg-6
                p Usando el olfato e intuición psicológica. Un #[i consumer  insight] tiene tanto de intuición como de hechos fácticos. (Roig, 2011)
    p Émile Durkheim a mediados del siglo XIX creó el método decir, sentir, actuar; muy eficaz para el hallazgo de #[i insights]; el cual, se representa a través de lo indicado por #[i Consumer truth] (2020):
    .fullview-3.p-4.mb-5
      .tarjeta.tarjeta--white.m-4.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-6
              h4 El decir del consumidor - técnicas facilitadoras: 
              p.mb-0 Trata de técnicas basadas en el decir del consumidor (expresión, ideas, conceptos, creencias en torno al consumo). A través de juegos de palabras, asociación de ideas, #[i brainstorming], #[i collage] de imágenes y otras tareas creativas, el consumidor es ayudado en su proceso de enunciar el porqué de su consumo y la relación estrecha que tiene (o no tiene) con los productos.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema5/img34.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-6
              h4 El sentir del consumidor – técnicas proyectivas:
              p.mb-0 Trata de técnicas basadas en el sentir del consumidor (sentimientos y emociones profundas que despierta y suscita el consumo). Mediante técnicas basadas en conflictos emocionales, a través de frases/historias incompletas, etc; se logran obtener profundas expresiones emocionales que subyacen el consumo que a menudo son “constreñidas” por el uso de la razón y el imperio de la lógica.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema5/img35.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-6
              h4 El actuar del consumidor – técnicas etnográficas:
              p.mb-0 Trata de técnicas basadas en el hacer (la acción de compra y consumo). El consumidor es observado en su contexto natural y hábitat para observar “#[i in situ]” el comportamiento cotidiano, las dinámicas y rituales del consumo. Se basan en el fundamento que el consumidor suele decir una cosa y hacer otra, entonces es necesario acudir a la observación y no solo a la declaración. Entre estas técnicas se aplican el “Acompañamiento”, “#[i One day in the life]”, “Observación Participante”, “#[i In Home Visit]”, “#[i Shopper Trips]”, entre otras.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema5/img36.png', alt='')
    p.mb-5 Como complemento del proceso de identificación de #[i insights], se recomienda aplicar la pirámide de los #[i insights] que se basa en el trabajo de Mohan Sawhney (2003). #[i Research that Produces Consumer Insights]:
    .row.justify-content-center.mb-5
      .col-sm-12.col-md-6.col-lg-4.bg11.px-5.py-3
        h4.mb-0.text-center Pirámide de los #[i insights]
    .row.justify-content-center.mb-5
      .col-sm-12.col-md-12.col-lg-12.col-xl-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img37.svg')
              figcaption Fuente: SENA (2020), basada en Sawhney (2003)
          .tarjeta.color-cus-1.p-3(x="63%" y="8%" numero="")
            p.mb-0 Estrategia de innovación, #[i branding] o comunicación basados en  #[i consumer insights].
          .tarjeta.color-cus-2.p-3(x="72.5%" y="26%" numero="")
            p.mb-0 Verdades desnudas del consumidor que conectan las marcas con las personas, de forma poco evidente.
          .tarjeta.color-cus-3.p-3(x="82%" y="46%" numero="")
            p.mb-0 Metáforas profundas que se derivan de las informaciones, lo que el producto significa. 
          .tarjeta.color-cus-4.p-3(x="91%" y="65%" numero="")
            p.mb-0 Interpretación de los hechos detrás de los datos.
          .tarjeta.color-cus-5.p-3(x="100%" y="85%" numero="")
            p.mb-0 Observaciones, hechos, estadísticas, SIM.







</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
