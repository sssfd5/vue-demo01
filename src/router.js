import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Content from "./views/Content.vue";
import Pcontent from "./views/Pcontent.vue";
import Sity from "./views/Sity.vue";
import User from "./views/User.vue";
import UserAdd from "./views/User/UserAdd.vue";
import UserList from "./views/User/UserList.vue";
import UserInfo from "./views/User/UserInfo.vue";
import MintUi from "./views/MintUi.vue";
import ElementUi from "./views/ElementUi.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: "/",component: Home},
    {
      path: "/news",
      name: "news",
      // route level code-splitting
      // this generates a separate chunk (news.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "news" */ "./views/News.vue");
      }
    },
    {path: "/content/:newsid",name: "content",component: Content},
    {path: "/pcontent/",name: "pcontent",component: Pcontent},
    {path: "/sity/",name: "sity",component: Sity},
    {path:'*',redirect:'/home'},
    {
      path: "/User",
      component: User,
      children:[
        {
          path: "useradd",
          component: UserAdd
        },
        {
          path: "userlist",
          component: UserList
        },
        {
          path: "userinfo",
          component: UserInfo
        }
      ]
    },
    {path: "/mintui",name: "MintUi",meta:{keepAlive:false},component: MintUi},
    {path: "/elementui",name: "ElementUi",component: ElementUi}



  ]
})
