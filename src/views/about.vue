<template>
 <body style="overflow-x: hidden;">
        <GameHolder></GameHolder>
        <SpaceBoxOneAbout></SpaceBoxOneAbout>
        <AboutSection></AboutSection>
        <SpaceBoxTwoAbout></SpaceBoxTwoAbout>

      </body>  
</template>
<script>
import GameHolder from "./components/GameHolder";
import SpaceBoxOneAbout from "./components/SpaceBoxOneAbout";
import AboutSection from "./components/AboutSection";
import SpaceBoxTwoAbout from "./components/SpaceBoxTwoAbout";

export default {
  name: "About",
  components: {
    SpaceBoxOneAbout,
    AboutSection,
    GameHolder,
    SpaceBoxTwoAbout
  }
};
</script>
