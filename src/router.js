import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Typelab from "./views/Typelab.vue";
import Privacy from "./views/Privacy.vue";
import Contact from "./views/Contact.vue";


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
      path: "/privacy",
      name: "Privacy",
      components: {
        header: AppHeader,
        default: Privacy,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "Contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
