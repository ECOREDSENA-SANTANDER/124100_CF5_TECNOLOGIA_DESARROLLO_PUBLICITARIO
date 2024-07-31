<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 El proceso creativo
    .row.justify-content-between.align-items-center.mb-5
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg2.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-4.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema3/img1.svg')
          .title-card.bg3.mx-2.text-white Fluidez
          p.mt-4.text-center.mx-2 Esta característica se refiere a la capacidad de generar ideas de manera abundante y rápida; para desarrollar una gran idea, es necesario tener cientos de ellas.
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg2.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-4.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema3/img2.svg')
          .title-card.bg4.mx-2 Flexibilidad
          p.mt-4.text-center.mx-2 El desarrollo creativo implica el poder de la adaptación, las ideas pueden llegar desde cualquier dirección y es necesario tener la capacidad de tomar una alternativa y convertirla en solución. La flexibilidad implica también el rechazo de ideas valiosas que por una u otras circunstancias pierden aplicabilidad. El creativo debe ser flexible para poder adaptar cualquiera de ellas de la forma más adecuada posible para generar soluciones eficientes.
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg2.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-4.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema3/img3.svg')
          .title-card.bg3.mx-2.text-white Originalidad
          p.mt-4.text-center.mx-2 La originalidad no se refiere necesariamente a que algo es único o irrepetible, las ideas originales pueden darse también a través de la forma como se llevan a cabo o se presentan, aquí es donde se hace presente el pensamiento lateral; es decir, pensar de una forma un poco diferente de lo que pensaría el común de la gente, entendido como la realización de acciones con otras versiones diferentes.
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg2.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-4.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema3/img4.svg')
          .title-card.bg4.mx-2 Ejecución
          p.mt-4.text-center.mx-2 En ocasiones, el llevar a cabo una idea es más complejo que plantearla; por ello, el creativo debe ser también un realizador de ella y saber acudir a los recursos disponibles para llevarla a cabo. Muchas veces es en su ejecución, en donde esta se convierte en grande y es en ese momento, donde el profesional debe tener la capacidad de tomar cualquier idea, transformarla, mejorarla y generar con ella soluciones innovadoras.
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema3/img5.svg', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 Para llevar a cabo el proceso creativo, es importante contar con toda la información posible del problema #[b que se busca solucionar, así como tener claro que la creatividad no es un chispazo que llega de la nada generando ideas asombrosas]; por el contrario, implica un diagnóstico previo de las situaciones para las que se están generando ideas, ya que suena imposible pensar en algo que no se conoce o de lo que no se sabe nada. Es por esto por lo que, en campos como #[b  publicidad, el diseño o la producción audiovisual,] el primer paso para el desarrollo creativo sea el brief.
        .cajon.color-secundario.p-4
          p.mb-0 #[b Para el desarrollo de la creatividad, no hay una fórmula mágica,] porque no todas las personas piensan de la misma manera, pues para algunas es más efectivo meditar, para otros caminar y para otros tomar notas y hacer dibujos o mamarrachos en una hoja; lo cierto, es que todas las personas son creativas, la diferencia radica en que algunas tienen ideas constantemente y las llevan a cabo
    p.fw-bold.mb-0 A continuación, se presentan algunos de los métodos más populares para el proceso creativo y la forma como se llevan a cabo. Se relacionan, sobre todo, los más utilizados en el desarrollo de estrategias de comunicación y publicidad:
    Separador
    #t_3_1.titulo-segundo.color-secundario
      h2  3.1 Técnicas creativas










</template>

<script>
export default {
  name: 'Tema3',
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
