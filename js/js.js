function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}

// Au changement du select
document.getElementById("langSwitcher").addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Par défaut
setLanguage("ar");