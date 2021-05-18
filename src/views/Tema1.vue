<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Creatividad
    
    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/ivz15d1vPI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption CREATIVIDAD
    p.mb-5
    .cajon.color-acento-contenido.p-4.mb-5.mb-lg-0.cajon.color-acento-contenido-clarito
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          p Se habla mucho de la creatividad y es un concepto de moda en muchas áreas; desde la superación personal con el concepto de coaching, pasando por la creación de nuevos emprendimientos en lo que hoy se denominan startup, hasta en la investigación científica. Lo cierto es que es inherente al ser humano y podría decirse que está presente en ciertos comportamientos de algunos animales, si se remite al concepto estricto de lo que es creatividad, (la solución de problemas). 
        .col-lg-3
          img(src='@/assets/curso/tema1/t1-f1.svg', alt='T1-F1').p-4
    p.mb-5
    .cajon_purpura.p-4.mb-5.mb-lg-0
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3
          img(src='@/assets/curso/tema1/t1-f2.svg', alt='T1-F2').p-4
        .col-lg-9
          p Existen casos en la naturaleza que evidencian su presencia en algunas especies; por ejemplo: el ave martín pescador atrapa peces poniendo como carnada frutas o pequeños insectos que consume su presa. El buitre-águila barbado, un ave carroñera que se eleva a una altura considerable para dejar caer huesos en zonas rocosas y de esta forma extraer la médula que es su alimento favorito por la alta concentración de proteína y grasas. 
          
</template>

<script>
//import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    //Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
