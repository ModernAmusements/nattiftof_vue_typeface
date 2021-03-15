<template>
       <section class="glyph-map">
        <div class="glyph-map-holder">
            <div class="glyph-map-text">
                <h1 class="w500 h1">Das Alphabet</h1>
                <h4 class="w400 h4 d-only">Verwenden Sie die 3-stufige Lupe, um den erweiterten lateinischen A-Z-Fall von Nattiftof im Detail zu untersuchen. Uprights, 133 von 947 Glyphen.</h4>
                <h4 class="w400 h4 m-only">Untersuchen Sie das erweiterte lateinische A-Z-Gehäuse von Nattiftof, 133 von 947 Glyphen</h4>
                <div class="legend-cont-abs d-only unsl">
                    <div class="legend-elem">
                        <div class="legend-elem-left">
                            <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 56" xml:space="preserve" class="legend-elem-img-k1">
                           <path  d="M16,0C7.178,0,0,7.408,0,16.513v22.974C0,48.592,7.178,56,16,56s16-7.408,16-16.513V16.513
                              C32,7.408,24.822,0,16,0z M13.433,20.374v-5.875c0-1.463,1.149-2.649,2.567-2.649c1.418,0,2.567,1.186,2.567,2.649v5.875
                              c0,1.463-1.149,2.649-2.567,2.649C14.582,23.023,13.433,21.837,13.433,20.374z M29.681,39.487c0,7.785-6.138,14.12-13.681,14.12
                              c-7.544,0-13.681-6.334-13.681-14.12v-5.812H16v-8.259c2.694,0,4.886-2.262,4.886-5.042v-5.875c0-2.78-2.192-5.042-4.886-5.042
                              V2.393c7.543,0,13.681,6.334,13.681,14.12V39.487z"/>
                        </svg>
                        </div>
                        <div class="legend-elem-right">
                            <div class="h6 w700">Links Klick</div>
                            <div class="h6 w400">vergrößern</div>
                        </div>
                    </div>
                    <div class="legend-elem">
                        <div class="legend-elem-left">
                            <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 56" xml:space="preserve" class="legend-elem-img-k1">
                           <path  d="M16,0C7.178,0,0,7.408,0,16.513v22.974C0,48.592,7.178,56,16,56c8.823,0,16-7.408,16-16.513V16.513
                              C32,7.408,24.822,0,16,0z M18.567,14.498v5.875c0,1.463-1.149,2.649-2.567,2.649s-2.567-1.186-2.567-2.649v-5.875
                              c0-1.463,1.149-2.649,2.567-2.649C17.418,11.849,18.567,13.035,18.567,14.498z M16,53.607c-7.544,0-13.681-6.334-13.681-14.12
                              V16.513c0-7.786,6.137-14.12,13.681-14.12c0,0,0,0,0,0v7.062c0,0,0,0,0,0c-2.694,0-4.886,2.262-4.886,5.043v5.875
                              c0,2.78,2.192,5.042,4.886,5.042h0v8.259h13.681v5.812C29.681,47.272,23.543,53.607,16,53.607z"/>
                        </svg>
                        </div>
                        <div class="legend-elem-right">
                            <div class="h6 w700">Rechts Klick</div>
                            <div class="h6 w400">verkleinern</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="glyph-map-interaction m-only" id="glyphinteraction">
            <div class="glyph-container">
                <h1 class="slider-row  w400" id="glyphslider1">a á ă â ä à ā ą å ã æ ǽ b c ć č ç ĉ ċ d ð ď đ e é ĕ ě ê ë ė è ē ę f g ğ ĝ ģ ġ h ħ ĥ i ı í ĭ î ï ì ĳ ī į ĩ j ȷ j ĵ k ķ ĸ l ĺ ľ ļ ŀ ł</h1>
            </div>
            <div class="glyph-container">
                <h1 class="slider-row  w400" id="glyphslider2">m n ń ŉ ň ņ ŋ ñ o ó ŏ ô ö ò ő ō ø ǿ õ œ p þ q r ŕ ř ŗ s ś š ş ŝ ș ß ſ t ŧ ť ţ ț u ú ŭ û ü ù ű ū ų ů ũ v w ẃ ŵ ẅ ẁ x y ý ŷ ÿ ỳ z ź ž ż</h1>
            </div>
            <div class="glyph-control-holder">
                <div class="text-controler-component">
                    <div class="text-controler-component-info">
                        <div class="w700 h6">←</div>
                        <div class="w700 h6">→</div>
                    </div>
                    <input type="range" id="glyph-control" class="text-mobile-slider" min="0" max="1000">
                </div>
            </div>
        </div>
        <div class="img-magnifier-container d-only unsl" id='glyphintd' oncontextmenu="return false;">
             <img id="glyphimage" src="assets/img/glyph-map-light-min.svg" class='light-sticker glyph-map-di' alt="Glypmap image">
            <img id="glyphimage2" src="assets/img/glyph-map-dark-min.svg" class='dark-sticker glyph-map-di' alt="Glypmap image">
            <div class="img-magnifier-glass light-sticker" id='imagg'>
                <div class="mag-hol" id='maghol'>
                </div>
            </div>
            <div class="img-magnifier-glass dark-sticker" id='imagg2'>
                <div class="mag-hol" id='maghol2'>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'Alphabet'
};
</script>
<style>
</style>
