<template>
  <section class="about-de">
    <div class="about-de-l h1 w500">Über Typelab Foundry</div>
    <div class="about-de-r h4t w400">
      <p>
        Typelab Foundry ist eine unabhängige TypeFoundry, die von uns gegründet wurde -
        Friederike Haeusler und Mats Weidemann.
      </p>
      <p>
       Nachdem wir in den letzten Jahren mit großer Leichtigkeit zusammengearbeitet haben, haben wir
        beschlossen, dass es an der Zeit ist, ein Team zu bilden. Angetrieben von einer gemeinsamen Vision und Inspiration
        konzentrieren wir uns auf die Produktion hochwertiger Originalschriften mit großer technischer Sorgfalt.
        Angefangen haben wir als bildende Künstler in verschiedenen Bereichen.
        Am meisten haben wir uns jedoch bei der Gestaltung funktionaler Designs inspirieren lassen.
        Designs, was sich mit der Zeit zu einer Leidenschaft für Typografie und Schriftdesign entwickelte.
        Gestaltung.
      </p>
      <p>
        Jetzt, mit mehreren Jahren Erfahrung in der Arbeit an unterschiedlichen
        Schriften, sind wir so motiviert zu zeigen wozu wir fähig sind.
      </p>
      <div>
        Kontaktieren Sie uns unter <span class="w700">contact@TypelabFoundry.co</span>.
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutSection",
  mounted() {
    window.addEventListener("load", function() {
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
          "<span class='sl-z'>" +
          l(o) +
          "<span class='f-sup'> px2</span></span>";
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
        v = { ballR: 0.007, typeS: 0.005 };
      window.outerWidth < 1025 || d
        ? ((v.ballR *= 2.5),
          (v.typeS *= 2.5),
          (m.innerHTML = "Tap to start the game"))
        : (m.innerHTML = "Click to start the game");
      var w = Matter.Engine.create(),
        M = w.world,
        f = Matter.Events,
        p = Matter.Body;
      (Matter.Resolver._restingThresh = 0.1),
        (M.gravity.x = 0),
        (M.gravity.y = 0);
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
      f.on(w, "beforeUpdate", function(t) {
        (window.outerWidth < 1025 || d) && R(),
          W &&
            (T > 0.8 * y &&
              I.position.y < 0.8 * y &&
              (B(++E), (S = new Date().getTime() + 15e3)),
            (T = I.position.y)),
          (function(t, e) {
            (D.x += -1 * (D.x - H.x) * 0.05), D.x < t && (D.x = t);
            D.x > e && (D.x = e);
            D.y += -1 * (D.y - H.y) * 0.02;
          })(k.w, c.clientWidth - k.w),
          k.moveShape(),
          W
            ? I.position.y > 1.2 * k.y
              ? L(1)
              : new Date().getTime() > S && L(0)
            : p.setPosition(I, { x: D.x, y: 0.88 * k.y });
      });
      let E = 0;
      var S = new Date().getTime() + 15e3;
      function B(t) {
        if (t < 1e3) {
          let e = "";
          t < 10 ? (e += "00") : t < 100 && (e += "0"),
            (e += t),
            (u.innerHTML = e);
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
        render: { fillStyle: e, strokeStyle: e, lineWidth: 1 },
      })),
        Matter.World.add(M, I);
      let T = I.position.y;
      function L(t) {
        (W = !1), p.setVelocity(I, { x: 0, y: 0 }), (E = 0), (T = 0);
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
                render: { fillStyle: e, strokeStyle: e, lineWidth: 1 },
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
                  render: { fillStyle: e, strokeStyle: e, lineWidth: 1 },
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
                  render: { fillStyle: e, strokeStyle: e, lineWidth: 1 },
                }
              )),
              Matter.World.add(M, this.right);
          }
          moveShape() {
            p.setPosition(this.base, { x: D.x, y: this.y }),
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
      !(function() {
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
      let H = { x: 0.5 * g, y: 0 };
      function R(t) {
        g > 1024
          ? ((H.x = t.layerX), (H.y = t.layerY))
          : (H.x = document.getElementById("volume").value);
      }
      let D = { x: 0.5 * g, y: 0 };
      let F = (-2 * Math.PI) / 6,
        P = Math.PI / 6;
      (F =
        -(P + P * Math.random()) - 3 * P * (Math.floor(2 * Math.random()) % 2)),
        document.getElementById("world").addEventListener("mousemove", R),
        document.getElementById("world").addEventListener("mousedown", () => {
          W ||
            ((W = !0),
            (m.innerHTML = " "),
            B(0),
            (S = new Date().getTime() + 15e3),
            (F =
              -(P + P * Math.random()) -
              3 * P * (Math.floor(2 * Math.random()) % 2)),
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
            (F =
              -(P + P * Math.random()) -
              3 * P * (Math.floor(2 * Math.random()) % 2)),
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
    });
  },
};
</script>
<style></style>
