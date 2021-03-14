<template>
    <section class="voice-section">
        <div class="voice-section-holder" id='voicesection'>
            <div class="voice-section-text">
                <h1 class="h1 w500">Sound=weight</h1>
                <h4 class="h4 w400">Start interacting by allowing the use of your microphone. This section reacts to noise.</h4>
                <div class="h4 w400 mt64 orangec">We are not recording or storing any data.</div>
            </div>
            <div class="voice-section-button" id="voice-button">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.5 64" class='voice-button-icon' xml:space="preserve">
                  <path d="M24.8,45.4c9-1,16.3-6.8,18.6-18.5l-5.9-1.5c-1.9,9.9-7.7,14.1-15.8,14.1S7.8,35.2,5.9,25.3L0,26.8
                     c2.4,11.7,9.6,17.5,18.6,18.5v12.6H5.4V64h32.8v-6.1H24.8V45.4z M17.3,10.5c0-2.6,1.5-4.6,4.5-4.6s4.5,2.1,4.5,4.6v13.6
                     c0,2.6-1.5,4.6-4.5,4.6s-4.5-2.1-4.5-4.6V10.5z M21.7,34.5c6.3,0,10.5-4.6,10.5-9.9V9.9C32.3,4.6,28,0,21.7,0S11.2,4.6,11.2,9.9
                     v14.6C11.2,29.9,15.5,34.5,21.7,34.5z"/>
               </svg>
            </div>
        </div>
        <div class="voice-section-interaction v-size wvar unsl">
            <div id='vtext' data-splitting>talk</div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'PeterBehrens'
};
</script>
<style>
</style>
