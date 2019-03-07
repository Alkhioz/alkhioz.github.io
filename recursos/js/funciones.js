function abrir_menu() {
  
  var x = document.getElementById("mybarra");
  if (x.className === "barra") {
    x.className += " responsive";
  } else {
    x.className = "barra";
  }
}
