import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Members from "@/components/Members";
import Member from "@/components/Member";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/members",
      name: "MemberIndex",
      component: Members
    },
    {
      path: "/member",
      component: Member
    }
  ]
});
