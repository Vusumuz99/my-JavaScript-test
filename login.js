
function addLogin() {
  if (loginForm.username.value && loginForm.password.value) {


    var username = document.getElementById("username").value;
  document.write('<html><body><h1><center')
  document.write("welcome" + "");
  document.write(username);
  document.write('</center></h1></body></html>') 

 
  }
else

alert("please enter your Username & password");
window.Location.href = "./home.html";
} 
