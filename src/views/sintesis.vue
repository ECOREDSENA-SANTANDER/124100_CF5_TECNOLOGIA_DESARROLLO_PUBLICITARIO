<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La creatividad es la capacidad de generar ideas originales y valiosas. Existen varias definiciones de creatividad, que pueden ser psicológicas, cognitivas y sociales. El proceso creativo se compone de preparación, incubación, iluminación y verificación. Para facilitar este proceso, se utilizan diversas técnicas creativas como el brainstorming, mapa mental, SCAMPER y pensamiento lateral. En cuanto a la estrategia creativa, su desarrollo implica análisis del contexto, definición de objetivos, identificación del target comunicacional y desarrollo del concepto creativo. Los objetivos buscan aumentar el reconocimiento de marca, generar leads, impulsar ventas y cambiar percepciones, mientras que el target comunicacional se centra en el público objetivo. El concepto creativo es la idea central que guía toda la campaña.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
