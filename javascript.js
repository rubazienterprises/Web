// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("list");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//to change the theme
function changeTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  //changing them of top slider
  var topheader = document.getElementById("topdiv");
  topheader.classList.toggle("dark-mode");
}

// // /////////////////
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }
// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "./Outputx.txt");
//   req.onload = function () {
//     if (req.status == 200) {
//       myCallback(req.responseText);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   };
//   req.send();
// }

// getFile(myDisplayer);

//Show Login Form
function showModalForm() {
  var modalform = document.getElementById("loginForm");
  modalform.style.display = "block";
}
function closeModalForm() {
  var modalform = document.getElementById("loginForm");
  modalform.style.display = "none";
}
// Get the modal
var modal = document.getElementById("loginForm");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Show Enquiry Form
function showEnquiryForm() {
  var enquiryform = document.getElementById("enquiryForm");
  enquiryform.style.display = "block";
}
function closeEnquiryForm() {
  var enquiryform = document.getElementById("enquiryForm");
  enquiryform.style.display = "none";
}

var chkstatus = document.getElementById("enqtype");
var chkinput = chkstatus.getElementsByTagName("input");
var chkcount = 0;
function checkEnquiryType() {
  for (let i = 0; i < chkinput.length; i++) {
    if (chkinput[i].checked == true) {
      return true;
    }
    // AddNew();
  }
  alert("Please select atlease one enquiry type!");
}

//Saving form into a db table
var db = openDatabase("EnquiryDB", "1.01", "EnquiryDB", 65553);
function AddNew() {
  var name = document.getElementById("name").value;
  db.transsaction(function (transsaction) {
    var sql = "insert into EnquiryTable (name) Value('Abdul Aziz')";
    transsaction.executeSql(
      sql,
      [name],
      function () {
        alert("New Name Added");
      },
      function () {
        alert("Error");
      }
    );
  });
}
