<template>
    <h1>{{ titulo }}</h1>
    <p>{{ text }}</p>
</template>

<style scoped>
    h1,p{
        text-align: center;
    }
</style>

<script>
    export default {
        name: 'myMain',
        props: {
            titulo: String,
            text: String
        }
    }
</script>
