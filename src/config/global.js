export default {
  global: {
    componenteFormativo: 'Estrategia creativa',
    descripcionCurso:
      'En el ámbito de la publicidad y la comunicación, la creatividad se hace necesaria e indispensable, ya que los anunciantes están siempre en la búsqueda de agencias o publicistas que realicen para ellos anuncios que marquen la diferencia y den un toque de originalidad y diferenciación a sus productos frente a la competencia. Sin embargo, en la realización publicitaria la creatividad tiene cabida en todos los frentes: medios, estrategias, redacción de textos, creación de imágenes, <i>merchandising</i> y promoción de ventas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Creatividad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Definiciones de creatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El proceso creativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas creativas',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La estrategia creativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Desarrollo de la estrategia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Objetivos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: '<i>Target</i> comunicacional',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'El concepto creativo',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF5_124100_DU.zip',
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
  complementario: [
    {
      tema: 'La Creatividad',
      referencia:
        'Ecosistema de recursos educativos digitales SENA. 2020. La Creatividad.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y-gvlyG4lkA',
    },
    {
      tema: 'La estrategia creativa',
      referencia:
        'Ecosistema de recursos educativos digitales SENA.  2020.  Proceso creativo.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UAVe89VNWm4',
    },
    {
      tema: 'Propuesta de valor.',
      referencia: 'Nestle. 2011. Propuesta de valor.',
      tipo: 'Infografía',
      descarga: '/downloads/propuestadevalor_infografia.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aviso',
      significado:
        'En términos generales, un aviso, refiere a aquel anuncio o noticia que una persona tiene para darle a otra o bien, aquel que está destinado a un público mucho más amplio y que puede referir a cualquier situación plausible de comunicarse.  Casi siempre, si se trata de este último caso, los medios de comunicación masiva serán quienes porten el aviso en cuestión. ',
    },
    {
      termino: '<i>Branding<i>',
      significado:
        'Hace referencia al proceso de creación de valor de marca (<i>brand equity</i>) mediante la administración estratégica del conjunto total de activos y pasivos vinculados en forma directa o indirecta al nombre o símbolo (isotipo) que identifican a la marca influyendo en el valor suministrado; tanto al cliente como a la empresa oferente; por un producto o servicio, incrementando o reduciendo según el caso. ',
    },
    {
      termino: '<i>Briefing</i>',
      significado:
        'Conjunto de datos sobre la empresa, sus objetivos, su estrategia... que sirven de base al consultor o diseñador para plantear la comunicación corporativa. ',
    },
    {
      termino: 'Canal',
      significado:
        'En teoría de la comunicación, camino técnico o fisiológico que recorre un mensaje desde el emisor hasta el receptor. ',
    },
    {
      termino: 'Comunicación',
      significado:
        'Término que deriva del latín <i>commune</i> y del sufijo ie-, similar a fie-, que significa hacer; es decir, realizar la transmisión de información o de conocimiento entre una persona y otra del modo más exacto posible. ',
    },
    {
      termino: 'Diseño gráfico',
      significado:
        'Es una actividad intelectual, técnica y creativa involucrada no solamente con la producción de imágenes sino con el análisis, la organización y los métodos de presentación de soluciones visuales a los problemas de comunicación. ',
    },
    {
      termino: 'Información',
      significado:
        'Se entiende comúnmente por información la noticia; es decir, el mensaje ligado al contenido de una cosa significada. ',
    },
    {
      termino: 'Mensaje',
      significado:
        'Serie organizada de signos según un código, con la intención de comunicar. ',
    },
    {
      termino: 'Mnemotécnico',
      significado:
        'Es un sistema sencillo de código para recordar aspectos fácilmente (señales, números, letras, datos, nombres, entre otros). ',
    },
    {
      termino: '<i>Teaser</i>',
      significado:
        'Es conocido como una técnica que se utiliza al momento de lanzar, ya sea un producto o un servicio. Su principal función es generar intriga en el público. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Castelló, A. Pino, C. (2019). De la Publicidad a la Comunicación Persuasiva. Esic Editorial',
    },
    {
      referencia:
        'Consumer truth. (2020). Técnicas de Insights. https://consumer-truth.com.pe/tecnicas-de-insights/',
      link: 'https://consumer-truth.com.pe/tecnicas-de-insights/',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A.',
    },
    {
      referencia:
        'Fundación Neuronilla para la Creatividad y la Innovación. (2020). Técnicas de Creatividad para la Innovación. https://neuronilla.com/desarrolla-creatividad/tecnicas-creatividad/',
      link:
        'https://neuronilla.com/desarrolla-creatividad/tecnicas-creatividad/',
    },
    {
      referencia:
        'Gerard, J. P. (2015). Imagina lo Imposible: Manual Práctico & Caja de Herramientas para la Innovación. 2015. Ril Editores, Editorial Universidad Católica de la Santísima Concepción.',
    },
    {
      referencia:
        'Publicidad y Promoción. (2010). El Proceso Creativo. https://publicidadypromocion2010.wordpress.com/2010/11/08/el-proceso-creativo/',
      link:
        'https://publicidadypromocion2010.wordpress.com/2010/11/08/el-proceso-creativo/',
    },
    {
      referencia:
        'Rajadell, M. (2019). Creatividad. Emprendimiento y Mejora Continua. Editorial Reverté.',
    },
    {
      referencia:
        'Reimers Design. (s.f.). Pequeño Diccionario del Diseñador. Consultado el 27 de mayo de 2020. https://losqueno.com/wp-content/uploads/2015/04/DICCIONARIO-DISE--O.pdf',
      link:
        'https://losqueno.com/wp-content/uploads/2015/04/DICCIONARIO-DISE--O.pdf',
    },
    {
      referencia:
        'Roig, F. A. (2011). La estrategia creativa: Relaciones entre concepto e idea. Ediciones Infinito.',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación Estratégica. Editorial UOC.',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla',
          cargo: 'Desarrolladora <i>full stack</i> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
