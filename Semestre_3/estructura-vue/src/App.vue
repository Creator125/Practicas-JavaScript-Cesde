<template>
  <myHeader/>
  <myMain titulo="Titulo principal"
      text="Sed option dolore gubergren. Sit rebum dolor invidunt
            laoreet magna kasd sit dolores ipsum et. Illum facilisi 
            lorem sadipscing clita sea sanctus erat eum." 
  />
  <myFooter></myFooter>
</template>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
</style>

<script>
  import myHeader from "@/components/myHeader.vue";
  import myMain from "@/components/myMain.vue";
  import myFooter from "@/components/myFooter.vue"
  
  export default {
    components: {
      myHeader,
      myMain,
      myFooter // Registra el componente para su uso
    },
    // Código JavaScript de la vista
  }
  </script>