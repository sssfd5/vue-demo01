<template>
  <div class="about">
    <p>{{title}}</p>
    <ul>
        <li v-for="(index,item) in list">
          <router-link :to="'/content/'+item.aid">{{item.aid}}----{{item.title}}</router-link>
        </li>
    </ul>
    <HelloWorld title="news组件"></HelloWorld>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  export default {
    data(){
      return{
          list:['标题1','标题2','标题3'],
          title:'这是news的变量title'
      }
    },
    components: {
      HelloWorld
    },
    methods:{
        newsmethos(){
            return this.list[0];
        },
        requestData(){
            let that=this;
            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
            this.$http.jsonp(api).then(function (data) {
                //console.log(data.body.result)
                that.list=data.body.result
            },function (err) {
                console.log(err)
            })
        }
    },
    mounted() {
        this.requestData();
    }
  }



</script>
