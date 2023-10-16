<template>
    <header>
        <div>
            <myNav></myNav>
            <div class="banner"></div>
        </div>
    </header>
</template>

<script>
    import myNav from "@/components/myNav.vue";
    
    export default {
      components: {
        myNav // Registra el componente para su uso
      },
      // Código JavaScript de la vista
    }
</script>

<style scoped>
    .banner{
        width: 100%;
        height: 600px;
        background: url(../assets/img/paisaje1.jpg) no-repeat center;
        background-size: cover;
    }
</style>