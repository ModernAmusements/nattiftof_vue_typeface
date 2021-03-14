import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Typelab from "./views/Typelab.vue";

import Landing from "./views/Landing.vue";
import about from "./views/about.vue";
import Privacy from "./views/Privacy.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Typelab",
      components: {
        header: AppHeader,
        default: Typelab,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: about,
        footer: AppFooter
      }
    },
    {
      path: "/privacy",
      name: "Privacy",
      components: {
        header: AppHeader,
        default: Privacy,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
