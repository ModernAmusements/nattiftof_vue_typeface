<template>
  <nav id="nav" class="unsl">
    <div class="nav-part">
      <div class="nav-home h2" id="navh"></div>
      <div class="nav-name h2" id="navn">typelab foundry</div>
      <a
        class="h4 w700 nav-buy"
        id="navb"
        href="https://www.myfonts.com/fonts/spacetype/garet/?utm_source=cj&utm_medium=affiliate&utm_campaign=Spacetype+Ltd.&cjevent=9106534782aa11eb82df00a40a180510&utm_content=text_mf1"
        target="_blank"
        >Buy Nattiftof↗</a
      >
      <div class="h4 w400 d-only" id="downtrig1">Download free fonts</div>
    </div>
    <div class="nav-part h4 w400">
      <a href="about" class="nav-ab">About <span class="d-only">Typelab foundry</span></a>
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
<style>


nav {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 3.6458333333vw;
  padding-right: 4.5833333333vw;
  border-bottom: 0.0520833333vw var(--c-g-4) solid;
  background-color: var(--c-primary);
  z-index: 20;
}

@media (max-width: 1024px), (hover: none) {
  nav {
    height: 9.1145833333vw;
    padding-right: 4.1666666667vw;
    border-width: 0.1302083333vw;
  }
}

@media (max-width: 767px) {
  nav {
    height: 19.4666666667vw;
    padding-right: 6.4vw;
    border-width: 0.2666666667vw;
  }
}

.nav-part {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media (min-width: 1025px) {
  .nav-part div {
    cursor: pointer;
    transition: 0.4s color;
  }
  .nav-part div svg {
    transition: 0.4s;
  }
  .nav-part div:hover {
    color: var(--c-g-2);
  }
  .nav-part div:hover svg {
    fill: var(--c-g-2);
  }
  .nav-part a {
    color: var(--c-secondary);
    transition: 0.4s color;
  }
  .nav-part a:hover {
    color: var(--c-g-2);
  }
}

.nav-link {
  color: var(--c-secondary);
  text-decoration: none;
  transition: 0.4s;
}

.nav-link:hover {
  color: var(--c-g-2);
}

.nav-home {
  padding-left: 4.5833333333vw;
  background-color: var(--c-primary);
  z-index: 23;
  color: var(--c-secondary);
  text-decoration: none;
  font-variation-settings: "wght" 40;
  margin-top: -0.4166666667vw;
}

@media (max-width: 1024px), (hover: none) {
  .nav-home {
    padding-left: 4.1666666667vw;
  }
}

@media (max-width: 767px) {
  .nav-home {
    padding-left: 6.4vw;
  }
}

.nav-home:hover + .nav-name {
  color: var(--c-g-2);
}

.nav-name {
  background-color: var(--c-primary);
  z-index: 22;
  color: var(--c-secondary);
  text-decoration: none;
  line-height: 1.4583333333vw !important;
  margin-top: -0.4166666667vw;
}

.nav-buy {
  text-decoration: none;
  color: var(--c-secondary);
  background-color: var(--c-primary);
  margin-right: 1.6666666667vw;
  margin-left: -19.0416666667vw;
  z-index: 21;
}

@media (max-width: 1024px), (hover: none) {
  .nav-buy {
    margin-left: -73.6vw
  }
}

.nav-ab {
  text-decoration: none;
  color: var(--c-secondary);
  margin-right: 1.6666666667vw;
  background-color: var(--c-primary);
}

@media (max-width: 1024px), (hover: none) {
  .nav-ab {
    margin-right: 4.1666666667vw;
  }
}

@media (max-width: 767px) {
  .nav-ab {
    margin-right: 6.4vw;
  }
}

.nav-sub svg {
  fill: var(--c-secondary);
  width: 0.8333333333vw;
}

@media (max-width: 1024px), (hover: none) {
  .nav-sub svg {
    width: 2.0833333333vw;
  }
}

@media (max-width: 767px) {
  .nav-sub svg {
    width: 3.2vw;
  }
}

.nav-hovered {
  color: var(--c-g-2) !important;
}

header {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--c-primary);
}
</style>
