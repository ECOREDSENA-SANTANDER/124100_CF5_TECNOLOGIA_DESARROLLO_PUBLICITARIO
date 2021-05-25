<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 La estrategia creativa
    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/gyWNLNeB1Jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption.mb-5 ESTRATEGIA CREATIVA
    p La estrategia creativa es el proceso intelectual que lleva al desarrollo de tácticas para la elaboración de una idea, permaneciendo en la mente de los consumidores de una marca, producto o servicio.
    br
    p.mb-5 <b>La estrategia creativa debe ir ligada a la marca, ambos deben contemplar el mismo concepto.</b>
    .col-lg-8.mx-auto
      .bloque-texto-b.color-secundario.p-4.mb-5.fondo-purpura-before
        .bloque-texto-d__texto
          i.fas.fa-quote-left
          span.h5.mb-0 La estrategia creativa, no es la idea creativa. Nos conduce hacia ella, por el camino del análisis erudito y la reflexión intelectual
          i.fas.fa-quote-right
          span - Roig
    p <b>La estrategia creativa es la construcción de la idea, mientras que la estrategia de comunicación es la construcción del mensaje.</b> Es importante tener claras estas diferencias, porque una idea es aquello que contiene el mensaje.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
