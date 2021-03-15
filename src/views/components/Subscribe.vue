<template>
  <section class="subscribe-section" id="subsanc">
    <div class="subscribe-left unsl">
      <div id="scell1" class="half-h full-w ss-size wvar w300 center-cell b-rb">ä</div>
      <div class="subscribe-row">
        <div id="scell2" class="d-only half-w full-h sm-size w700 center-cell b-rb">
          €
        </div>
        <div>
          <div id="scell3" class="subs-cell half-w half-h ss-size w700 center-cell b-rb">
            ½
          </div>
          <div
            id="scell4"
            class="d-only subs-cell half-w half-h ss-size w400 center-cell b-rb"
          >
            ç
          </div>
        </div>
      </div>
    </div>
    <div class="subscribe-center">
      <h1 class="h1 w500">Lassen Sie uns in Kontakt bleiben</h1>
      <h4 class="h4 w400">
        Erfahren Sie mehr über unsere nächsten Veröffentlichungen, Angebote und kostenlosen Schriften. Wir werden nicht spammen.
      </h4>
      <!-- Begin Mailchimp Signup Form -->
      <form
        action=""
        method="post"
        id="mc-subscribe-signup-form"
        name="mc-subscribe-signup-form"
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
          id="mcform-keep-in-touch-email"
          class="subscribe-input h5 w400 email-input"
          type="email"
          name="email"
          placeholder="Geben Sie Ihre E-Mail ein..."
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Geben Sie Ihre E-Mail ein...'"
          required
        />
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
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
          id="mcform-keep-in-touch"
          class="mcform-submit subscribe-button h4 w500"
        />
        <div class="consent-container subscribe-check h4 w700">
          <span class="subscribe-box">
            <div class="h4 w700 error-message">Bitte kreuzen Sie das Zustimmungsfeld an.</div>
            <input
              class="subscribe-checkbox"
              type="checkbox"
              value="yes"
              name="consentCheck"
              id="subscribeConsentCheck"
            />
            <label class="w400" for="subscribeConsentCheck"
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
    <div class="subscribe-right unsl">
      <div class="subscribe-row">
        <div id="scell5" class="half-h half-w ss-size wvar w300 center-cell b-lb">ж</div>
        <div id="scell6" class="d-only half-h half-w ss-size w700 center-cell b-lb">
          ß
        </div>
      </div>
      <div id="scell7" class="d-only half-h full-w ss-size w400 center-cell b-lb">©</div>
      <div id="scell8" class="half-h full-w sx-size wvar w900 center-cell b-lb">Ф</div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Subscribe",
};
</script>
<style></style>
