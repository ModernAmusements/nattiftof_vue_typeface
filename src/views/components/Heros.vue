<template>
  <header>
    <div class="hero-content" id="heros">
      <div class="hero-sliders unsl">
        <div class="hero-slider-big">
          <div class="hero-slider-row hero-slider-1" id="heroslider1">
            <div class="hero-stats">
              <div class="hero-stat-1 h6 w400">Medium 500</div>
              <div class="hero-stat-2 h6 w400 hero-size">400px</div>
              <div class="hero-stat-3 h6 w400">#ff3b4e</div>
            </div>
            <h1 class="hero-title hero w500">Nattiftof</h1>
          </div>
        </div>
        <div class="hero-slider-small">
          <div class="hero-slider-row hero-slider-2" id="heroslider2">
            <div class="hero-stats">
              <div class="hero-stat-1 h6 w400">Hairline 50</div>
              <div class="hero-stat-2 h6 w400 hero-size">400px</div>
              <div class="hero-stat-3 h6 w400">#ff3b4e</div>
            </div>
            <h1 class="hero-title hero w50">Nattiftof</h1>
          </div>
        </div>
        <div class="hero-slider-small d-only">
          <div class="hero-slider-row hero-slider-3" id="heroslider3">
            <div class="hero-stats">
              <div class="hero-stat-1 h6 w400">Book 300</div>
              <div class="hero-stat-2 h6 w400 hero-size">400px</div>
              <div class="hero-stat-3 h6 w400">#ff3b4e</div>
            </div>
            <h1 class="hero-title hero wvar w300">Nattiftof</h1>
          </div>
        </div>
        <div class="hero-slider-big d-only">
          <div class="hero-slider-row hero-slider-4" id="heroslider4">
            <h1 class="hero-title hero wvar w900">Nattiftof</h1>
          </div>
        </div>
      </div>
      <div class="hero-pop-up d-only" id="downpop">
        <div class="h1 w500">
          <svg
            version="1.1"
            class="hero-pop-up-img"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 49 64"
            xml:space="preserve"
          >
            <path
              d="M0.2,64h48.3v-8.1H0.2V64z M49,28.1l-5.8-5.4L28.5,37.4V0h-8.1v37.4L5.7,22.7L0,28.1l24.4,24.6L49,28.1z"
            />
          </svg>
          Erhalten Sie 2 kostenlose Schriftarten
          <div class="hero-pop-up-close" id="downtrig2">✗</div>
        </div>

        <h4 class="h4 w400">
          Geben Sie Ihre E-Mail ein und erhalten Sie <span class="w700">Nattiftof Book</span> und
          <span class="w700">Nattiftof Heavy</span> kostenlose Desktop- und Web-Fonts mit Lizenz zur
          nach Belieben zu verwenden. Nattiftof's Type specimen ebenfalls enthalten.
        </h4>

        <!-- Begin Mailchimp Signup Form -->
        <form
          action=""
          method="post"
          id="mc-bonus-signup-form"
          name="mc-bonus-signup-form"
          class=""
        >
          <div class="abs-cont h4 w700">
            <div class="error-message error-message-invalid-email">
              Bitte geben Sie eine gültige E-Mail Adresse an.
            </div>
            <div class="error-message error-message-unknown">
              Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
            </div>
          </div>
          <input
            id="mcform-free-fonts-email"
            class="hero-pop-up-input h5 w400 email-input"
            type="email"
            name="email"
            placeholder="Geben Sie Ihre E-Mail ein..."
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Geben Sie Ihre E-Mail ein...'"
            required
          />
          <!-- HONEYPOT -->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_3be2f92f8f590b2bdb08b8d04_1ef5d73273"
              tabindex="-1"
              value=""
            />
          </div>
          <input
            style="border-radius: 0"
            type="submit"
            value="↳"
            name="subscribe"
            id="mcform-free-fonts"
            class="hero-pop-up-button h4 w500 mcform-submit"
          />
          <div class="hero-pop-up-subtitle h4 w700">
            Erfahren Sie mehr über unsere nächsten Veröffentlichungen, Angebote und kostenlosen Schriften. Wir werden nicht spammen.
          </div>
          <div class="consent-container hero-pop-up-check h4 w700">
            <span class="hero-pop-up-box">
              <div class="w700 error-message">Bitte kreuzen Sie das Zustimmungsfeld an.</div>
              <input
                class="hero-pop-up-checkbox"
                type="checkbox"
                value="yes"
                name="consentCheck"
                id="heroConsentCheck"
              />
              <label class="w400" for="heroConsentCheck"
                >Ja, ich möchte E-Mails von Typelab erhalten.</label
              >
            </span>
          </div>
          <div class="hero-pop-up-info h8 w400">
           Sie können sich jederzeit wieder abmelden, indem Sie den Abmeldelink in der
            Fußzeile unserer E-Mails klicken. Indem Sie oben klicken, um sich anzumelden, erkennen Sie an, dass
            Ihre Daten zur Verarbeitung an Mailchimp übertragen werden. Erfahren Sie mehr
            über die Datenschutzpraktiken von Mailchimp
            <a class="w700" href="https://mailchimp.com/legal/privacy/" target="_blank"
              >hier↗</a
            >. Siehe unsere Datenschutzrichtlinie
             <router-link class="w700" to="/privacy">hier↗</router-link>.
          </div>
        </form>
        <!--End Mailchimp Signup Form-->
      </div>
    </div>

    <div class="hero-ctas">
      <div class="hero-cta-l-text">
        <div class="h2 w700">Nattiftof kaufen?</div>
        <p class="h7 w400">Holen Sie sich die komplette Schriftfamilie - 23 Schriftarten.</p>
      </div>
      <a
        href="https://www.myfonts.com/fonts/spacetype/garet/?utm_source=cj&utm_medium=affiliate&utm_campaign=Spacetype+Ltd.&cjevent=9106534782aa11eb82df00a40a180510&utm_content=text_mf1"
        class="hero-button-left h7 w500"
        target="_blank"
        >Kaufen↗</a
      >
      <div class="hero-button-right h7 w500 d-only" id="downtrig">Kostenloser Download</div>
      <div class="hero-cta-r-text d-only">
        <div class="h2 w700">Zwei kostenlose Schnitte</div>
        <div class="h7 w400">Holen Sie sich die Schriftarten Nattiftof Book & Nattiftof Heavy kostenlos.</div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Heros",
  mounted() {

  },
};
</script>

<style>

</style>
