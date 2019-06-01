<template>
  <div class="hello">
        <p>父组件title:{{ title }}</p>
        <p>子组件title：{{ selftitle }}</p>
        <button @click="parentMethod">父组件方法调用</button>
        <button @click="selfMethod">子组件方法调用</button>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    // props: {
    //   msg: String
    // }
    data(){
        return{
            selftitle:'这是从子组件（helloword）出来的'
        }
    },
    props: ['title'],
    methods:{
        parentMethod(){
            alert(this.$parent.title)
        },
        selfMethod(){
            alert(this.selftitle);
            // return this.childCode;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello{

    }
</style>
