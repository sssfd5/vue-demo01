<template>
    <div id="content">
        <h1 id="h12">{{title}}</h1>
        <div v-html="content">
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data(){
            return{
                newsid:'',
                title:'',
                content:''
            }
        },
        methods:{
            requestData(){
                let that=this;
                var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+this.$route.params.newsid
                this.$http.jsonp(api).then(function (data) {
                    that.title=data.body.result[0].title
                    that.content=data.body.result[0].content
                    // console.log(data)
                },function (err) {
                    console.log(err)
                })
            }
        },
        mounted(){
            this.requestData()
        }
    }
</script>

<style  lang="scss">

    #h12{
        background-color: red;
    }
    #content{

        img{
            max-width:98%;
        }
    }
</style>
