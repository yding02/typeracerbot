var GLOBAL_CLASS = ".AbAgeRGb";

function loadWords() {
  var wrapper = document.querySelector(GLOBAL_CLASS);
  var c = wrapper.children;
  var letters = "";
  for (var i = 0; i < c.length; i++) {
    letters += c[i].innerHTML;
  }
  return letters;
}

var allChars = loadWords();
var counter = 0;
function typeNextChar(char) {
  var item = document.querySelector(".txtInput");
  item.value += char;
}

document.onkeypress = function() {
  if (allChars[counter]) {
    typeNextChar(allChars[counter]);
    counter += 1;
  }

