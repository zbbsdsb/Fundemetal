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

  /* ---------- formation filter ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var allCards = document.querySelectorAll(".card.reveal");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      allCards.forEach(function (c) {
        if (f === "all" || c.getAttribute("data-formation") === f) {
          c.classList.remove("hidden");
        } else {
          c.classList.add("hidden");
        }
      });
    });
  });

  /* ---------- stat counter (animated) ---------- */
  var statNums = document.querySelectorAll(".stat-num");
  if ("IntersectionObserver" in window && statNums.length) {
    var counted = {};
    var ioStats = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !counted[en.target.dataset.target]) {
          counted[en.target.dataset.target] = true;
          var el = en.target;
          var target = parseInt(el.dataset.target, 10);
          if (target > 0) {
            var duration = 1200, steps = 30;
            var increment = target / steps;
            var current = 0;
            var timer = setInterval(function () {
              current += increment;
              if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
              } else {
                el.textContent = Math.round(current);
              }
            }, duration / steps);
          }
          ioStats.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { ioStats.observe(el); });
  } else if (statNums.length) {
    statNums.forEach(function (el) { el.textContent = el.dataset.target; });
  }
})();
