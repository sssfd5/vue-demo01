<template>
    <div>
        <mt-button @click.native="handleClick">按钮</mt-button>

        <div class="page-toast">
            <h1 class="page-title">Toast</h1>
            <div class="page-toast-wrapper">
                <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
                <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
                <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
            </div>
        </div>
        <br><br><br>
        vuex测试值：{{this.$store.state.count}}
        <br>
        <button @click="incCount()">增加数量+</button>
    </div>
</template>

<script>
    export default {
        name: "MintUi",
        methods: {
            handleClick: function() {
                // this.$toast('Hello world!')
                this.$toast({
                    message: '操作成功',
                    iconClass: 'mintui mintui-success'
                })
            },
            openToast() {
                this.$toast('提示信息');
            },

            openToastWithIcon() {
                this.$toast({
                    message: '操作成功',
                    iconClass: 'mintui mintui-success'
                });
            },

            openBottomToast() {
                this.$toast({
                    message: '提示信息',
                    position: 'bottom'
                });
            },
            incCount(){
                //改变vuex store里面的数据
                //this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
                this.$store.dispatch('incMutationsCount');   /*触发 actions里面的方法   */
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mt-button{
        background-color: red;
    }
    .page-toast{
        .page-title{

        };
        .page-toast-wrapper{
            //background-color: red;
            padding: 0 10px;
            /*position: absolute 50%;*/
            width: 90%;
            transform: translateY(20%);
            button:not(:last-child) {
                margin-bottom: 20px;
            };
        }
    }
</style>
