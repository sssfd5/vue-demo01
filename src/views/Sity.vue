<template>
    <div>
        <News></News>
        <hr>
        <Home></Home>
        <hr>
        <HelloWorld title="site组件"></HelloWorld>
    </div>
</template>

<script>
    import Home from "./Home.vue";
    import News from "./News.vue";
    import HelloWorld from "@/components/HelloWorld.vue";
    export default {
        name: "Sity",
        components:{
            Home,
            News,
            HelloWorld
        }
    }
</script>

<style scoped>

</style>
