(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  var glowA = document.querySelector(".glow-a");
  var glowB = document.querySelector(".glow-b");
  if (!glowA || !glowB) return;

  var ticking = false;

  function onMove(event) {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var x = (event.clientX / window.innerWidth - 0.5) * 24;
      var y = (event.clientY / window.innerHeight - 0.5) * 16;
      glowA.style.transform = "translateX(calc(-50% + " + x + "px)) translateY(" + y + "px)";
      glowB.style.transform = "translate(" + (-x * 0.6) + "px, " + (-y * 0.5) + "px)";
      ticking = false;
    });
  }

  window.addEventListener("pointermove", onMove, { passive: true });
})();
