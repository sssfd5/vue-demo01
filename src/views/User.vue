<template>
    <div id="user">
        <div class="left">
            <ul>
                <li><router-link to="/user/useradd">UserAdd</router-link></li>
                <li><router-link to="/user/userlist">UserList</router-link></li>
                <li><router-link to="/user/userinfo">UserInfo</router-link></li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>


<style lang="scss" scoped>

    #user{
        color: red;
        display:flex;
        .left{
            width:150px;
            min-height:400px;
            border-right:1px solid #eee;
            li{
                line-height:2;
            }
        }
        .right{
            flex:1;
        }

    }
</style>
