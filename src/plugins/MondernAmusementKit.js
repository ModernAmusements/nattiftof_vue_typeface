// import "@/assets/js/vendor/splitting.min.js";
// import "@/assets/js/vendor/gsap.min.js";
// import "@/assets/js/vendor/matter.min.js";

import "@/assets/scss/index.scss";
import VueLazyload from "vue-lazyload";

export default {
  install(Vue) {
    Vue.use(VueLazyload);
  }
};
