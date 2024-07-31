<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Creatividad
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img1.svg', alt='')
      .col-sm-12.col-lg-11
        p.mb-0 Existen casos en la naturaleza que evidencian su presencia en algunas especies; por ejemplo: el ave martín pescador atrapa peces poniendo como carnada frutas o pequeños insectos que consume su presa. El buitre-águila barbado, un ave carroñera que se eleva a una altura considerable para dejar caer huesos en zonas rocosas y de esta forma extraer la médula que es su alimento favorito por la alta concentración de proteína y grasas.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
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
