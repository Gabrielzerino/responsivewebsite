
let hiddenmenu = document.getElementById("hiddenmenu")
let welcome = document.getElementsByClassName("hidetomenu")[0]
let menubutton = document.getElementsByClassName("hidetomenu")[1]
let closemenu = document.getElementById("closemenu")


menubutton.onclick = function() {
    hiddenmenu.style.display = "block";
    welcome.style.display = "none";
    menubutton.style.display = "none";
    closemenu.style.display = "inline";
  }

  closemenu.onclick = function() {
    hiddenmenu.style.display = "none";
    welcome.style.display = "table";
    menubutton.style.display = "table";
    closemenu.style.display = "none";
  }

