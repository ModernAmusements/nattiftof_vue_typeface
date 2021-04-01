<template>
  <nav id="nav" class="unsl">
    <div class="nav-part">
      <div class="nav-home h2" id="navh"></div>
      <div class="nav-name h2" id="navn">typelab</div>
      <a
        class="h4 w700 nav-buy"
        id="navb"
        href=""
        target="_blank"
        >Nattiftof kaufen↗</a
      >
      <div class="h4 w400 d-only" id="downtrig1">Kostenlose Schriftarten herunterladen</div>
    </div>
    <div class="nav-part h4 w400">
      <router-link class="nav-ab d-only" to="/">Home</router-link>
      <router-link class="nav-ab" to="/contact">Über Uns</router-link>
      <div class="nav-sub" id="subsb">
        <svg version="1.1" viewBox="0 0 64 47.9" xml:space="preserve">
          <path
            d="M57.1,36.7l-14-14.1l14-12.7V36.7z M28.6,20.8L12.9,6.7h37.8L34.9,20.8C32.7,22.8,30.9,22.8,28.6,20.8z M11.5,41.2L25.4,27
                     l0.2,0.2c3.9,3.5,8.8,3.5,12.3,0.1l0.2-0.2l14,14.1H11.5z M6.9,36.3V10.4l13.5,12.2L6.9,36.3z M0,47.9h64V0H0V47.9z"
          />
        </svg>
        Subscribe
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "app-header",
  mounted() {
  },
};
</script>
<style lang="css">

</style>
