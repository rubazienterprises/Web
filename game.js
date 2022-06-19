document.getElementById("myDivInput").value =
  Math.floor(Math.random() * 10) + 2;

function reload() {
  reload = location.reload();
}

function makediv() {
  let divtext = "";
  let divnum = 1;
  document.getElementById("myDiv").innerText = "";
  const n = document.getElementById("myDivInput").value;
  for (let i = 0; i < n; i++) {
    divnum = i + 1;
    divtext +=
      '<div id="div' +
      divnum +
      '" class="flexbox-item-1" class="product-card" onclick="getDivId()">' +
      "ID: div" +
      divnum +
      "</div>";
  }
  divtext += "";
  document.getElementById("myDiv").innerHTML = divtext;
}
var rn = Math.random();
// var cnt = 0;
function getDivId() {
  // if (cnt < 1) {
  const mydiv = event.target.id;
  const n =
    "div" + Math.floor(rn * document.getElementById("myDivInput").value + 1);
  document.getElementById(n).style.backgroundImage = 'url("morocco-blue.png")';
  // document.getElementById(n).style.backgroundImage =    'url("animated-congratulation-image-0058.gif")';
  // alert(mydiv);
  // document.getElementById(mydiv).innerHTML += "<h1> </br> Hello World!</h1>";
  // event.target.innerHTML = `<p>  ${event.target.id} </br> Hello World!</p>`;
  // event.target.innerHTML = `<p> </br> You clicked me!</p>`;
  // cnt++;
  // }
  if (mydiv === n) {
    document.getElementById(mydiv).innerHTML =
      "<h6> </br> Congratulations!</h6>";
    document.getElementById(mydiv).style.backgroundImage =
      'url("animated-congratulation-image-0058.gif")';
    // reload();
    // alert("Congratulations!");
  } else {
    // alert("You lost!");
    // reload();
    document.getElementById(mydiv).innerHTML += "<h6> </br> You Lost!</h6>";
    if (!document.getElementById(mydiv)) {
    }
  }
}

// //onclick=alert(event.target.id)
// setTimeout(function () {
//   makediv(); //do what you need here
// }, 2000);
// // makediv();

makediv();
