
function addLogin() {



  var username = document.getElementById("txt").value;
  var password = document.getElementById("val").value;

  if (username == "vusi" && password == "bmw") {
    window.location.href = "./home.html";

    document.write('<html><body><h1><center')
    document.write("welcome" + "");
    document.write(username);
    document.write(password);
    document.write('</center></h1></body></html>');


  }
  else {

    alert("please enter your Username & password");

  }

}
