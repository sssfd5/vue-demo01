<template>
  <div class="about">
    <p>{{title}}</p>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="3">
        <li v-for="item in list">
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
          title:'这是news的变量title',
          page:1,
          loading:false
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
            this.loading = true;
            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
            this.$http.jsonp(api).then(function (data) {
                that.list=that.list.concat(data.body.result)
                if(data.body.result.length<20){
                    this.loading = true;
                }else{
                    this.loading = false;
                }
                this.page+=1;
            },function (err) {
                console.log(err)
            })
        },
        loadMore() {
            this.requestData();

/*            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);*/
        }
    },
    mounted() {
        //this.requestData();
    }
  }



</script>
