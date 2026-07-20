/* Fundemetal — interactions
   theme (system/light/dark) · magnetic buttons · reveal-on-scroll */

(function () {
  "use strict";

  /* ---------- theme toggle (3-state) ---------- */
  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");
  var icSys = document.getElementById("ic-system");
  var icSun = document.getElementById("ic-sun");
  var icMoon = document.getElementById("ic-moon");
  var order = ["system", "light", "dark"];
  var label = { system: "System", light: "Light", dark: "Dark" };

  function apply(state) {
    if (state === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", state);
    }
    icSys.style.display = state === "system" ? "" : "none";
    icSun.style.display = state === "light" ? "" : "none";
    icMoon.style.display = state === "dark" ? "" : "none";
    btn.setAttribute("title", "Theme: " + label[state]);
    btn.setAttribute("aria-label", "Theme: " + label[state]);
  }

  var saved = null;
  try { saved = localStorage.getItem("fundemetal-theme"); } catch (e) {}
  apply(order.indexOf(saved) >= 0 ? saved : "system");

  btn.addEventListener("click", function () {
    var visual = root.getAttribute("data-theme"); /* null = system */
    var idx = order.indexOf(visual === null ? "system" : visual);
    var next = order[(idx + 1) % order.length];
    apply(next);
    try { localStorage.setItem("fundemetal-theme", next); } catch (e) {}
  });

  /* ---------- magnetic buttons ---------- */
  var mags = document.querySelectorAll(".magnetic");
  var fine = window.matchMedia("(pointer:fine)").matches;
  if (fine) {
    mags.forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.22;
        var y = (e.clientY - r.top - r.height / 2) * 0.32;
        el.style.transform = "translate(" + x + "px," + y + "px)";
      });
      el.addEventListener("pointerleave", function () {
        el.style.transform = "";
      });
    });
  }

  /* ---------- reveal on scroll ---------- */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }
})();
