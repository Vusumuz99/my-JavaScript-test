var username = [];
var password = [];


function addLogin() {
  var username = document.getElementById("txt").value;
  var password = document.getElementById("val").value;

  if (username == "user@gmail.com" && password == "mypassword") {
    window.location.href = "home.html";
  }
  else {
    alert("please enter your Username & password"); 

  }
}