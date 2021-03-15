<template>

    <div class="game-holder">
      <canvas class="game-body" id="world"></canvas>
      <div class="game-guide h4t w400 unsl" id="gameguide"></div>
      <div class="game-score h-score w700 unsl" id="gamescore">000</div>
      <div class="control-holder">
        <input
          type="range"
          id="volume"
          class="control m-only"
          min="0"
          max="100"
          value="50"
        />
      </div>
    </div>


</template>
<script>
export default {
  name: 'GameHolder'
};
</script>
<style>
</style>
