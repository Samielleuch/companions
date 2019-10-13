import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register";
import Login from "./views/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Home",
      name: "home",
      component: Home
    },
    {
      path: "/Register",
      name: "Register",
      component: Register
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    }
  ]
});
