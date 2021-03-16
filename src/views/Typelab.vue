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
        <Cookies></Cookies>
        <TextEditorWidget></TextEditorWidget>
        <TextEditorWidgetOTF></TextEditorWidgetOTF>
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
import TextEditorWidget from "./components/TextEditorWidget";
import TextEditorWidgetOTF from "./components/TextEditorWidgetOTF";
import Cookies from "./components/Cookies";
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
    TextEditorWidget,
    TextEditorWidgetOTF,
    Cookies
  },
  mounted() {
  
    const t = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.([A-Za-z]{2,15})$/,
        e = {
            NoConsent: "error-no-consent",
            InvalidEmail: "error-invalid-email",
            Unknown: "error-unknown"
        },
        n = "signup-form-success",
        i = "↳",
        o = {
            FreeFonts: "Thanks! Enjoy your freebies!",
            GetInTouch: "Thanks for signing up!"
        };

    function s(t, e) {
        if (t) {
            if (!e) {
                const n = t.split("/");
                e = n.length > 0 ? n[n.length - 1] : t
            }
            const n = document.createElement("a");
            n.href = t, n.download = e, n.click()
        }
    }

    function a(t) {
        document.getElementById(t).addEventListener("submit", l), document.querySelector(`#${t} input[name='email']`).addEventListener("focus", () => {
            d(t),
                function(t) {
                    const e = document.querySelector(`#${t} input[type='submit']`),
                        n = document.querySelector(`#${t} input[name='consentCheck']`);
                    e.value = i, n.disabled = !1, e.disabled = !1
                }(t)
        }), document.querySelector(`#${t} input[name='consentCheck']`).addEventListener("change", () => d(t))
    }

    function d(t) {
        document.getElementById(t).className = ""
    }
    async function l(i) {
        i.preventDefault();
        const a = i.currentTarget;
        try {
            const i = new FormData(a);
            if (!t.test(i.get("email"))) throw new Error("InvalidEmail");
            if (!i.get("consentCheck")) throw new Error("ConsentNotGiven");
            const {
                giftUrl: d
            } = await async function({
                url: t,
                formData: e
            }) {
                const n = Object.fromEntries(e.entries()),
                    i = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify(n)
                    },
                    o = await fetch(t, i);
                if (!o.ok) {
                    const t = await o.text();
                    throw t
                }
                return o.json()
            }({
                url: "/api/v1/newsletter/signup",
                formData: i
            });
            ! function(t, e) {
                t.className = n, e && t.id.startsWith("mc-bonus") && s(e);
                const i = document.querySelector(`#${t.id} input[type='submit']`),
                    a = document.querySelector(`#${t.id} input[name='consentCheck']`);
                document.querySelector(`#${t.id} input[type='email']`).blur(), a.disabled = !0, i.blur(), i.value = "mc-bonus-signup-form" === t.id ? o.FreeFonts : o.GetInTouch
            }(a, d)
        } catch (t) {
            ! function(t, n) {
                if (console.error(n), n && n.message) switch (n.message) {
                    case "ConsentNotGiven":
                        return void(t.className = `error ${e.NoConsent}`);
                    case "InvalidEmail":
                        return void(t.className = `error ${e.InvalidEmail}`)
                }
                t.className = `error ${e.Unknown}`
            }(a, t)
        }
    }
    navigator.platform.toUpperCase().startsWith("MAC") && (document.getElementById("undo-hint").innerText = "Cmd+Z", document.getElementById("redo-hint").innerText = "Cmd+Shift+Z"), a("mc-subscribe-signup-form");
    let r = 0,
        m = () => {
            let t, e;
            r ? (document.getElementById("theme-button").classList.remove("change-color-button"), document.getElementById("theme-button").classList.add("change-color-button-a"), t = document.getElementsByClassName("light-sticker"), e = document.getElementsByClassName("dark-sticker")) : (document.getElementById("theme-button").classList.remove("change-color-button-a"), document.getElementById("theme-button").classList.add("change-color-button"), t = document.getElementsByClassName("dark-sticker"), e = document.getElementsByClassName("light-sticker"));
            for (let e = 0; e < t.length; e++) t[e].style.display = "none";
            for (let t = 0; t < e.length; t++) e[t].style.display = "block"
        };

    function h(t) {
        r == le && (le = !le, de[0].changeColors(), de[1].changeColors(), de[2].changeColors(), me()), 1 == t ? (document.documentElement.setAttribute("data-theme", "dark"), sessionStorage.setItem("theme", "dark"), Ie("theme", 1, 2)) : (document.documentElement.setAttribute("data-theme", "light"), sessionStorage.setItem("theme", "light"), Ie("theme", 0, 2)), m()
    }

    function c() {
        try {
            return document.createEvent("TouchEvent"), !0
        } catch (t) {
            return !1
        }
    }
    let g = c(),
        u = {
            x: 0,
            y: 0
        };
    const y = t => t.charCodeAt(0) >= 48 && t.charCodeAt(0) <= 57;
    window.addEventListener("mousemove", function(t) {
        u.x = t.clientX, u.y = t.clientY, L && z(I)
    });
    let p, w = t => {
            let e = document.getElementById(t).innerHTML,
                n = '<span id="intWord0">',
                i = 0;
            for (let t = 0; t < e.length; t++) "&" == e[t] ? ("&amp;" == e.substring(t, t + 5) && (n += '</span><span id="intWord' + ++i + '">&</span>', n += '<span id="intWord' + ++i + '">', t += 4), "&lt;" != e.substring(t, t + 4) && "&gt;" != e.substring(t, t + 4) || (n += '</span><span id="intWord' + ++i + '">' + e.substring(t, t + 4) + "</span>", n += '<span id="intWord' + ++i + '">', t += 3)) : e[t].charCodeAt(0) >= 32 && 37 != e[t].charCodeAt(0) && e[t].charCodeAt(0) <= 46 || 47 == e[t].charCodeAt(0) && (!y(e[t + 1]) || !y(e[t - 1])) || e[t].charCodeAt(0) >= 58 && e[t].charCodeAt(0) <= 64 || e[t].charCodeAt(0) >= 91 && e[t].charCodeAt(0) <= 96 || e[t].charCodeAt(0) >= 161 && e[t].charCodeAt(0) <= 191 || e[t].charCodeAt(0) >= 710 && e[t].charCodeAt(0) <= 808 || e[t].charCodeAt(0) >= 8211 && e[t].charCodeAt(0) <= 10230 || 63743 == e[t].charCodeAt(0) || 124 == e[t].charCodeAt(0) || 126 == e[t].charCodeAt(0) ? (n += '</span><span id="intWord' + ++i + '">' + e[t] + "</span>", n += '<span id="intWord' + ++i + '">') : (e[t].charCodeAt(0) >= 48 && e[t].charCodeAt(0) <= 57 || e[t].charCodeAt(0) >= 65 && e[t].charCodeAt(0) <= 90 || e[t].charCodeAt(0) >= 97 && e[t].charCodeAt(0) <= 122 || e[t].charCodeAt(0) >= 192 && e[t].charCodeAt(0) <= 214 || e[t].charCodeAt(0) >= 216 && e[t].charCodeAt(0) <= 246 || e[t].charCodeAt(0) >= 248 && e[t].charCodeAt(0) <= 383 || e[t].charCodeAt(0) >= 508 && e[t].charCodeAt(0) <= 511 || e[t].charCodeAt(0) >= 536 && e[t].charCodeAt(0) <= 539 || e[t].charCodeAt(0) >= 1024 && e[t].charCodeAt(0) <= 1237 || e[t].charCodeAt(0) >= 7808 && e[t].charCodeAt(0) <= 7813 || e[t].charCodeAt(0) >= 7922 && e[t].charCodeAt(0) <= 7923 || 567 == e[t].charCodeAt(0) || 7838 == e[t].charCodeAt(0) || 123 == e[t].charCodeAt(0) || 125 == e[t].charCodeAt(0) || 37 == e[t].charCodeAt(0) || 47 == e[t].charCodeAt(0) && y(e[t + 1]) && y(e[t - 1])) && (n += e[t]);
            return n += "</span>", document.getElementById(t).innerHTML = n, i
        },
        f = w("int-txt"),
        v = [],
        b = [],
        E = [],
        x = [],
        I = -1,
        B = 0,
        L = !1,
        W = ["Hairline", "Thin", "Light", "Book", "Regular", "Medium", "Bold", "Extra Bold", "Heavy", "Black", "Fat"],
        C = [50, 94, 155, 243, 356, 474, 554, 662, 761, 898, 950];

    function k(t) {
        let e;
        for (let n = 0; n < W.length - 1; n++)
            if (t >= C[n] && t <= C[n + 1]) {
                e = t <= (C[n + 1] - C[n]) / 2 ? W[n] : W[n + 1];
                break
            }
        if (e) return `Similar to: <span class="w700">Nattiftof ${e}</span>`
    }

    function z(t) {
        if (-1 != t) {
            let e = document.getElementById("intWord" + t),
                n = Math.floor(Number(window.getComputedStyle(e, null).getPropertyValue("font-size").replace(/[^0-9\.]+/g, ""))),
                i = Math.floor(Number(window.getComputedStyle(e, null).getPropertyValue("letter-spacing").replace(/[^0-9\.]+/g, ""))),
                o = e.style.fontVariationSettings,
                s = o.indexOf(","),
                a = Math.floor(Number(o.substr(0, s).replace(/[^0-9\.]+/g, "")));
            0 == a && (a = 200);
            let d = Math.floor(Number(o.substr(s + 1, o.length).replace(/[^0-9\.]+/g, "")));
            const l = `<div class='pb8'>${k(a)}</div>` + `<div class='grayc'><span>Weight: </span>${a}</div>` + `<div class='grayc'><span>Italic: </span>${d}</div>` + `<div class='grayc'><span>Font-size: </span>${n}px</div>` + `<div class='grayc'><span>Letter-spacing: </span>${i}px</div>`;
            document.getElementById("pwidget").innerHTML = l
        }
    }

    function A() {
        z(I), L && requestAnimationFrame(A)
    }
    document.addEventListener("keydown", t => {
        (t.isComposing || 32 === t.keyCode) && -1 != I && (b[I].isActive() || b[I].play())
    }), document.addEventListener("keyup", t => {
        (t.isComposing || 32 === t.keyCode) && -1 != I && b[I].pause()
    }), document.getElementById("int-txt").addEventListener("mouseenter", () => {
        window.outerWidth > 1024 && !g && (L = !0, requestAnimationFrame(A), T(), gsap.to("#scrollhelper1", {
            opacity: 1,
            duration: .5
        }), gsap.to("#scrollhelper2", {
            opacity: 1,
            duration: .5
        }))
    }), document.getElementById("int-txt").addEventListener("mouseleave", () => {
        window.outerWidth > 1024 && !g && (L = !1, H(), gsap.to("#scrollhelper1", {
            opacity: 0,
            duration: .5
        }), gsap.to("#scrollhelper2", {
            opacity: 0,
            duration: .5
        }))
    }), document.getElementById("int-txt").addEventListener("mousemove", t => {
        if (window.outerWidth > 1024 && !g) {
            const e = t.clientX,
                n = t.pageY,
                i = window.outerWidth / 1920,
                o = window.innerHeight;
            let s = document.getElementById("pwidget");
            u.y > o - 190 * i ? (s.style.top = n - 162 * i + "px", s.style.left = e + 30 * i + "px") : (s.style.top = n + 30 * i + "px", s.style.left = e + 30 * i + "px")
        }
    });


    let M = t => {
            document.getElementById("int-txt").innerHTML = t, f = w("int-txt"), R(f)
        },
        S = [],
        R = t => {
            for (let e = 0; e < t + 1; e++) {
                S[e] = {
                    w: 0,
                    wpr: -.23227 * Math.PI,
                    i: 0,
                    ipr: -.5 * Math.PI,
                    last: 0
                }, v[e] = gsap.timeline({
                    repeat: -1
                }), b[e] = gsap.timeline({
                    repeat: -1
                }), b[e].to("#intWord" + e, {
                    letterSpacing: "2vw",
                    duration: 1.85
                }), b[e].to("#intWord" + e, {
                    letterSpacing: "0vw",
                    duration: 1.85
                }), b[e].pause(), x[e] = gsap.timeline({
                    repeat: 0
                }), x[e].to("#intWord" + e, {
                    fontSize: "16vw",
                    duration: .62
                }), x[e].to("#intWord" + e, {
                    fontSize: "14vw",
                    duration: .62
                }), x[e].pause(), E[e] = gsap.timeline({
                    repeat: 0
                }), E[e].to("#intWord" + e, {
                    fontSize: "1vw",
                    duration: .42
                }), E[e].to("#intWord" + e, {
                    fontSize: "1.5vw",
                    duration: .42
                }), E[e].pause();
                let t = () => {
                        1 == S[B].i && (S[B].ipr += .015 * Math.PI, p.style.fontVariationSettings = "'wght' " + (.5 * (Math.sin(S[B].wpr) + 1) * 900 + 50) + ", 'ital'" + .5 * (Math.sin(S[B].ipr) + 1) * 100, requestAnimationFrame(t))
                    },
                    n = () => {
                        1 == S[B].w && (S[B].wpr += .01 * Math.PI, p.style.fontVariationSettings = "'wght' " + (.5 * (Math.sin(S[B].wpr) + 1) * 900 + 50) + ", 'ital'" + .5 * (Math.sin(S[B].ipr) + 1) * 100, requestAnimationFrame(n))
                    };
                document.getElementById("intWord" + e).addEventListener("mousedown", i => {
                    K(), window.outerWidth > 1024 && !g && (0 == i.button && (p = document.getElementById("intWord" + e), B = e, S[e].w = 1, requestAnimationFrame(n)), 2 == i.button && (S[e].i = 1, p = document.getElementById("intWord" + e), B = e, requestAnimationFrame(t)))
                }), document.addEventListener("mouseup", () => {
                    window.outerWidth > 1024 && !g && (S[B].i = 0, S[B].w = 0)
                }), document.getElementById("intWord" + e).addEventListener("mouseenter", () => {
                    if ((window.outerWidth < 1025 || g) && (document.getElementById("intWord" + e).style.color = "#2f2f30", document.getElementById("intWord" + e).style.backgroundColor = "#ff3b4e", -1 != I && F()), I = e, window.outerWidth > 1024 && !g) {
                        document.getElementById("pwidget").style.display = "block"
                    }
                }), document.getElementById("intWord" + e).addEventListener("mouseleave", () => {
                    if (window.outerWidth > 1024 && !g) {
                        document.getElementById("pwidget").style.display = "none", -1 != I && (b[I].pause(), I = -1), v[e].pause()
                    }
                });
                let i = !1,
                    o = !1;
                document.getElementById("intWord" + e).addEventListener("wheel", () => {
                    if (window.outerWidth > 1024 && !g) {
                        let t = -1 * event.deltaY || event.wheelDelta || -1 * event.detail,
                            n = document.getElementById("intWord" + e),
                            s = window.getComputedStyle(n, null).getPropertyValue("font-size"),
                            a = parseFloat(s);
                        x[e].isActive() || E[e].isActive() || (t > 0 ? P(a + 3) < 13.9 ? (n.style.fontSize = P(a + 3) + "vw", o = !1) : i || (x[e].restart(), i = !0) : P(a - 3) > 1.6 ? (n.style.fontSize = P(a - 3) + "vw", i = !1) : o || (E[e].restart(), o = !0))
                    }
                })
            }
        };
    R(f);

    let P = t => {
            let e = window,
                n = document,
                i = n.documentElement,
                o = n.getElementsByTagName("body")[0];
            return 100 * t / (e.outerWidth || i.clientWidth || o.clientWidth)
        },
        T = () => {
            document.body.style.overflowY = "hidden";
            let t = window.scrollX,
                e = window.scrollY;
            window.onscroll = function() {
                window.scrollTo(t, e)
            }
        },
        H = () => {
            window.onscroll = function() {};
            const t = document.body;
            t.style.overflowY = "visible", t.style.paddingRight = "0px"
        };

    function F() {
        -1 != I && (document.getElementById("intWord" + I).style.color = "inherit", document.getElementById("intWord" + I).style.backgroundColor = "inherit")
    }
    let N = "Barcelona 14 km! ЦИФРА type shape ☞ stormy night 17% out of 420 {MOTOR} figure ❺ översättare A zászlóshajó ⚐ Volleyballplatz → ретро музыка Декоративный? 30 Май 1672 год ROOM 1a върволица oт @ 3/4 pts. ©&#63743",
        V = 1;
    document.getElementById("reset-button-1").addEventListener("click", () => {
        M(N), document.getElementById("reset-text").value = "", V = !V, G ? _() : Z[11] && Q(11), document.getElementById("txt-top").scrollIntoView()
    }), document.getElementById("reset-button-2").addEventListener("click", () => {
        F(), G && _(), I = -1, M(N), document.getElementById("reset-text").value = "", V = !V, document.getElementById("txt-top").scrollIntoView()
    }), document.getElementById("set-button").addEventListener("click", () => {
        "" != document.getElementById("reset-text").value ? (M(document.getElementById("reset-text").value), V = 0, I = -1) : (M(N), V = 1, I = -1), document.getElementById("txt-top").scrollIntoView()
    }), document.getElementById("reset-text-f").addEventListener("keyup", function(t) {
        "Enter" === t.key && "" != document.getElementById("reset-text").value && (M(document.getElementById("reset-text").value), V = 0, document.getElementById("txt-top").scrollIntoView())
    });

    let q = [];
    q[0] = document.getElementById("mslider1"), q[1] = document.getElementById("mslider2"), q[2] = document.getElementById("mslider3");
    let $ = window.outerWidth / 375;
    q[0].value = Math.floor(30 * $), q[0].min = Math.floor(15 * $), q[0].max = Math.floor(100 * $);
    let D = [];

    function O() {
        if (I > -1) {
            let t = document.getElementById("intWord" + I);
            t.style.fontSize = q[0].value + "px", t.style.fontVariationSettings = "'wght'" + q[1].value + ", 'ital' " + q[2].value, D[0].innerHTML = q[0].value + "px", D[1].innerHTML = q[1].value, D[2].innerHTML = q[2].value, D[3].innerHTML = k(q[1].value)
        }
    }

    function K() {
        if (I > -1) {
            let t = document.getElementById("intWord" + I),
                e = Math.floor(Number(window.getComputedStyle(t, null).getPropertyValue("font-size").replace(/[^0-9\.]+/g, ""))),
                n = Math.floor(Number(window.getComputedStyle(t, null).getPropertyValue("letter-spacing").replace(/[^0-9\.]+/g, ""))),
                i = Math.floor(Number(window.getComputedStyle(t, null).getPropertyValue("font-variation-settings").replace(/[^0-9\.]+/g, "")));
            q[0].value = e, q[1].value = i, q[2].value = n, D[0].innerHTML = e + "px", D[1].innerHTML = i, D[2].innerHTML = n, D[3].innerHTML = k(i)
        }
    }

    function Y(t) {
        if (window.outerWidth > 1024 && !g) {
            const e = t.clientX,
                n = t.pageY,
                i = window.outerWidth / 1920,
                o = window.innerHeight;
            let s = document.getElementById("otfwidget"),
                a = s.clientWidth,
                d = s.clientHeight;
            u.y > o - 1.5 * d ? (s.style.top = n - d + "px", s.style.left = e - 20 * i - a + "px") : (s.style.top = n + .5 * d + "px", s.style.left = e - 20 * i - a + "px")
        }
    }

    function X(t) {
        document.getElementById("otfwidget").innerHTML = U[t]
    }
    D[0] = document.getElementById("msliderv1"), D[1] = document.getElementById("msliderv2"), D[2] = document.getElementById("msliderv3"), D[3] = document.getElementById("te-wght-name"), q[0].addEventListener("input", O), q[1].addEventListener("input", O), q[2].addEventListener("input", O), (window.outerWidth < 1025 || g) && (document.getElementById("intWord0").style.color = "#2f2f30", document.getElementById("intWord0").style.backgroundColor = "#ff3b4e", I = 0, K()), document.getElementById("int-txt").style.fontVariantLigatures = "discreationary-ligatures!important", document.getElementById("te-panel").addEventListener("mousemove", t => {
        Y(t)
    });
    let U = ["Standard Ligatures", "Discretionary Ligatures", "Stylistic Alternates", "Bulgarian Localization", "Ordinals", "Case-Sensitive Forms", "Tabular Figures", "Inferiors", "Superiors", "Fractions", "Slashed Zero", "X-ray"],
        Z = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        j = ["'liga'", "'dlig'", "'salt'", "'ss03'", "'ordn'", "'case'", "'tnum'", "'subs'", "'sups'", "'frac'", "'zero'"],
        G = !0,
        J = gsap.timeline({
            repeat: 0
        });
    J.pause(), J.to("#otf-info", {
        opacity: 1,
        duration: .35
    }), J.to("#otf-info", {
        opacity: 0,
        duration: .35,
        delay: .6
    });
    for (let t = 0; t < 12; t++) document.getElementById("otf" + t).addEventListener("click", () => {
        if ((G || 11 == t) && Q(t), window.outerWidth < 1025 || g) {
            let e;
            e = Z[t] ? " Enabled" : " Disabled", document.getElementById("otf-info").getElementsByClassName("otf-info-holder")[0].innerHTML = U[t] + e, J.restart()
        }
    }), document.getElementById("otf" + t).addEventListener("mouseenter", e => {
        if (window.outerWidth > 1024 && !g) {
            let n = document.getElementById("otfwidget");
            X(t), n.style.display = "block", Y(e)
        }
    }), document.getElementById("otf" + t).addEventListener("mouseleave", t => {
        if (window.outerWidth > 1024 && !g) {
            document.getElementById("otfwidget").style.display = "none", Y(t)
        }
    });
    let _ = () => {
        Z[0] || Q(0);
        for (let t = 1; t < 12; t++) Z[t] && Q(t)
    };
    let Q = t => {
        if (t > 0 && (t => {
                switch (t) {
                    case 1:
                        document.getElementById("int-txt")
                }
            })(t), 11 == t) {
            Z[t] = !Z[t];
            let e = document.getElementById("int-txt");
            Z[t] ? e.classList.add("no-otf-a") : e.classList.remove("no-otf-a");
            let n = document.getElementById("otf" + t);
            Z[t] ? (n.classList.remove("te-otf-c"), n.classList.remove("te-otf-da"), n.classList.remove("te-otf-dc"), n.classList.add("te-otf-a")) : (n.classList.remove("te-otf-a"), n.classList.remove("te-otf-da"), n.classList.remove("te-otf-dc"), n.classList.add("te-otf-c"))
        } else {
            if (t > 5 && 0 == Z[t]) {
                for (let t = 6; t < 11; t++) Z[t] = 0;
                Z[t] = 1
            } else Z[t] = !Z[t];
            let e = "";
            for (let t = 0; t < 11; t++) {
                let n = document.getElementById("otf" + t);
                Z[t] ? (n.classList.remove("te-otf-c"), n.classList.remove("te-otf-da"), n.classList.remove("te-otf-dc"), n.classList.add("te-otf-a"), e += 10 != t ? j[t] + " 1, " : j[t] + " 1;") : (n.classList.remove("te-otf-a"), n.classList.remove("te-otf-da"), n.classList.remove("te-otf-dc"), n.classList.add("te-otf-c"), e += 10 != t ? j[t] + " 0, " : j[t] + " 0;")
            }
            let n = document.getElementById("int-txt");
            n.style.fontFeatureSettings = null, e[e.length - 3] = ";", n.setAttribute("style", "font-feature-settings:" + e)
        }
    };
    document.getElementById("otftoggle").addEventListener("click", () => {
        if (G) {
            document.getElementById("otftoggle").classList.remove("change-color-button-a"), document.getElementById("otftoggle").classList.add("change-color-button"), G = !1;
            for (let t = 0; t < 11; t++) Z[t] ? (document.getElementById("otf" + t).classList.remove("te-otf-a"), document.getElementById("otf" + t).classList.add("te-otf-da")) : (document.getElementById("otf" + t).classList.remove("te-otf-c"), document.getElementById("otf" + t).classList.add("te-otf-dc"));
            let t = "";
            for (let e = 0; e < 10; e++) t += j[e] + " 0, ";
            t += j[10] + " 0;";
            let e = document.getElementById("int-txt");
            e.style.fontFeatureSettings = null, e.setAttribute("style", "font-feature-settings:" + t)
        } else {
            document.getElementById("otftoggle").classList.remove("change-color-button"), document.getElementById("otftoggle").classList.add("change-color-button-a"), G = !0;
            for (let t = 0; t < 11; t++) Z[t] ? (document.getElementById("otf" + t).classList.remove("te-otf-da"), document.getElementById("otf" + t).classList.add("te-otf-a")) : (document.getElementById("otf" + t).classList.remove("te-otf-dc"), document.getElementById("otf" + t).classList.add("te-otf-c"));
            Q(13)
        }
    });
    let tt = window.outerWidth,
        et = .7 * window.outerWidth,
        nt = .5 * window.outerWidth,
        it = .7 * window.outerWidth,
        ot = .418 * window.outerWidth,
        st = .169 * window.outerWidth,
        at = 0,
        dt = 0;
    (window.outerWidth < 1025 || g) && (ot = 0);
    let lt = document.getElementById("glyph-control");
    lt.max = window.outerWidth, lt.value = nt;
    let rt = {
        x: .418 * window.outerWidth,
        y: .169 * window.outerWidth
    };
    document.getElementById("heros").addEventListener("mousemove", function(t) {
        window.outerWidth > 1024 && !g && (it = t.pageX - this.offsetLeft)
    }), document.getElementById("glyphintd").addEventListener("mousemove", function(t) {
        ot = t.pageX - this.offsetLeft, st = t.pageY - this.offsetTop
    }), window.addEventListener("resize", function(t) {
        if (Tt(), Ht(), tt != window.outerWidth) {
            tt = window.outerWidth, lt.max = window.outerWidth;
            for (let t = 0; t < 4; t++) ct[t].resize();
            for (let t = 0; t < 2; t++) ht[t].resize()
        }
        r ? wt.resize() : pt.resize(), g = c()
    });
    class mt {
        constructor(t, e, n, i) {
            this.el = document.getElementById(t), this.side = e, this.prevTarget = i, this.translateWithEasing = e ? -1 * this.el.offsetWidth * .45 : 0, this.translateTarget = 0, this.translateEasingFactor = n, this.windowWidth = window.outerWidth
        }
        resize() {
            this.windowWidth = window.outerWidth, this.side ? this.translateWithEasing = -1 * this.el.offsetWidth * .45 : this.translateWithEasing = 0, this.prevTarget = 0
        }
        animateMe(t) {
            let e;
            var n, i, o;
            this.prevTarget = t, this.side ? (this.prevTarget = t, e = this.windowWidth - t) : (this.prevTarget = t, e = t), this.translateTarget = (this.el.offsetWidth - this.windowWidth) / this.windowWidth * e * -1, this.translateWithEasing = (n = this.translateWithEasing, i = this.translateTarget, (1 - (o = this.translateEasingFactor)) * n + o * i), this.side, this.el.style.transform = `\n          translateX(${this.translateWithEasing}px)`
        }
    }
    let ht = [];
    ht[0] = new mt("glyphslider1", 1, .011, nt), ht[1] = new mt("glyphslider2", 0, .011, nt);
    let ct = [];
    ct[0] = new mt("heroslider1", 1, .02, et), ct[1] = new mt("heroslider2", 1, .01, et), ct[2] = new mt("heroslider3", 1, .005, et), ct[3] = new mt("heroslider4", 1, .04, et);
    class gt {
        constructor(t, e) {
            this.el = document.getElementById(t), this.letters = e, this.prev = 0, this.setShuffle()
        }
        setShuffle() {
            this.el.addEventListener("mouseover", () => {
                let t = this.prev;
                for (; t == this.prev;) t = Math.floor(Math.random() * this.letters.length);
                this.el.innerHTML = this.letters[t], this.prev = t
            }), this.el.addEventListener("click", () => {
                let t = this.prev;
                for (; t == this.prev;) t = Math.floor(Math.random() * this.letters.length);
                this.el.innerHTML = this.letters[t], this.prev = t
            })
        }
    }
    let ut = [];
    ut[0] = new gt("scell1", "äẞƒЩ⅚"), ut[1] = new gt("scell2", "€0ðA"), ut[2] = new gt("scell3", ["½", "ĕ", "Ð", "①"]), ut[3] = new gt("scell4", "çЫūţ"), ut[4] = new gt("scell5", ["ж", "fj", "#", "Œ", "æ"]), ut[5] = new gt("scell6", "ß❾Ẅŋš"), ut[6] = new gt("scell7", ["©", "ů", "π", "г", "fft"]), ut[7] = new gt("scell8", ["⅞", "Ф", "℃"]);
    class yt {
        constructor(t, e, n, i) {
            this.zoom = 2, this.img = document.getElementById(t), this.glass = document.getElementById(e), this.magID = e, this.imgID = t, this.glass.style.backgroundImage = "url('" + this.img.src + "')", this.glass.style.backgroundRepeat = "no-repeat", this.glass.style.backgroundSize = n * this.zoom + "px " + i * this.zoom + "px", this.bw = 4, this.w = this.glass.offsetWidth / 2, this.h = this.glass.offsetHeight / 2, this.x = 0, this.y = 0
        }
        resize() {
            this.w = document.getElementById(this.magID).offsetWidth / 2, this.h = document.getElementById(this.magID).offsetHeight / 2, document.getElementById(this.magID).style.backgroundSize = this.w * this.zoom + "px " + this.h * this.zoom + "px", vt(0), bt(0), bt(0)
        }
        moveMagnifier(t, e) {
            t > this.img.width - this.w / this.zoom && (t = this.img.width - this.w / this.zoom), t < this.w / this.zoom && (t = this.w / this.zoom), e > this.img.height - this.h / this.zoom && (e = this.img.height - this.h / this.zoom), e < this.h / this.zoom && (e = this.h / this.zoom), this.glass.style.left = t - this.w + "px", this.glass.style.top = e - this.h + "px", this.glass.style.backgroundPosition = "-" + (t * this.zoom - this.w + this.bw) + "px -" + (e * this.zoom - this.h + this.bw) + "px"
        }
    }
    let pt = new yt("glyphimage", "imagg", document.getElementById(r ? "glyphimage2" : "glyphimage").width, document.getElementById(r ? "glyphimage2" : "glyphimage").height),
        wt = new yt("glyphimage2", "imagg2", document.getElementById(r ? "glyphimage2" : "glyphimage").width, document.getElementById(r ? "glyphimage2" : "glyphimage").height),
        ft = !1;

    function vt(t) {
        if (pt.zoom < 7 && !ft && 0 == r) {
            ft = !0;
            let e = document.getElementById("imagg").style;
            pt.zoom += 2.5, pt.glass.style.backgroundSize = pt.img.width * pt.zoom + "px " + pt.img.height * pt.zoom + "px", gsap.to(e, {
                borderWidth: pt.zoom + "px",
                duration: t
            }).then(() => {
                ft = !1
            })
        } else if (wt.zoom < 6 && !ft && 0 != r) {
            let e = document.getElementById("imagg2").style;
            wt.zoom += 2.5, wt.glass.style.backgroundSize = wt.img.width * wt.zoom + "px " + wt.img.height * wt.zoom + "px", gsap.to(e, {
                borderWidth: wt.zoom + "px",
                duration: t
            }).then(() => {
                ft = !1
            })
        }
    }

    function bt(t) {
        if (pt.zoom > 2 && !ft && 0 == r) {
            ft = !0, pt.zoom -= 2.5, pt.glass.style.backgroundSize = pt.img.width * pt.zoom + "px " + pt.img.height * pt.zoom + "px";
            let e = document.getElementById("imagg").style;
            gsap.to(e, {
                borderWidth: pt.zoom + "px",
                duration: t
            }).then(() => {
                ft = !1
            })
        }
        if (wt.zoom > 2 && !ft && 0 != r) {
            ft = !0, wt.zoom -= 2.5, wt.glass.style.backgroundSize = wt.img.width * wt.zoom + "px " + wt.img.height * wt.zoom + "px";
            let e = document.getElementById("imagg2").style;
            gsap.to(e, {
                borderWidth: wt.zoom + "px",
                duration: t
            }).then(() => {
                ft = !1
            })
        }
    }
    const Et = t => {
        if (2 == t.button) return t.preventDefault(), bt(.25);
        vt(.25)
    };
    document.getElementById("imagg").addEventListener("mousedown", Et), document.getElementById("imagg2").addEventListener("mousedown", Et);
    (() => {
        Splitting();
        let t, e, n = !0,
            i = !1;
        document.getElementById("voice-button").addEventListener("click", function() {
            if (n && document.getElementById("voicesection").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                }), i) return;
            if (!n) return document.getElementById("voice-button").classList.remove("voice-section-button-active"), document.getElementById("voice-button").classList.add("voice-section-button"), e.getTracks()[0].stop(), n = !n, i = !0, void setTimeout(() => {
                i = !1
            }, 3e3);
            document.getElementById("voice-button").classList.remove("voice-section-button"), document.getElementById("voice-button").classList.add("voice-section-button-active"), n = !n, t = window.AudioContext || window.webkitAudioContext;
            let o, s, a = new Uint8Array(128);
            const d = document.querySelectorAll(".voice-section-interaction > div span"),
                l = d.length;

            function r() {
                o.getByteFrequencyData(a);
                let t = 0;
                for (let e = 0; e < l; e++) {
                    let n = Math.floor(e / l * a.length),
                        i = a[n] / 255;
                    t += i, d[e].style.fontVariationSettings = "'wght' " + Math.floor(50 + 1750 * i)
                }
                n && 0 == t || requestAnimationFrame(r)
            }
            t && (s = new t), navigator.mediaDevices.getUserMedia({
                audio: !0,
                video: !1
            }).then(t => {
                e = t,
                    function(t) {
                        (o = s.createAnalyser()).fftSize = 2048, t.connect(o)
                    }(s.createMediaStreamSource(t)), r()
            })
        })
    })();
    let xt = !0,
        It = !1,
        Bt = () => {
            let t = document.documentElement.scrollTop > .9 * window.innerHeight || document.body.scrollTop > .9 * window.innerHeight;
            t != It && kt(xt = !xt), It = t
        },
        Lt = gsap.timeline({
            repeat: 0
        });
    Lt.to("#navn", {
        marginLeft: "-13.5vw",
        duration: .2
    }), Lt.to("#navb", {
        marginLeft: "8.5vw",
        duration: .3
    }), Lt.pause();
    let Wt = gsap.timeline({
        repeat: 0
    });
    Wt.to("#navn", {
        marginLeft: "-47vw",
        duration: .3
    }), Wt.to("#navb", {
        marginLeft: "35vw",
        duration: .2
    }), Wt.pause();
    let Ct = gsap.timeline({
        repeat: 0
    });
    Ct.to("#navn", {
        marginLeft: "-47vw",
        duration: .3
    }), Ct.to("#navb", {
        marginLeft: "27.4vw",
        duration: .2
    }), Ct.pause();
    let kt = t => {
        t ? window.outerWidth > 1024 && !g ? Lt.reverse() : window.outerWidth > 767 ? Wt.reverse() : Ct.reverse() : window.outerWidth > 1024 && !g ? Lt.restart() : window.outerWidth > 767 ? Wt.restart() : Ct.restart()
    };
    document.getElementById("downtrig").addEventListener("mousedown", () => {
        dt ? Rt() : St()
    }), document.getElementById("downtrig1").addEventListener("mousedown", () => {
        dt ? document.body.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }) : St()
    }), document.getElementById("downtrig2").addEventListener("mousedown", () => {
        Rt()
    });
    let zt = gsap.timeline({
        repeat: 0
    });
    zt.to("#downpop", {
        display: "none",
        duration: .8
    }), zt.to("#downpop", {
        display: "flex",
        duration: .001
    }), zt.to("#downpop", {
        right: "0vw",
        duration: .7
    }), zt.pause();
    let At = !1,
        Mt = !1;

    function St() {
        Mt || At || (document.body.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }), document.getElementById("downtrig").classList.add("h-button-active"), document.getElementById("downpop").classList.add("display-cont"), At = !0, gsap.to("#downpop", {
            right: "0vw",
            duration: .7
        }).then(() => {
            At = !1
        }), dt = 1, it = .4 * tt, ct[0].translateEasingFactor = .04, ct[1].translateEasingFactor = .06, ct[2].translateEasingFactor = .05, ct[3].translateEasingFactor = .08, a("mc-bonus-signup-form"))
    }

    function Rt() {
        Mt || At || (document.getElementById("downtrig").classList.remove("h-button-active"), Mt = !0, gsap.to("#downpop", {
            right: "-39.0625vw",
            duration: .7
        }).then(() => {
            Mt = !1, document.getElementById("downpop").classList.remove("display-cont")
        }), dt = 0, ct[0].translateEasingFactor = .02, ct[1].translateEasingFactor = .01, ct[2].translateEasingFactor = .005, ct[3].translateEasingFactor = .04)
    }
    let Pt = t => t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        Tt = () => {
            let t = document.getElementsByClassName("main-space-box");
            for (let e = 0; e < t.length; e++) {
                let n = t[e].offsetWidth,
                    i = t[e].offsetHeight,
                    o = Math.floor(n * i);
                t[e].innerHTML = "<span class='sl-z'>" + Pt(o) + "<span class='f-sup'> px2</span></span>"
            }
        };
    Tt();
    let Ht = () => {
        let t = document.getElementsByClassName("hero-size"),
            e = window.getComputedStyle(document.getElementsByClassName("hero-title")[0], null).getPropertyValue("font-size"),
            n = Math.floor(parseFloat(e));
        for (let e = 0; e < t.length; e++) t[e].innerHTML = n + " px"
    };
    Ht(), document.getElementById("navn").addEventListener("mouseenter", () => {
            window.outerWidth > 1024 && !g && document.getElementById("navh").classList.add("nav-hovered")
        }), document.getElementById("navn").addEventListener("mouseleave", () => {
            window.outerWidth > 1024 && !g && document.getElementById("navh").classList.remove("nav-hovered")
        }), document.getElementById("navn").addEventListener("click", () => {
            document.getElementById("heros").scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }), document.getElementById("navh").addEventListener("click", () => {
            document.getElementById("heros").scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }), document.getElementById("subsb").addEventListener("click", () => {
            document.getElementById("subsanc").scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }),
        function t() {
            tt < 1025 || g ? (et = tt * (Math.sin(at) + 1) * .5, at += .01) : et = dt ? .985 * tt : it;
            for (let t = 0; t < 4; t++) ct[t].animateMe(et);
            nt = tt < 1025 || g ? lt.value : ot;
            for (let t = 0; t < 2; t++) ht[t].animateMe(nt);
            rt.x += -1 * (rt.x - ot) * .17, rt.y += -1 * (rt.y - st) * .17, window.outerWidth > 1024 && !g && (pt.moveMagnifier(rt.x, rt.y), wt.moveMagnifier(rt.x, rt.y)), Bt(), window.requestAnimationFrame(t)
        }();
    let Ft, Nt, Vt = {
            x: 0,
            y: 0
        },
        qt = {
            x: 0,
            y: 0
        },
        $t = document.getElementById("bezier-bottom").clientWidth,
        Dt = document.getElementById("bezier-bottom").clientHeight,
        Ot = (t, e, n, i, o) => {
            o.beginPath(), o.rect(t, e, n, i), o.closePath(), o.fill()
        };
    (Ft = document.getElementById("bezier-bottom")).width = 2 * $t, Ft.height = 2 * Dt, (Nt = Ft.getContext("2d")).scale(2, 2);
    class Kt {
        constructor(t, e, n, i, o, s, a, d, l) {
            this.type = t, this.ax = e, this.ay = n, this.bx = i, this.by = o, t && (this.amx = s, this.amy = a, this.bmx = d, this.bmy = l), this.display = !0
        }
        resize(t) {
            this.ax *= t, this.ay *= t, this.bx *= t, this.by *= t, this.type && (this.amx *= t, this.amy *= t, this.bmx *= t, this.bmy *= t)
        }
        moveVert(t) {
            this.ay -= t, this.by -= t, this.type && (this.amy -= t, this.bmy -= t)
        }
        moveHor(t) {
            this.ax -= t, this.bx -= t, this.type && (this.amx -= t, this.bmx -= t)
        }
    }
    let Yt = (t, e, n, i, o) => {
            o.moveTo(t, e), o.lineTo(n, i)
        },
        Xt = (t, e, n, i, o, s) => {
            i.strokeStyle = o, i.fillStyle = s, i.beginPath(), i.arc(t, e, n, 0, 2 * Math.PI), i.stroke(), i.fill()
        },
        Ut = (t, e, n, i, o, s) => {
            let a = .5 * n;
            i.strokeStyle = o, i.fillStyle = s, Ot(t - a, e - a, n, n, i), i.stroke()
        },
        Zt = (t, e, n, i, o, s, a) => {
            let d = .5 * o;
            const l = Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - i, 2)),
                r = Math.sqrt(Math.pow(0, 2) + Math.pow(e - i, 2));
            let m = Math.asin(r / l);
            s.strokeStyle = a, s.save(), s.translate(t, e), t > n && e > i ? s.rotate(m) : t < n && e < i ? s.rotate(m) : s.rotate(-m), s.beginPath(), s.moveTo(-d, d), s.lineTo(d, -d), s.moveTo(d, d), s.lineTo(-d, -d), s.stroke(), s.restore()
        };
    class jt {
        constructor(t) {
            this.segments = { ...t
            }, this.len = t.length, this.colors = {
                primary: "#000",
                secondary: "#fff",
                outline: "#ff3b4e"
            }, this.pointR = 10, this.isReshaping = !1, this.isAnimating = !1, this.mPoint = -1, this.mHandle = -1, this.initPoints()
        }
        changeColors() {
            "#000" == this.colors.primary ? (this.colors.primary = "#fff", this.colors.secondary = "#000") : (this.colors.primary = "#000", this.colors.secondary = "#fff")
        }
        initPoints() {
            this.segments[0].type && this.segments[this.len - 1].type || (this.segments[0].display = !1);
            for (let t = 1; t < this.len; t++) this.segments[t].type && this.segments[t - 1].type || (this.segments[t].display = !1)
        }
        drawShape(t, e) {
            t.fillStyle = this.colors.primary, t.strokeStyle = this.colors.outline, t.lineWidth = .2 * this.pointR, t.beginPath(), t.moveTo(this.segments[0].ax, this.segments[0].ay);
            for (let e = 0; e < this.len; e++) {
                let n = this.segments[e];
                n.type ? t.bezierCurveTo(n.amx, n.amy, n.bmx, n.bmy, n.bx, n.by) : t.lineTo(n.bx, n.by)
            }
            e ? t.stroke() : t.fill()
        }
        drawPoints(t) {
            let e;
            t.lineWidth = .6 * this.pointR;
            for (let n = 0; n < this.len; n++) {
                e = n == this.mPoint && -1 == this.mHandle ? this.colors.outline : this.colors.secondary;
                let i = this.segments[n];
                t.lineWidth = .5 * this.pointR;
                let o = .75 * this.pointR;
                n == this.mPoint && -1 == this.mHandle && (o *= 1.333), this.segments[n].display ? (t.lineWidth = .6 * o, Xt(i.ax, i.ay, .75 * o, t, this.colors.outline, e)) : (t.lineWidth = .22 * o, Ut(i.ax, i.ay, 1.5 * o, t, this.colors.outline, e))
            }
        }
        drawHandlers(t) {
            for (let e = 0; e < this.len; e++) {
                let n = this.segments[e];
                if (this.segments[e].type) {
                    t.lineWidth = .2 * this.pointR, t.beginPath();
                    const e = Math.sqrt(Math.pow(n.ax - n.amx, 2) + Math.pow(n.ay - n.amy, 2)),
                        i = Math.abs(e - 1.1 * this.pointR) / e,
                        o = Math.sqrt(Math.pow(n.bx - n.bmx, 2) + Math.pow(n.by - n.bmy, 2)),
                        s = Math.abs(o - 1.05 * this.pointR) / o;
                    Yt(n.ax, n.ay, n.ax + (n.amx - n.ax) * i, n.ay + (n.amy - n.ay) * i, t), Yt(n.bx, n.by, n.bx + (n.bmx - n.bx) * s, n.by + (n.bmy - n.by) * s, t), t.stroke(), t.lineWidth = .2 * this.pointR, Zt(n.amx, n.amy, n.ax, n.ay, .6 * this.pointR, t, this.colors.outline), Zt(n.bmx, n.bmy, n.bx, n.by, .6 * this.pointR, t, this.colors.outline)
                }
            }
            this.isReshaping && (t.lineWidth = .2 * this.pointR, 0 == this.mHandle ? (t.lineWidth = .2 * this.pointR, Zt(this.segments[this.mPoint].amx, this.segments[this.mPoint].amy, this.segments[this.mPoint].ax, this.segments[this.mPoint].ay, 1.3 * this.pointR, t, this.colors.outline)) : 1 == this.mHandle && (t.lineWidth = .2 * this.pointR, Zt(this.segments[this.mPoint].bmx, this.segments[this.mPoint].bmy, this.segments[this.mPoint].bx, this.segments[this.mPoint].by, 1.3 * this.pointR, t, this.colors.outline)))
        }
        drawControls(t) {
            this.drawHandlers(t), this.drawPoints(t)
        }
        checkPoints(t, e, n) {
            for (let i = 0; i < this.len; i++) {
                let o = this.segments[i];
                if (Math.pow(o.ax - t, 2) + Math.pow(o.ay - e, 2) <= Math.pow(this.pointR + 1, 2)) {
                    return n && (this.mPoint = i, this.isReshaping = !0), {
                        x: o.ax,
                        y: o.ay,
                        i: i
                    }
                }
            }
            return {
                x: 0,
                y: 0,
                i: -1
            }
        }
        checkHandles(t, e, n) {
            for (let i = 0; i < this.len; i++) {
                let o = this.segments[i];
                if (o.type) {
                    if (Math.pow(o.amx - t, 2) + Math.pow(o.amy - e, 2) <= Math.pow(this.pointR, 2)) {
                        return n && (this.mPoint = i, this.mHandle = 0, this.isReshaping = !0), {
                            i: i,
                            h: 0,
                            x: o.amx,
                            y: o.amy
                        }
                    }
                    if (Math.pow(o.bmx - t, 2) + Math.pow(o.bmy - e, 2) <= Math.pow(this.pointR, 2)) {
                        return n && (this.mPoint = i, this.mHandle = 1, this.isReshaping = !0), {
                            i: i,
                            h: 1,
                            x: o.bmx,
                            y: o.bmy
                        }
                    }
                }
            }
            return {
                i: -1,
                h: 0
            }
        }
        movePoint(t, e, n) {
            if (t > -1 && t < this.len)
                if (-1 != this.mHandle)
                    if (this.mHandle) {
                        this.segments[t].bmx = e, this.segments[t].bmy = n;
                        let i = t + 1;
                        t == this.len - 1 && (i = 0);
                        let o = 2 * this.segments[t].bx - this.segments[t].bmx,
                            s = 2 * this.segments[t].by - this.segments[t].bmy,
                            a = Jt(this.segments[t].bx, this.segments[t].by, this.segments[i].amx, this.segments[i].amy),
                            d = Jt(this.segments[t].bx, this.segments[t].by, o, s),
                            l = (o - this.segments[t].bx) * a / d,
                            r = (s - this.segments[t].by) * a / d;
                        this.segments[i].amx = this.segments[t].bx + l, this.segments[i].amy = this.segments[t].by + r
                    } else {
                        this.segments[t].amx = e, this.segments[t].amy = n;
                        let i = t - 1;
                        0 == t && (i = this.len - 1);
                        let o = 2 * this.segments[t].ax - this.segments[t].amx,
                            s = 2 * this.segments[t].ay - this.segments[t].amy,
                            a = Jt(this.segments[t].ax, this.segments[t].ay, this.segments[i].bmx, this.segments[i].bmy),
                            d = Jt(this.segments[t].ax, this.segments[t].ay, o, s),
                            l = (o - this.segments[t].ax) * a / d,
                            r = (s - this.segments[t].ay) * a / d;
                        this.segments[i].bmx = this.segments[t].ax + l, this.segments[i].bmy = this.segments[t].ay + r
                    }
            else 0 != t ? (this.segments[t].type && (this.segments[t].amx = this.segments[t].amx - this.segments[t].ax + e, this.segments[t].amy = this.segments[t].amy - this.segments[t].ay + n), this.segments[t].ax = e, this.segments[t].ay = n, this.segments[t - 1].type && (this.segments[t - 1].bmx = this.segments[t - 1].bmx - this.segments[t - 1].bx + e, this.segments[t - 1].bmy = this.segments[t - 1].bmy - this.segments[t - 1].by + n), this.segments[t - 1].bx = e, this.segments[t - 1].by = n) : 0 == t && (this.segments[t].type && (this.segments[t].amx = this.segments[t].amx - this.segments[t].ax + e, this.segments[t].amy = this.segments[t].amy - this.segments[t].ay + n), this.segments[t].ax = e, this.segments[t].ay = n, this.segments[this.len - 1].type && (this.segments[this.len - 1].bmx = this.segments[this.len - 1].bmx - this.segments[this.len - 1].bx + e, this.segments[this.len - 1].bmy = this.segments[this.len - 1].bmy - this.segments[this.len - 1].by + n), this.segments[this.len - 1].bx = e, this.segments[this.len - 1].by = n);
            else this.stopReshaping()
        }
        stopReshaping() {
            this.isReshaping = !1, this.mPoint = -1, this.mHandle = -1
        }
        resize(t) {
            for (let e = 0; e < this.len; e++) this.segments[e].resize(t);
            this.pointR *= t
        }
    }
    let Gt = (t, e) => {
            ye = -1, pe = -1, he = !0;
            for (let n = 0; n < e.length; n++) gsap.to(t.segments[n], {
                ax: e[n].ax,
                ay: e[n].ay,
                bx: e[n].bx,
                by: e[n].by,
                amx: e[n].amx,
                amy: e[n].amy,
                bmx: e[n].bmx,
                bmy: e[n].bmy,
                duration: 1.5,
                ease: Back.easeOut.config(2)
            }).then(() => {
                he = !1
            });
            gsap.to("#canv-overlay", {
                opacity: .07,
                duration: .75
            }), gsap.to("#canv-overlay", {
                opacity: 0,
                duration: .75,
                delay: .75
            })
        },
        Jt = (t, e, n, i) => Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - i, 2)),
        _t = [new Kt(1, 256, 104, 389, 231, 336, 104, 389, 158), new Kt(1, 389, 231, 256, 359, 389, 306, 336, 359), new Kt(1, 256, 359, 123, 231, 179, 359, 123, 310), new Kt(1, 123, 231, 256, 104, 123, 155, 178, 104)];
    const Qt = [new Kt(1, 256, 104, 389, 231, 336, 104, 389, 158), new Kt(1, 389, 231, 256, 359, 389, 306, 336, 359), new Kt(1, 256, 359, 123, 231, 179, 359, 123, 310), new Kt(1, 123, 231, 256, 104, 123, 155, 178, 104)];
    let te = [new Kt(0, 569, 0, 569, 104), new Kt(0, 569, 104, 405, 104), new Kt(0, 405, 104, 417, 70), new Kt(1, 417, 70, 509, 235, 475, 110, 509, 157), new Kt(1, 509, 235, 256, 461, 509, 376, 397, 461), new Kt(1, 256, 461, 3, 231, 101, 461, 3, 366), new Kt(1, 3, 231, 256, 0, 3, 83, 120, 0), new Kt(0, 256, 0, 569, 0)],
        ee = [new Kt(0, 569, 0, 569, 104), new Kt(0, 569, 104, 405, 104), new Kt(0, 405, 104, 417, 70), new Kt(1, 417, 70, 509, 235, 475, 110, 509, 157), new Kt(1, 509, 235, 256, 461, 509, 376, 397, 461), new Kt(1, 256, 461, 3, 231, 101, 461, 3, 366), new Kt(1, 3, 231, 256, 0, 3, 83, 120, 0), new Kt(0, 256, 0, 569, 0)],
        ne = [new Kt(1, 364, 538, 540, 694, 466, 538, 540, 596), new Kt(1, 540, 694, 364, 851, 540, 795, 465, 851), new Kt(0, 364, 851, 0, 851), new Kt(0, 0, 851, 0, 749), new Kt(0, 0, 749, 349, 749), new Kt(1, 349, 749, 422, 691, 389, 749, 422, 731), new Kt(1, 422, 691, 349, 634, 422, 653, 387, 634), new Kt(0, 349, 634, 1, 634), new Kt(0, 1, 634, 1, 558), new Kt(0, 1, 558, 119, 352), new Kt(0, 119, 352, 215, 403), new Kt(0, 215, 403, 117, 576), new Kt(0, 117, 576, 101, 538), new Kt(0, 101, 538, 364, 538)],
        ie = [new Kt(1, 364, 538, 540, 694, 466, 538, 540, 596), new Kt(1, 540, 694, 364, 851, 540, 795, 465, 851), new Kt(0, 364, 851, 0, 851), new Kt(0, 0, 851, 0, 749), new Kt(0, 0, 749, 349, 749), new Kt(1, 349, 749, 422, 691, 389, 749, 422, 731), new Kt(1, 422, 691, 349, 634, 422, 653, 387, 634), new Kt(0, 349, 634, 1, 634), new Kt(0, 1, 634, 1, 558), new Kt(0, 1, 558, 119, 352), new Kt(0, 119, 352, 215, 403), new Kt(0, 215, 403, 117, 576), new Kt(0, 117, 576, 101, 538), new Kt(0, 101, 538, 364, 538)],
        oe = (t, e) => {
            for (let n = 0; n < t.length; n++) t[n].moveVert(e)
        },
        se = (t, e) => {
            for (let n = 0; n < t.length; n++) t[n].moveHor(e)
        };
    oe(_t, -88), oe(Qt, -88), oe(te, -88), oe(ee, -88), oe(ne, -88), oe(ie, -88);
    se(_t, -500), se(Qt, -500), se(te, -500), se(ee, -500), se(ne, -500), se(ie, -500);
    let ae = (t, e, n) => {
        for (let i = 0; i < t.length; i++) t[i].resize(n / e)
    };
    ae(_t, 1500, $t), ae(te, 1500, $t), ae(ne, 1500, $t), ae(Qt, 1500, $t), ae(ee, 1500, $t), ae(ie, 1500, $t);
    let de = [];
    de[0] = new jt(_t), de[1] = new jt(te), de[2] = new jt(ne);
    let le = 1;
    let re = !0,
        me = () => {
            (t => {
                t.clearRect(0, 0, $t, Dt)
            })(Nt), re && (de[0].isReshaping ? de[0].movePoint(de[0].mPoint, Vt.x, Vt.y) : de[1].isReshaping ? de[1].movePoint(de[1].mPoint, Vt.x, Vt.y) : de[2].isReshaping && de[2].movePoint(de[2].mPoint, Vt.x, Vt.y)), de[0].isAnimating ? de[0].movePoint(de[0].mPoint, qt.x, qt.y) : de[1].isAnimating ? de[1].movePoint(de[1].mPoint, qt.x, qt.y) : de[2].isAnimating && de[2].movePoint(de[2].mPoint, qt.x, qt.y), de[1].drawShape(Nt, 0), de[2].drawShape(Nt, 0), Nt.globalCompositeOperation = "xor", de[0].drawShape(Nt, 0), Nt.globalCompositeOperation = "source-over", re && (de[0].drawShape(Nt, 1), de[1].drawShape(Nt, 1), de[2].drawShape(Nt, 1), de[2].drawControls(Nt), de[1].drawControls(Nt), de[0].drawControls(Nt))
        },
        he = 0;
    me();
    let ce = () => {
        (() => {
            let t = 0;
            for (let e = 0; e < 3; e++)(de[e].isReshaping || de[e].isAnimating) && (t = 1);
            return t || he
        })() && me(), requestAnimationFrame(ce)
    };
    ce();
    let ge = [],
        ue = [];
    document.getElementById("canv-overlay").addEventListener("mouseup", () => {
        let t = {
            x: "n",
            y: "n"
        };
        (de[0].isReshaping || de[1].isReshaping || de[2].isReshaping) && (t.x = Vt.x, t.y = Vt.y), de[0].stopReshaping(), de[1].stopReshaping(), de[2].stopReshaping(), me(), "n" != t.x && (ue[ye] = t)
    }), document.getElementById("canv-overlay").addEventListener("mousedown", t => {
        if (2 == t.button && window.outerWidth > 1024 && !g) re = !re, me();
        else {
            let t = document.getElementById("canv-overlay"),
                e = {
                    x: "n",
                    y: "n",
                    p: -1,
                    b: 0,
                    h: 0,
                    n: -1
                };
            for (let n = 0; n < 3; n++) {
                let i = de[n].checkPoints(Vt.x, Vt.y, 1),
                    o = de[n].checkHandles(Vt.x, Vt.y, 1);
                if (i.i > -1) return t.style.cursor = "cell", e.x = i.x, e.y = i.y, e.p = i.i, e.n = n, ge[++ye] = e, void(pe = ye);
                if (o.i > -1) return t.style.cursor = "cell", e.x = o.x, e.y = o.y, e.p = o.i, e.b = 1, e.h = o.h, e.n = n, ge[++ye] = e, void(pe = ye)
            }
        }
    }), document.getElementById("canv-overlay").addEventListener("mousemove", t => {
        let e = document.getElementById("canv-overlay");
        for (let t = 0; t < 3; t++) {
            let n = de[t].checkPoints(Vt.x, Vt.y, 0),
                i = de[t].checkHandles(Vt.x, Vt.y, 0);
            if (n.i > -1) return void(e.style.cursor = "cell");
            if (i.i > -1) return void(e.style.cursor = "cell")
        }
        e.style.cursor = "crosshair"
    });
    let ye = -1,
        pe = -1,
        we = () => {
            null != ue[ye + 1] && null != ge[ye + 1] && ye < pe && ye < ue.length && ye < ge.length && !de[0].isAnimating && !de[1].isAnimating && !de[2].isAnimating && (de[ge[ye + 1].n].isAnimating = 1, de[ge[ye + 1].n].mPoint = ge[ye + 1].p, ge[ye + 1].b && (de[ge[ye + 1].n].mHandle = ge[ye + 1].h), qt.x = ge[ye + 1].x, qt.y = ge[ye + 1].y, gsap.to(qt, {
                x: ue[ye + 1].x,
                y: ue[ye + 1].y,
                duration: .5,
                ease: Back.easeOut.config(2)
            }).then(() => {
                de[ge[ye + 1].n].isAnimating = 0, de[ge[ye + 1].n].mPoint = -1, de[ge[ye + 1].n].mHandle = -1, ye++, me()
            }), gsap.to("#canv-overlay", {
                opacity: .07,
                duration: .25
            }), gsap.to("#canv-overlay", {
                opacity: 0,
                duration: .25,
                delay: .25
            }))
        };
    document.getElementById("canv-overlay").addEventListener("mouseup", t => {
        document.getElementById("canv-overlay").style.cursor = "crosshair";
        let e = {
            x: "n",
            y: "n"
        };
        (de[0].isReshaping || de[1].isReshaping || de[2].isReshaping) && (e.x = Vt.x, e.y = Vt.y), de[0].stopReshaping(), de[1].stopReshaping(), de[2].stopReshaping(), me(), "n" != e.x && (ue[ye] = e)
    });

    function fe(t) {
        let e = document.getElementById("bezier-bottom"),
            n = document.createElement("canvas");
        n.id = "download-canvas", n.width = 2 * e.clientWidth, n.height = 2 * e.clientHeight;
        let i = document.getElementById("canvas-container");
        i.appendChild(n);
        let o = n.getContext("2d");
        o.fillStyle = de[0].colors.secondary, t && Ot(0, 0, 2 * e.clientWidth, 2 * e.clientHeight, o), o.drawImage(e, 0, 0, 2 * e.clientWidth, 2 * e.clientHeight), s(document.getElementById("download-canvas").toDataURL("image/png"), "my-g"), me(), i.innerHTML = ""
    }
    document.getElementById("canv-overlay").addEventListener("mousemove", t => {
        Vt.x = t.layerX, Vt.y = t.layerY
    }), document.getElementById("ill").addEventListener("mouseleave", () => {
        document.getElementById("canv-overlay").style.cursor = "crosshair";
        let t = {
            x: "n",
            y: "n"
        };
        (de[0].isReshaping || de[1].isReshaping || de[2].isReshaping) && (t.x = Vt.x, t.y = Vt.y), de[0].stopReshaping(), de[1].stopReshaping(), de[2].stopReshaping(), me(), "n" != t.x && (ue[ye] = t)
    }), window.addEventListener("resize", () => {
        if (window.outerWidth > 1024 && !g) {
            ae(Qt, $t, document.getElementById("bezier-bottom").clientWidth), ae(ee, $t, document.getElementById("bezier-bottom").clientWidth), ae(ie, $t, document.getElementById("bezier-bottom").clientWidth);
            let t = document.getElementById("bezier-bottom").clientWidth / $t;
            $t = document.getElementById("bezier-bottom").clientWidth, Dt = document.getElementById("bezier-bottom").clientHeight, Ft.width = 2 * $t, Ft.height = 2 * Dt, (Nt = Ft.getContext("2d")).scale(2, 2), de[0].resize(t), de[0].pointR /= t, de[1].resize(t), de[1].pointR /= t, de[2].resize(t), de[2].pointR /= t, me()
        }
    });
    let ve = !1,
        be = () => {
            gsap.to("#b4", {
                top: "0vw",
                duration: .2
            }), gsap.to("#b5", {
                top: "0vw",
                duration: .23
            }), ve = !ve
        };

    function Ee() {
        gsap.to("#cookies", {
            bottom: "0vw",
            duration: .7
        }).then(() => {})
    }
    document.getElementById("b2").addEventListener("click", () => {
        Gt(de[0], Qt), Gt(de[1], ee), Gt(de[2], ie)
    }), document.getElementById("b3").addEventListener("click", () => {
        ve ? (be(), document.getElementById("b3").classList.remove("inactive-b"), document.getElementById("b3").classList.add("editor-button")) : (document.getElementById("b3").classList.add("inactive-b"), document.getElementById("b3").classList.remove("editor-button"), window.outerWidth > 1366 ? (gsap.to("#b4", {
            top: "-6.4583333333vw",
            duration: .1
        }), gsap.to("#b5", {
            top: "-3.2291666667vw",
            duration: .06
        })) : (gsap.to("#b4", {
            top: "-7.3958333333vw",
            duration: .1
        }), gsap.to("#b5", {
            top: "-3.6979166667vw",
            duration: .06
        })), ve = !ve)
    }), document.getElementById("b4").addEventListener("click", () => {
        fe(1), be(), document.getElementById("b3").classList.remove("inactive-b"), document.getElementById("b3").classList.add("editor-button")
    }), document.getElementById("b5").addEventListener("click", () => {
        fe(0), be(), document.getElementById("b3").classList.remove("inactive-b"), document.getElementById("b3").classList.add("editor-button")
    }), document.addEventListener("keydown", function(t) {
        !t.metaKey && !t.ctrlKey || "z" !== t.key && "KeyZ" !== t.code || null != ue[ye] && null != ge[ye] && ye > -1 && !de[0].isAnimating && !de[1].isAnimating && !de[2].isAnimating && (de[ge[ye].n].isAnimating = 1, de[ge[ye].n].mPoint = ge[ye].p, ge[ye].b && (de[ge[ye].n].mHandle = ge[ye].h), qt.x = ue[ye].x, qt.y = ue[ye].y, gsap.to(qt, {
            x: ge[ye].x,
            y: ge[ye].y,
            duration: .5,
            ease: Back.easeOut.config(2)
        }).then(() => {
            de[ge[ye].n].isAnimating = 0, de[ge[ye].n].mPoint = -1, de[ge[ye].n].mHandle = -1, ye--, me()
        }), gsap.to("#canv-overlay", {
            opacity: .07,
            duration: .25
        }), gsap.to("#canv-overlay", {
            opacity: 0,
            duration: .25,
            delay: .25
        }))
    }), document.addEventListener("keydown", function(t) {
        !t.metaKey && !t.ctrlKey || "y" !== t.key && "KeyY" !== t.code || we()
    }), document.addEventListener("keydown", function(t) {
        !t.metaKey && !t.ctrlKey || !t.shiftKey || "z" !== t.key && "KeyZ" !== t.code || we()
    }), document.getElementById("theme-button").addEventListener("mousedown", () => {
        h(r = !r), r ? wt.resize() : pt.resize()
    }), document.getElementById("cookietrig").addEventListener("mousedown", () => {
        ! function() {
            let t = 50;
            window.outerWidth > 1024 && !g && (t = 10), window.outerWidth > 1024 && g && (t = 17), gsap.to("#cookies", {
                bottom: "-" + t + "vw",
                duration: .7
            }).then(() => {})
        }(), Ie("cookieson", 1, 2)
    });
    let xe = () => {
        1 == r && (h(r), r ? wt.resize() : pt.resize())
    };

    function Ie(t, e, n) {
        var i = new Date;
        i.setTime(i.getTime() + 365 * n * 24 * 60 * 60 * 1e3);
        var o = "expires=" + i.toGMTString();
        document.cookie = t + "=" + e + ";" + o + ";path=/"
    }

    function Be(t) {
        for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
            for (var o = n[i];
                " " == o.charAt(0);) o = o.substring(1);
            if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
        }
        return ""
    }
    var Le, We;
    Le = Be("theme"), "" != (We = Be("cookieson")) ? (r = Le, xe(), We || Ee()) : (r = 0, Ie("theme", 0, 2), Ie("cookieson", 0, 2), Ee())

  },
};

</script>
