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
        p.mb-0 La estrategia creativa es un proceso de desarrollo de ideas para la comunicación publicitaria, busca que la interacción entre el cliente y la marca sea lo más efectiva posible. Además, incluye varios elementos: objetivos, target comunicacional y concepto creativo. 
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
