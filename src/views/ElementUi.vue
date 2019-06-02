<template>

    <div>

        <div>ElemnetUi</div>
        <el-button type="primary">主要按钮</el-button>

        <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>{{value1}}
        </div>

        <el-rate  v-model="value" show-text></el-rate>{{value}}

        vuex测试值：{{this.$store.state.count}}
        <br>
        <button @click="incCount()">增加数量+</button>

        <el-calendar>
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template
                    slot="dateCell"
                    slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
<!--                    {{data.day}}}-->
                        {{ data.day.split('-').slice(2).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                </p>
            </template>
        </el-calendar>

    </div>
</template>

<script>
    export default {
        name: "ElementUi",
        data(){
            return{
                value1: 0,
                value: null
            }
        },
        methods:{
            incCount(){
                //改变vuex store里面的数据
                //this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
                this.$store.dispatch('incMutationsCount');   /*触发 actions里面的方法   */
            }
        },
        mounted() {
            //console.log(this);
        }
    }
</script>

<style scoped>

    .is-selected {
        color: #1989FA;
    }
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
