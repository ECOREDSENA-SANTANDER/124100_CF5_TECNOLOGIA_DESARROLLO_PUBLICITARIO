<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Definiciones de creatividad
    .row.justify-content-around.align-items-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img1.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-3 El sustantivo creatividad, procede etimológicamente de la palabra #[i creare], evoluciona hacia criar y llega a la actualidad derivada del verbo crear. La primera utilización escrita del término en inglés data de 1875 cuando Ward califica sin definir la aptitud de Shakespeare con la acepción «creatividad poética». La primera definición del concepto aparece en el año 1961, en el #[i Webster’s Third Dictionary] como «habilidad de crear».
        p.mb-0 En el diccionario de la Real Academia Española (RAE), se incorpora por primera vez en 1984 como «facultad de crear» y «capacidad de creación». Para la RAE, crear significa en su primera acepción «producir algo de la nada», como ejemplo se propone «Dios creó los cielos y la tierra».
    p.mb-5  En el caso del adjetivo creativo, la RAE lo define como:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-md-6.col-lg-4.mb-cus
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/img2.svg')
              .tarjeta.bg1.w-100
                .p-4
                  h5.text-center.mt-1.mb-0 Que posee o estimula la capacidad de creación, invención, etc.
                  
          .col-sm-12.col-md-6.col-lg-4.mb-cus
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/img3.svg')
              .tarjeta.bg1.w-100
                .p-4
                  h5.text-center.mt-1.mb-0 Capaz de crear algo.
                  
          .col-sm-12.col-md-6.col-lg-4.mb-cus
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/img4.svg')
              .tarjeta.bg1.w-100
                .p-4
                  h5.text-center.mt-1.mb-0 Profesional encargado de la concepción de una campaña publicitaria.
    
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4
        .bloque-texto-b.color-terciario.p-4.mb-cus
          .bloque-texto-b__texto.d-flex.flex-column
            i.fas.fa-quote-left
            
            h5.mb-0.d-block.mt-0 #[br]No existen individuos carentes de creatividad, solo existen personas más o menos frenadas, calcificadas o aletargadas que requieren un adiestramiento.
                i.fas.fa-quote-right
            p.d-flex.justify-content-start.d-block.mb-0 #[br](Castelló y del Pino, 2019, p.39, basado en Aznar, Ferrer y de Bas, 1996).

      .col-sm-12.col-lg-8
        p.mb-cus-2.mt-1 Las soluciones creativas son fruto de un trabajo previo intenso que incluye el ensayo y el error en pruebas, es producto de aproximaciones y de cambios.
        p.mb-0 Desde los ámbitos de la psicología y la pedagogía, la investigación científica y las teorías no deterministas han permitido desmitificar la visión de la creatividad como una cualidad casi mística que solo algunos individuos poseen. Autores como Amabile (1983), Golen (1983), Boden (1994), Csikszentmihaly y Colodrón (1999) o Sternberg (2006), entienden la creatividad como una capacidad que puede ser desarrollada y que, en consecuencia, puede ser estimulada y enseñada, haciendo especial hincapié en la importancia de la actitud, la motivación y las características del entorno del individuo –el contexto social, cultural, educativo, histórico, etc. –Maslow (1985) consideraba la creatividad como una habilidad deseable en cualquier campo profesional. (Castelló y del Pino, 2019, p.39).         
    .row.justify-content-center.align-items-start.mb-5
        .col-sm-12.col-lg-8
          p.mb-5 En el ámbito de la publicidad y la comunicación, la creatividad se hace necesaria e indispensable, ya que los anunciantes están siempre en la búsqueda de agencias o publicistas que realicen para ellos anuncios que marquen la diferencia y den un toque de originalidad y diferenciación a sus productos frente a la competencia. Sin embargo, en la realización publicitaria la creatividad tiene cabida en todos los frentes:
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6
              ul.lista-ul.mb-5
                li 
                  i.fas.fa-check-circle.color-primario
                  | Medios.
                li 
                  i.fas.fa-check-circle.color-primario
                  | Estrategias.
                li 
                  i.fas.fa-check-circle.color-primario
                  | Redacción de textos.
            .col-sm-12.col-lg-6
              ul.lista-ul.mb-5
                li 
                  i.fas.fa-check-circle.color-primario
                  | Creación de imágenes.
                li 
                  i.fas.fa-check-circle.color-primario
                  | #[i Merchandising].
                li 
                  i.fas.fa-check-circle.color-primario
                  | Promoción de ventas.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema2/img5.svg')



</template>

<script>
export default {
  name: 'Tema2',
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
