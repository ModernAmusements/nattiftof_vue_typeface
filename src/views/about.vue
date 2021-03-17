<template>
  <body style="overflow-x: hidden">
    <GameHolder></GameHolder>
    <SpaceBoxOneAbout></SpaceBoxOneAbout>
    <AboutSection></AboutSection>
    <SpaceBoxTwoAbout></SpaceBoxTwoAbout>
    <Cookies></Cookies>
  </body>
</template>
<script>
import GameHolder from "./components/GameHolder";
import SpaceBoxOneAbout from "./components/SpaceBoxOneAbout";
import AboutSection from "./components/AboutSection";
import SpaceBoxTwoAbout from "./components/SpaceBoxTwoAbout";
import Cookies from "./components/Cookies";

export default {
  name: "About",

  components: {
    SpaceBoxOneAbout,
    AboutSection,
    GameHolder,
    SpaceBoxTwoAbout,
    Cookies,
  },
  mounted() {

      let t = 0,
        e = "#000000";
      function i() {
        gsap
          .to("#cookies", {
            bottom: "0vw",
            duration: 0.7,
          })
          .then(() => {});
      }
      document.getElementById("cookietrig").addEventListener("mousedown", () => {
        !(function () {
          let t = 50;
          window.outerWidth > 1024 && (t = 10),
            window.outerWidth > 1024 && d && (t = 17),
            gsap
              .to("#cookies", {
                bottom: "-" + t + "vw",
                duration: 0.7,
              })
              .then(() => {});
        })(),
          o("cookieson", 1, 2);
      });
      let n = () => {
        1 == t &&
          (function (t) {
            1 == t
              ? (document.documentElement.setAttribute("data-theme", "dark"),
                sessionStorage.setItem("theme", "dark"),
                (e = "#FFFFFF"))
              : (document.documentElement.setAttribute("data-theme", "light"),
                sessionStorage.setItem("theme", "light"));
          })(1);
      };
      function o(t, e, i) {
        var n = new Date();
        n.setTime(n.getTime() + 365 * i * 24 * 60 * 60 * 1e3);
        var o = "expires=" + n.toGMTString();
        document.cookie = t + "=" + e + ";" + o + ";path=/";
      }
      function s(t) {
        for (
          var e = t + "=", i = decodeURIComponent(document.cookie).split(";"), n = 0;
          n < i.length;
          n++
        ) {
          for (var o = i[n]; " " == o.charAt(0); ) o = o.substring(1);
          if (0 == o.indexOf(e)) return o.substring(e.length, o.length);
        }
        return "";
      }
      var r, a;
      (r = s("theme")),
        (a = s("cookieson")),
        // console.log(r, a),
        "" != a
          ? ((t = r), n(), a || i())
          : (o("theme", 0, 2), o("cookieson", 0, 2), i());
      let d = (function () {
          try {
            return document.createEvent("TouchEvent"), !0;
          } catch (t) {
            return !1;
          }
        })(),
        l = (t) => t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        h = () => {
          let t = document.getElementsByClassName("main-space-box");
          for (let e = 0; e < t.length; e++) {
            let i = t[e].offsetWidth,
              n = t[e].offsetHeight,
              o = Math.floor(i * n);
            t[e].innerHTML =
              "<span class='sl-z'>" + l(o) + "<span class='f-sup'> px2</span></span>";
          }
        };
      h(),
        document.getElementById("navn").addEventListener("mouseenter", () => {
          window.outerWidth > 1024 &&
            !d &&
            document.getElementById("navh").classList.add("nav-hovered");
        }),
        document.getElementById("navn").addEventListener("mouseleave", () => {
          window.outerWidth > 1024 &&
            !d &&
            document.getElementById("navh").classList.remove("nav-hovered");
        });
      var c = document.getElementById("world");
      let m = document.getElementById("gameguide"),
        u = document.getElementById("gamescore"),
        y = c.clientHeight,
        g = c.clientWidth,
        v = {
          ballR: 0.007,
          typeS: 0.005,
        };
      window.outerWidth < 1025 || d
        ? ((v.ballR *= 2.5), (v.typeS *= 2.5), (m.innerHTML = "Tap to start the game"))
        : (m.innerHTML = "Click to start the game");
      var w = Matter.Engine.create(),
        M = w.world,
        f = Matter.Events,
        p = Matter.Body;
      (Matter.Resolver._restingThresh = 0.1), (M.gravity.x = 0), (M.gravity.y = 0);
      var x = Matter.Render.create({
        canvas: c,
        engine: w,
        options: {
          width: g,
          height: y,
          background: "transparent",
          wireframes: !1,
          showAngleIndicator: !1,
        },
      });
      f.on(w, "beforeUpdate", function (t) {
        (window.outerWidth < 1025 || d) && R(),
          W &&
            (T > 0.8 * y &&
              I.position.y < 0.8 * y &&
              (B(++E), (S = new Date().getTime() + 15e3)),
            (T = I.position.y)),
          (function (t, e) {
            (D.x += -1 * (D.x - H.x) * 0.05), D.x < t && (D.x = t);
            D.x > e && (D.x = e);
            D.y += -1 * (D.y - H.y) * 0.02;
          })(k.w, c.clientWidth - k.w),
          k.moveShape(),
          W
            ? I.position.y > 1.2 * k.y
              ? L(1)
              : new Date().getTime() > S && L(0)
            : p.setPosition(I, {
                x: D.x,
                y: 0.88 * k.y,
              });
      });
      let E = 0;
      var S = new Date().getTime() + 15e3;
      function B(t) {
        if (t < 1e3) {
          let e = "";
          t < 10 ? (e += "00") : t < 100 && (e += "0"), (e += t), (u.innerHTML = e);
        } else u.innerHTML = "WON";
      }
      let W = !1;
      var I;
      (I = Matter.Bodies.circle(0, 0, g * v.ballR, {
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: 1 / 0,
        restitution: 1,
        render: {
          fillStyle: e,
          strokeStyle: e,
          lineWidth: 1,
        },
      })),
        Matter.World.add(M, I);
      let T = I.position.y;
      function L(t) {
        (W = !1),
          p.setVelocity(I, {
            x: 0,
            y: 0,
          }),
          (E = 0),
          (T = 0);
        let e = "Click";
        (window.outerWidth < 1025 || d) && (e = "Touch"),
          (m.innerHTML = t
            ? "You've lost it! " + e + " to get a new ball."
            : "You're out of time! " + e + " to start a new game.");
      }
      let k = new (class {
          constructor(t, e, i) {
            (this.s = t),
              (this.x = e),
              (this.y = i),
              this.createShape(),
              (this.w = 8 * t);
          }
          createShape() {
            (this.base = Matter.Bodies.rectangle(
              this.x,
              this.y,
              14 * this.s,
              2 * this.s,
              {
                isStatic: !0,
                render: {
                  fillStyle: e,
                  strokeStyle: e,
                  lineWidth: 1,
                },
              }
            )),
              Matter.World.add(M, this.base),
              (this.left = Matter.Bodies.rectangle(
                this.x - 7 * this.s,
                this.y - this.s,
                2 * this.s,
                4 * this.s,
                {
                  isStatic: !0,
                  render: {
                    fillStyle: e,
                    strokeStyle: e,
                    lineWidth: 1,
                  },
                }
              )),
              Matter.World.add(M, this.left),
              (this.right = Matter.Bodies.rectangle(
                this.x + 7 * this.s,
                this.y - this.s,
                2 * this.s,
                4 * this.s,
                {
                  isStatic: !0,
                  render: {
                    fillStyle: e,
                    strokeStyle: e,
                    lineWidth: 1,
                  },
                }
              )),
              Matter.World.add(M, this.right);
          }
          moveShape() {
            p.setPosition(this.base, {
              x: D.x,
              y: this.y,
            }),
              p.setPosition(this.left, {
                x: D.x - 7 * this.s,
                y: this.y - this.s,
              }),
              p.setPosition(this.right, {
                x: D.x + 7 * this.s,
                y: this.y - this.s,
              });
          }
        })(v.typeS * g, 0.5 * g, 0.9 * y),
        b = [];
      !(function () {
        (b[0] = Matter.Bodies.rectangle(0.5 * g, -10, g, 10, {
          restitution: 0.4,
          density: 1,
          isStatic: !0,
        })),
          (b[1] = Matter.Bodies.rectangle(-10, 0.5 * y, 10, y, {
            restitution: 0.4,
            density: 1,
            isStatic: !0,
          })),
          (b[2] = Matter.Bodies.rectangle(g + 10, 0.5 * y, 10, y, {
            restitution: 0.4,
            density: 1,
            isStatic: !0,
          }));
        for (let t = 0; t < 3; t++) Matter.World.add(M, b[t]);
      })(),
        Matter.Engine.run(w),
        Matter.Render.run(x);
      let H = {
        x: 0.5 * g,
        y: 0,
      };
      function R(t) {
        g > 1024
          ? ((H.x = t.layerX), (H.y = t.layerY))
          : (H.x = document.getElementById("volume").value);
      }
      let D = {
        x: 0.5 * g,
        y: 0,
      };
      let F = (-2 * Math.PI) / 6,
        P = Math.PI / 6;
      (F = -(P + P * Math.random()) - 3 * P * (Math.floor(2 * Math.random()) % 2)),
        document.getElementById("world").addEventListener("mousemove", R),
        document.getElementById("world").addEventListener("mousedown", () => {
          W ||
            ((W = !0),
            (m.innerHTML = " "),
            B(0),
            (S = new Date().getTime() + 15e3),
            (F = -(P + P * Math.random()) - 3 * P * (Math.floor(2 * Math.random()) % 2)),
            p.setVelocity(I, {
              x: Math.cos(F) * g * v.typeS,
              y: Math.sin(F) * g * v.typeS,
            }));
        }),
        document.getElementById("world").addEventListener("touchstart", () => {
          W ||
            ((W = !0),
            (m.innerHTML = " "),
            B(0),
            (S = new Date().getTime() + 15e3),
            (F = -(P + P * Math.random()) - 3 * P * (Math.floor(2 * Math.random()) % 2)),
            p.setVelocity(I, {
              x: Math.cos(F) * g * v.typeS,
              y: Math.sin(F) * g * v.typeS,
            }));
        }),
        (window.outerWidth < 1025 || d) &&
          ((document.getElementById("volume").max = g),
          (document.getElementById("volume").value = 0.5 * g)),
        window.addEventListener("resize", () => {
          h(),
            (y = c.clientHeight),
            (g = c.clientWidth),
            (window.outerWidth < 1025 || d) &&
              (document.getElementById("volume").max = g),
            (x.options.width = g),
            (x.options.height = y);
        });
  
  },
};
</script>
