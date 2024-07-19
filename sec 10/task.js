function getLanguage(language) {
  console.log(language);
  localStorage.setItem("language", language);

  getLangValue();
}

function getLangValue() {
  var lang = localStorage.getItem("language");

  lang
    ? (document.getElementById("lan").innerHTML = language)
    : (document.getElementById("lan").innerHTML = "no language");
}

function removeLang() {
  localStorage.clear();
}
