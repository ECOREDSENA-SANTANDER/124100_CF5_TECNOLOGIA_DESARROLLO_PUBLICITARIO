<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Definiciones de creatividad
    .bloque-texto-a.p-4.p-md-5.mb-5.fondo-purpura_invertido
      .row.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/tema2/t2-f1.svg', alt='T2-F1')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El sustantivo creatividad, procede etimológicamente de la palabra creare, evoluciona hacia criar y llega a la actualidad derivada del verbo crear. La primera utilización escrita del término en inglés data de 1875 cuando Ward califica sin definir la aptitud de Shakespeare con la acepción «creatividad poética». La primera definición del concepto aparece en el año 1961, en el Webster’s Third Dictionary como «habilidad de crear».
            br
            p En el diccionario de la Real Academia Española (RAE), se incorpora por primera vez en 1984 como «facultad de crear» y «capacidad de creación». Para la RAE, crear significa en su primera acepción «producir algo de la nada», como ejemplo se propone «Dios creó los cielos y la tierra». En el caso del adjetivo creativo, la RAE lo define como:
    .row.mb-5.align-items-center.justify-content-between
      .col-lg-6.px-5
        ul.lista-ul--separador
          li 
            i.fas.fa-play
            | Que posee o estimula la capacidad de creación, invención, etc.
          li 
            i.fas.fa-play
            | Capaz de crear algo.
          li 
            i.fas.fa-play
            | Profesional encargado de la concepción de una campaña publicitaria.
      .col-lg-4.px-4
        img(src='@/assets/curso/tema2/t2-f2.svg', alt='T2-F2')
    .row.mb-5
      .col-lg-8.mx-auto
        .bloque-texto-b.color-secundario.fondo-purpura-before.p-4.mb-4
          .bloque-texto-d__texto
            i.fas.fa-quote-left
            span.h5.mb-0 No existen individuos carentes de creatividad, solo existen personas más o menos frenadas, calcificadas o aletargadas que requieren un adiestramiento
            i.fas.fa-quote-right
        span (Castelló y del Pino, 2019, p.39, basado en Aznar, Ferrer y de Bas, 1996).
    .cajon--azul.p-4.mb-5.mb-lg-0
      .row.mb-5.align-items-center.justify-content-between
        .col-lg-12
          p Las soluciones creativas son fruto de un trabajo previo intenso que incluye el ensayo y el error en pruebas, es producto de aproximaciones y de cambios.
          br
          p Desde los ámbitos de la psicología y la pedagogía, la investigación científica y las teorías no deterministas han permitido desmitificar la visión de la creatividad como una cualidad casi mística que solo algunos individuos poseen. Autores como Amabile (1983), Golen (1983), Boden (1994), Csikszentmihaly y Colodrón (1999) o Sternberg (2006), entienden la creatividad como una capacidad que puede ser desarrollada y que, en consecuencia, puede ser estimulada y enseñada, haciendo especial hincapié en la importancia de la actitud, la motivación y las características del entorno del individuo –el contexto social, cultural, educativo, histórico, etc.– Maslow (1985) consideraba la creatividad como una habilidad deseable en cualquier campo profesional. (Castelló y del Pino, 2019, p.39)
    .row.my-5
      .col-lg-5.p-4
        img(src='@/assets/curso/tema2/t2-f3.svg', alt='T2-F3')
      .col-lg-7.p-4
        p.mb-5 En el ámbito de la publicidad y la comunicación, la creatividad se hace necesaria e indispensable, ya que los anunciantes están siempre en la búsqueda de agencias o publicistas que realicen para ellos anuncios que marquen la diferencia y den un toque de originalidad y diferenciación a sus productos frente a la competencia. Sin embargo, en la realización publicitaria la creatividad tiene cabida en todos los frentes:
        ul.lista-ul--separador.ps-5
          li 
            i.fas.fa-play
            | Medios
          li 
            i.fas.fa-play
            | Estrategias
          li 
            i.fas.fa-play
            | Redacción de textos
          li 
            i.fas.fa-play
            | Creación de imágenes
          li 
            i.fas.fa-play
            | Merchandising
          li 
            i.fas.fa-play
            | Promoción de ventas

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
