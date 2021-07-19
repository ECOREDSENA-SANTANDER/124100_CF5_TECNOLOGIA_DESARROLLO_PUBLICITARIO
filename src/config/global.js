export default {
  global: {
    componenteFormativo: 'Estrategia creativa',
    descripcionCurso:
      'En el ámbito de la publicidad y la comunicación, la creatividad se hace necesaria e indispensable, ya que los anunciantes están siempre en la búsqueda de agencias o publicistas que realicen para ellos anuncios que marquen la diferencia y den un toque de originalidad y diferenciación a sus productos frente a la competencia. Sin embargo, en la realización publicitaria la creatividad tiene cabida en todos los frentes: medios, estrategias, redacción de textos, creación de imágenes, merchandising y promoción de ventas.',
    imagenBannerPrincipal: require('@/assets/curso/CF5-banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/CF5-banner-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      /*{
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Creatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Definiciones de creatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El proceso creativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas creativas',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La estrategia creativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Desarrollo de la estrategia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Objetivos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Target comunicacional',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'El concepto creativo',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castelló, A. Pino, C. (2019). De la Publicidad a la Comunicación Persuasiva. Esic Editorial.',
    },
    {
      referencia: 'Consumer truth. (2020). Técnicas de Insights.',
      link: 'https://cutt.ly/coqGVlR',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A.',
    },
    {
      referencia:
        'Fundación Neuronilla para la Creatividad y la Innovación. (2020). Técnicas de Creatividad para la Innovación.',
      link: 'https://cutt.ly/CpsdBrp',
    },
    {
      referencia:
        'Gerard, J. P. (2015). Imagina lo Imposible: Manual Práctico & Caja de Herramientas para la Innovación. 2015. Ril Editores, Editorial Universidad Católica de la Santísima Concepción.',
    },
    {
      referencia: 'Publicidad y Promoción. (2010). El Proceso Creativo.',
      link: 'https://cutt.ly/woqFXKN',
    },
    {
      referencia:
        'Rajadell, M. (2019). Creatividad. Emprendimiento y Mejora Continua. Editorial Reverté.',
    },
    {
      referencia:
        'Reimers Design. (s.f.). Pequeño Diccionario del Diseñador. Consultado el 27 de mayo de 2020.',
      link: 'https://cutt.ly/VyDzeWh',
    },
    {
      referencia:
        'Roig, F. A. (2011). La estrategia creativa: Relaciones entre concepto e idea. Ediciones Infinito.',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación Estratégica. Editorial UOC.',
      link: 'https://cutt.ly/VyDzeWh',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC.',
    },
  ],
  glosario: [
    {
      termino: 'Aviso',
      significado:
        'En términos generales, un aviso, refiere a aquel anuncio o noticia que una persona tiene para darle a otra o bien, aquel que está destinado a un público mucho más amplio y que puede referir a cualquier situación plausible de comunicarse.<br><br>Casi siempre, si se trata de este último caso, los medios de comunicación masiva serán quienes porten el aviso en cuestión.',
    },
    {
      termino: 'Branding',
      significado:
        'Hace referencia al proceso de creación de valor de marca (brand equity) mediante la administración estratégica del conjunto total de activos y pasivos vinculados en forma directa o indirecta al nombre o símbolo (isotipo) que identifican a la marca influyendo en el valor suministrado; tanto al cliente como a la empresa oferente; por un producto o servicio, incrementando o reduciendo según el caso.',
    },
    {
      termino: 'Briefing',
      significado:
        'Conjunto de datos sobre la empresa, sus objetivos, su estrategia... que sirven de base al consultor o diseñador para plantear la comunicación corporativa.',
    },
    {
      termino: 'Canal',
      significado:
        'En teoría de la comunicación, camino técnico o fisiológico que recorre un mensaje desde el emisor hasta el receptor.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Término que deriva del latín commune y del sufijo ie-, similar a fie-, que significa hacer; es decir, realizar la transmisión de información o de conocimiento entre una persona y otra del modo más exacto posible.',
    },
    {
      termino: 'Diseño gráfico',
      significado:
        'Es una actividad intelectual, técnica y creativa involucrada no solamente con la producción de imágenes sino con el análisis, la organización y los métodos de presentación de soluciones visuales a los problemas de comunicación.',
    },
    {
      termino: 'Información',
      significado:
        'Se entiende comúnmente por información la noticia; es decir, el mensaje ligado al contenido de una cosa significada.',
    },
    {
      termino: 'Mensaje',
      significado:
        'Serie organizada de signos según un código, con la intención de comunicar.',
    },
    {
      termino: 'Mnemotécnico',
      significado:
        'Es un sistema sencillo de código para recordar aspectos fácilmente (señales, números, letras, datos, nombres, entre otros).',
    },
    {
      termino: 'Teaser',
      significado:
        'Es conocido como una técnica que se utiliza al momento de lanzar, ya sea un producto o un servicio. Su principal función es generar intriga en el público.',
    },
  ],
  complementario: [
    {
      texto: 'La Creatividad',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ivz15d1vPI0',
    },
    {
      texto: 'La estrategia creativa',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gyWNLNeB1Jc',
    },
    {
      texto: 'Propuesta de valor.',
      tipo: 'Infografía',
      descarga: '/downloads/propuestadevalor_infografia.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor – Experto temático',
        centro: 'Centro de Comercio y Servicios Regional Quindío',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Evaluadora Instruccional',
        centro:
          'Centro para la Industria y la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Productora audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Jesús Antonio Vecino'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: ['Validación de diseño y contenido'],
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
