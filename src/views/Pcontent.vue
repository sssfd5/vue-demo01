<template>
    <div>
        这是一个商品详情页，{{pid}}
    </div>
</template>

<script>
    export default {
        name: "Pcontent",
        data(){
            return{
                pid:''
            }
        },
        mounted(){
            this.pid=this.$route.query.pid
            console.log(this.$route.query.pid)
        }
    }
</script>

<style scoped>

</style>
