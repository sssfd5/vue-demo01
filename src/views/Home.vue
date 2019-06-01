<template>
  <div class="home">
    <p>{{title}}</p>
<!--    <ul>-->
<!--      <li v-for="petim,index in products">-->
<!--        <router-link :to="'/pcontent/?pid='+index">{{index}}&#45;&#45;&#45;&#45;{{petim}}</router-link>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <button @click="getchildmethod">调用子函数</button>-->
    <HelloWorld title="Home组件"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods:{
    // getchildmethod(){
    //   console.log(this.$refs.childget.title);
    // }
  },
  data(){
    return{
      products:['商品1','商品2','商品3'],
      title:'这是Home变量的title'
    }
  }
};
</script>
