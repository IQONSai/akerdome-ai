// Thema toepassen vóór het tekenen van de pagina (voorkomt een witte flits in donkere modus)
(function () {
  try {
    var p = localStorage.getItem("acc:theme") || "system";
    var dark = p === "dark" || (p === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) { /* geen opslag beschikbaar */ }
})();
