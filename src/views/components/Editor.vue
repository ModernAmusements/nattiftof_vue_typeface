<template>
  <section class="section-editor">
    <div class="editor-content-holder">
      <div class="editor-main-content">
        <h1 class="h1 w500">
          <span class="styl-sa">Spiel mit dem g</span>
        </h1>
        <h4 class="h4 w400">
          Nattiftof hat ein alternatives "g". Sie können also damit herumspielen

          <br />
        </h4>
        <h4 class="h4 remove-on-mobile w400">
          Ändern Sie die Form, indem Sie die Steuerpunkte und ihre Griffe verschieben.
          Wählen Sie einen beliebigen Punkt aus, um zu beginnen.
        </h4>
        <div class="d-only m-only" id="canvas-container"></div>
        <div class="d-only legend-cont-rel unsl">
          <div class="legend-elem">
            <div class="legend-elem-left">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56 32"
                xml:space="preserve"
                class="legend-elem-img-k"
              >
                <path
                  d="M0,0v32h56V0H0z M34.601,2.5h8.2v7.333h-8.2V2.5z M42.801,19.667h-8.2v-7.334h8.2V19.667z
                              M23.9,12.333h8.2v7.334h-8.2V12.333z M23.9,2.5h8.2v7.333h-8.2V2.5z M13.2,2.5h8.2v7.333h-8.2V2.5z M2.5,2.5h8.2v7.333H2.5V2.5z
                              M2.5,12.333h8.2v7.334H2.5V12.333z M42.801,29.5H13.2v-7.333h8.2h2.5h8.2h2.5h8.2V29.5z M53.5,29.5h-8.199v-7.333H53.5V29.5z
                              M53.5,19.667h-8.199v-7.334H53.5V19.667z M45.301,9.833V2.5H53.5v7.333H45.301z"
                />
              </svg>
            </div>
            <div class="legend-elem-right">
              <div id="undo-hint" class="h6 w700">Ctrl+Z</div>
              <div class="h6 w400">Rückgängig</div>
            </div>
          </div>
          <div class="legend-elem">
            <div class="legend-elem-left">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56 32"
                xml:space="preserve"
                class="legend-elem-img-k"
              >
                <path
                  d="M45.301,0h-2.5h-8.2h-2.5h-8.2h-2.5h-8.2h-2.5H0v9.833v2.5v7.333v2.5V32h10.7h2.5h29.601h2.5H56v-9.833v-2.5v-7.333v-2.5V0
                              H45.301z M34.6,2.5h8.2v7.333h-8.2V2.5z M42.801,19.667h-8.2v-7.333h8.2V19.667z M13.2,12.333h8.2v7.333h-8.2V12.333z M23.9,12.333
                              h8.2v7.333h-8.2V12.333z M13.2,2.5h8.2v7.333h-8.2V2.5z M2.5,2.5h8.2v7.333H2.5V2.5z M2.5,12.333h8.2v7.333H2.5V12.333z
                              M42.801,29.5H13.2v-7.333h8.2h2.5h8.2h2.5h8.2V29.5z M53.5,29.5h-8.199v-7.333H53.5V29.5z M53.5,19.667h-8.199v-7.333H53.5V19.667
                              z M45.301,9.833V2.5H53.5v7.333H45.301z"
                />
              </svg>
            </div>
            <div class="legend-elem-right">
              <div id="redo-hint" class="h6 w700">Ctrl+Y</div>
              <div class="h6 w400">Wiederholen</div>
            </div>
          </div>
          <div class="legend-elem">
            <div class="legend-elem-left">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 32 56"
                xml:space="preserve"
                class="legend-elem-img-k1"
              >
                <path
                  d="M16,0C7.178,0,0,7.408,0,16.513v22.974C0,48.592,7.178,56,16,56c8.823,0,16-7.408,16-16.513V16.513
                              C32,7.408,24.822,0,16,0z M18.567,14.498v5.875c0,1.463-1.149,2.649-2.567,2.649s-2.567-1.186-2.567-2.649v-5.875
                              c0-1.463,1.149-2.649,2.567-2.649C17.418,11.849,18.567,13.035,18.567,14.498z M16,53.607c-7.544,0-13.681-6.334-13.681-14.12
                              V16.513c0-7.786,6.137-14.12,13.681-14.12c0,0,0,0,0,0v7.062c0,0,0,0,0,0c-2.694,0-4.886,2.262-4.886,5.043v5.875
                              c0,2.78,2.192,5.042,4.886,5.042h0v8.259h13.681v5.812C29.681,47.272,23.543,53.607,16,53.607z"
                />
              </svg>
            </div>
            <div class="legend-elem-right">
              <div class="h6 w700">Rechts Klick</div>
              <div class="h6 w400">Formkonturen umschalten</div>
            </div>
          </div>
        </div>
      </div>
      <div class="editor-secon-content">
        <div id="b3" class="d-only editor-button e-btn-left h4 w500">
          <span class="editor-button-sign h2">
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 49 64"
              xml:space="preserve"
              class="invert-on-hover"
            >
              <path
                d="M0.2,64h48.3v-8.1H0.2V64z M49,28.1l-5.8-5.4L28.5,37.4V0h-8.1v37.4L5.7,22.7L0,28.1l24.4,24.6L49,28.1z"
              />
            </svg>
          </span>
          <span>Herunterladen</span>
        </div>
        <div id="b2" class="editor-button e-btn-right h4 w500">
          <span class="editor-button-sign h2">↻</span>
          <span>Zurück</span>
        </div>
        <div class="m-only editor-button e-btn-right hide-l-border h4 w500">
          <span class="editor-button-sign h2">✗</span>
          <span>Umrisse ausblenden</span>
        </div>
        <div id="b5" class="d-only editor-button e-btn-left h4 w500 edf">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 16 16"
            style="enable-background: new 0 0 16 16"
            xml:space="preserve"
            class="edss primary-fill"
          >
            <g>
              <path d="M1.1,12c0.7,1.2,1.7,2.2,2.9,2.9V12H1.1z" />
              <path d="M8,12v4c1.5,0,2.8-0.4,4-1.1V12H8z" />
              <rect x="4" y="8" width="4" height="4" />
              <path d="M12,12h2.9c0.7-1.2,1.1-2.5,1.1-4h-4V12z" />
              <path d="M4,4H1.1C0.4,5.2,0,6.5,0,8h4V4z" />
              <rect x="8" y="4" width="4" height="4" />
              <path d="M8,4V0C6.5,0,5.2,0.4,4,1.1V4H8z" />
              <path d="M14.9,4c-0.7-1.2-1.7-2.2-2.9-2.9V4H14.9z" />
            </g>
          </svg>
          mit transparentem Hintergrund
        </div>
        <div id="b4" class="d-only editor-button e-btn-left h4 w500 eds">
          <span class="edfs"></span> mit einfarbigem Hintergrund
        </div>
      </div>
    </div>
    <div class="editor-tool unsl" id="ill" oncontextmenu="return false;">
      <canvas class="canvas d-only" id="bezier-bottom"></canvas>
      <div class="canvas-overlay d-only" id="canv-overlay"></div>

      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 220.6 326.1"
        style="enable-background: new 0 0 220.6 326.1"
        xml:space="preserve"
        class="m-only editor-mobile-image"
      >
        <path
          class="g-layer-0"
          d="M5.5,321.3H137c41.1,0,68.8-21.7,68.8-60.5c0-38.5-27.7-60.5-68.8-60.5H39.5l6.4,14.2l36.6-59.1L49.2,137
                     L5.5,208v26.5h127.4c19.1,0,32.1,8.2,32.1,25.4c0,16.8-13.1,25.4-32.1,25.4H5.5V321.3z"
        />
        <path
          class="g-layer-1"
          d="M192.7,92.5c0,49.7-38.5,84.8-93.1,84.8C44.3,177.4,7,142.3,7,91.1C7,39.8,44.7,4.7,99.7,4.7h115.9V41h-43.2
                     C186.1,54.4,192.7,71.3,192.7,92.5z M48.1,91.1c0,29.5,20.9,49.7,51.6,49.7c30.6,0,52-20.2,52-49.7c0-29.2-21.3-49.7-52-49.7
                     C69,41.3,48.1,61.9,48.1,91.1z"
        />
        <g>
          <path
            class="g-layer-2"
            d="M104.6,41.5c-0.1-2.7-2.3-4.9-5-4.9c-2.7,0-4.9,2.2-5,4.9c-12.8,1-23.9,5.7-32.2,13.7
                        c-8,7.8-12.9,18.4-14,30.3c-2.3,0.5-4,2.5-4,4.9c0,2.4,1.7,4.4,3.9,4.9C49.1,108,54,118.9,62.4,127c8.1,7.8,18.8,12.4,31.3,13.5
                        c0.4,2.4,2.4,4.3,4.9,4.3c2.5,0,4.5-1.8,4.9-4.1c13.4-0.7,25-5.4,33.7-13.7c8.4-8,13.3-18.7,14.3-31.1c2.5-0.3,4.5-2.4,4.5-5
                        c0-2.6-2-4.7-4.5-5c-1.1-12.1-6-22.9-14.3-30.7C128.8,47.3,117.4,42.5,104.6,41.5z M135.7,125.5c-8.3,7.9-19.4,12.4-32.3,13.1
                        c-0.5-2.2-2.5-3.9-4.9-3.9c-2.3,0-4.3,1.6-4.8,3.7c-12-1.1-22.3-5.5-30-13c-8-7.7-12.6-18.1-13.5-30.2c2.3-0.4,4.1-2.5,4.1-4.9
                        c0-2.4-1.7-4.4-4-4.9c1.1-11.5,5.7-21.4,13.4-28.9c8-7.8,18.7-12.3,31.2-13.2c0.7,1.8,2.5,3.1,4.6,3.1c2.1,0,3.9-1.3,4.6-3.1
                        c12.4,0.9,23.5,5.5,31.5,13.2c7.9,7.5,12.6,17.9,13.7,29.5c-2,0.6-3.5,2.5-3.5,4.7c0,2.2,1.5,4.1,3.5,4.7
                        C148.5,107.6,143.8,117.9,135.7,125.5z"
          />
          <path
            class="g-layer-2"
            d="M220.6,10V0h-10v3.7H105.1V0h-10v3.8C69.8,4.7,48.1,13,32,28C16,42.9,7.1,63.1,6.1,86.5
                        c-2.4,0.3-4.3,2.4-4.3,4.9c0,2.5,1.9,4.6,4.4,4.9c1.2,23.2,10,43.1,25.8,57.8c1.2,1.1,2.4,2.2,3.6,3.2L7.3,203.1H0v10h4.5v16.3H0
                        v10h10v-3.8h119.8v3.8h10V236c13.9,1.7,22.3,8.7,23.9,19.8c-2.1,0.6-3.7,2.5-3.7,4.8c0,2.2,1.5,4.1,3.5,4.7
                        c-2.1,10.3-10.6,16.9-23.7,18.6v-3.1h-10v3.5H10v-3.5H0v10h4.5v25.2H0v10h10v-3.8h123.8v3.8h10v-4c37.4-2.3,61-23.5,62.9-56.9
                        c2.8,0,5-2.2,5-5c0-2.8-2.2-5-5-5c0,0,0,0-0.1,0c-2.4-32.7-25.8-53.5-62.8-55.7v-4.7h-10v4.5H56.4l15-24.1
                        c7.4,1.8,15.2,2.9,23.5,3.2c0.6,2,2.5,3.5,4.8,3.5c2.2,0,4.1-1.5,4.8-3.5c24.7-1,46.9-9.4,62.9-23.9c15.8-14.4,25-34.3,26.2-56.5
                        c2.4-0.4,4.2-2.4,4.2-4.9c0-2.5-1.8-4.5-4.2-4.9c-0.8-18.7-6.9-33.7-18.8-46.1h35.8v4.2h10v-10h-4V10H220.6z M54.1,199.2H43.7v-4.5
                        h-10v10h6.7l2.6,5.9h-1.9v10h10v-10h-1.7l5.8-9.4h78.6v3.5h10v-3.3c35.9,2.2,58.6,22.4,60.8,54.2c-1.7,0.8-3,2.5-3,4.6
                        c0,2.1,1.3,3.8,3,4.6c-0.9,16.7-7.2,30.5-18.5,40.1c-10.5,9-25.1,14.2-42.4,15.2v-4h-10v4.2H10v-4.2H6.5v-25.2H10v-4.5h119.8v4.5
                        h10V286c14.3-1.7,23.5-9,25.7-20.4c2.5-0.3,4.5-2.4,4.5-4.9c0-2.5-1.8-4.6-4.3-4.9c-1.7-12.3-10.9-20-26-21.8v-4.6h-10v4.2H10v-4.2
                        H6.5v-16.3H10v-10H9.7l27.4-44.5c9.3,7.3,20.1,12.7,32.3,16L54.1,199.2z M45.2,210.6l-2.6-5.9h1.1v-3.5h9.2l-5.8,9.4H45.2z
                        M52.5,140.7V140l26.3,14.5v4.6H79l-8.5,13.7c-12.2-3.2-23.1-8.6-32.3-15.9l10-16.2H52.5z M214.5,36.2h-4V40h-37.8
                        c-3-2.9-6.4-5.7-10.2-8.3v-7.9h-10v10h2.5l-1,2.4h-7.5v10h10V42h15.3c12.5,12.3,18.8,27.3,19.7,46.1c-2.2,0.5-3.8,2.5-3.8,4.9
                        c0,2.3,1.6,4.3,3.8,4.8c-1.2,21.7-10.2,41.1-25.6,55.1c-15.6,14.2-37.2,22.4-61.4,23.4c-0.3-2.5-2.4-4.5-4.9-4.5
                        c-2.6,0-4.7,2-4.9,4.5c-7.8-0.3-15.2-1.3-22.2-3l8.8-14.2h4.4v-6.9h-6.9v0.1l-26.3-14.5v-3.9h-6.9v6.9h0.2l-9.2,14.9
                        c-1.1-0.9-2.2-1.9-3.3-2.9c-15.4-14.4-24-33.8-25.1-56.5c2.1-0.6,3.6-2.5,3.6-4.8c0-2.3-1.6-4.2-3.7-4.8c1-23,9.7-42.7,25.3-57.2
                        c15.7-14.6,37-22.7,61.7-23.6V10h10V5.7h105.4V10h4V36.2z M156.3,36.2l1-2.4h4.8c2.8,2,5.3,4,7.7,6.2h-13.2v-3.8H156.3z"
          />
        </g>
      </svg>

    </div>
    <div class="m-only editor-button e-btn-left h4 w500">
      <span class="editor-button-sign h2">
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 49 64"
          xml:space="preserve"
          class="un-dwnld"
        >
          <path
            d="M0.2,64h48.3v-8.1H0.2V64z M49,28.1l-5.8-5.4L28.5,37.4V0h-8.1v37.4L5.7,22.7L0,28.1l24.4,24.6L49,28.1z"
          />
        </svg>
      </span>
      <span>Herunterladen</span>
    </div>
  </section>
</template>
<script>
export default {
  name: "Editor",
};
</script>
<style>

</style>
