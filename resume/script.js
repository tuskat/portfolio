function setLang(lang) {
  document.body.classList.remove('lang-en', 'lang-fr');
  document.body.classList.add('lang-' + lang);
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.documentElement.lang = lang;
}

function setMode(mode) {
  document.body.classList.toggle('light', mode === 'light');
  document.getElementById('btn-dark').classList.toggle('active', mode === 'dark');
  document.getElementById('btn-light').classList.toggle('active', mode === 'light');
}

setLang('en');
