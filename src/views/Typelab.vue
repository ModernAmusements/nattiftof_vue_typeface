<template>
 <body style="overflow-x: hidden;">
        <Heros></Heros>
        <SpaceBoxOne></SpaceBoxOne>
        <Editor></Editor>
        <SpaceBoxTwo></SpaceBoxTwo>
        <TextEditor></TextEditor>
        <SpaceBoxThree></SpaceBoxThree>
        <TalkWeight></TalkWeight>
        <SpaceBoxFour></SpaceBoxFour>
        <Alphabet></Alphabet>
        <SpaceBoxFive></SpaceBoxFive>
        <Subscribe></Subscribe>
        <SpaceBoxSix></SpaceBoxSix>
      </body>  
</template>
<script>
import Heros from "./components/Heros";
import SpaceBoxOne from "./components/SpaceBoxOne";
import Editor from "./components/Editor";
import SpaceBoxTwo from "./components/SpaceBoxTwo";
import SpaceBoxThree from "./components/SpaceBoxThree";
import TextEditor from "./components/TextEditor";
import TalkWeight from "./components/TalkWeight";
import SpaceBoxFour from './components/SpaceBoxFour.vue';
import Alphabet from "./components/Alphabet";
import SpaceBoxFive from "./components/SpaceBoxFive";
import Subscribe from "./components/Subscribe";
import SpaceBoxSix from "./components/SpaceBoxSix";
export default {
  name: "Typelab",
  components: {
    Heros,
    SpaceBoxOne,
    Editor,
    SpaceBoxTwo,
    SpaceBoxThree,
    TextEditor,
    TalkWeight,
    SpaceBoxFour,
    Alphabet,
    SpaceBoxFive,
    Subscribe,
    SpaceBoxSix,
  }
};
</script>
