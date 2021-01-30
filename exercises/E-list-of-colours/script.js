function listOfColours(colours) {
  // Write your code here...
  var listOfColours = document.createElement("SELECT");

  var listOfColours = document.getElementById("red").selected = true;
  var listOfColours = document.getElementById("blue").selected = true;
  var listOfColours = document.getElementById("green").selected = true;
  var listOfColours = document.getElementById("yellow").selected = true;
  var listOfColours = document.getElementById("pink").selected = true;
  var listOfColours = document.getElementById("brown").selected = true;

  var listOfColours = document.createElement("p");
  element.addEventListener("click", listOfColours);
  function listOfColours() {
    alert("p");
  }

  var bkgd = document.querySelector(".bkgd");
  var colours = ["red", "blue", "green", "yellow"];
  if (colours.length) {
    setColour(colours[0]);
    setTimeout(function () {
      listOfColours(colours.slice(1));
    }, 200);
  }
}
function setColour(green) {
  bkgd.style.background = green;
}
/* my first attempt of answer below ...
for (i = 0; i < colours.length; i++) {
  setInterval(change, 2000);
  function change() {
    bkgd.style.background = green;
  }
}
}*/

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
