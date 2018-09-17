createElements();

var EL_menu;
var EL_menuToggle;
var EL_menuLogin;
var EL_menuCentres;
var EL_menuNewsfeed;

function createElements(){
  EL_menu = document.createElement("div");
  EL_menu.id = "menu";

  EL_menuToggle = document.createElement("button");
  EL_menuToggle.setAttribute("onclick", "toggleMenu()");
  EL_menuToggle.id = "menu-toggle";
  EL_menuToggle.innerText = "Menu";

  EL_menuLogin = document.createElement("a");
  EL_menuLogin.href = "#login";
  EL_menuLogin.innerText = "Login";

  EL_menuNewsfeed = document.createElement("a");
  EL_menuNewsfeed.href = "#news";
  EL_menuNewsfeed.innerText = "Newsfeed";

  buildMenu();
}

function buildMenu(){
  EL_menu.append(EL_menuToggle);
  EL_menu.append(EL_menuLogin);
  EL_menu.append(EL_menuNewsfeed);

  document.body.prepend(EL_menu);
}

var menuOpen = true;
function toggleMenu(){
  if(menuOpen){
    document.getElementById("menu").style.width = 0;
    document.getElementById("menu").style.overflow = "hidden";
    document.getElementById("menu-toggle").style.position = "fixed";
    document.getElementById("menu-toggle").style.marginTop = "-10rem";
    document.getElementById("menu-toggle").style.padding = "1rem 0.5rem";
    document.getElementById("menu-toggle").style.background = "#000033";
    document.getElementById("menu-toggle").style.color = "#9999FF";
    document.getElementById("menu-toggle").style.boxShadow = "0 0 1rem 0.5rem #000033";
    document.getElementById("menu-toggle").style.border = 0;
    menuOpen = false;
  } else {
    document.getElementById("menu").style.width = "auto";
    document.getElementById("menu").style.overflow = "hidden";
    document.getElementById("menu-toggle").style.position = "relative";
    document.getElementById("menu-toggle").style.marginTop = 0;
    document.getElementById("menu-toggle").style.padding = "1.5rem 4rem";
    document.getElementById("menu-toggle").style.background = 0;
    document.getElementById("menu-toggle").style.color = "#9999FF";
    document.getElementById("menu-toggle").style.border = "0.1rem solid #9999FF";
    document.getElementById("menu-toggle").style.borderLeft = 0;
    document.getElementById("menu-toggle").style.borderRight = 0;
    menuOpen = true;
  }
}
