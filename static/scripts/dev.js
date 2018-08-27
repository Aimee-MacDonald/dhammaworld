var menuOpen = true;
toggleMenu();

var mainStates = ["login", "centres", "newsfeed", "admin"];
var mainState = 1;

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

function menuLogin(){
  mainState = 0;
  resetState();
}

function menuCentres(){
  mainState = 1;
  resetState();
}

function menuNewsfeed(){
  mainState = 2;
  resetState();
}

function menuAdmin(){
  mainState = 3;
  resetState();
}

function resetState(){
  document.getElementById("login-container").classList = "container closed";
  document.getElementById("centres-container").classList = "container closed";
  document.getElementById("newsfeed-container").classList = "container closed";
  document.getElementById("admin-container").classList = "container closed";

  switch (mainState) {
    case 0:
      document.getElementById("login-container").classList = "container open";
      break;

    case 1:
      document.getElementById("centres-container").classList = "container open";
      break;

    case 2:
      document.getElementById("newsfeed-container").classList = "container open";
      break;

    case 3:
      document.getElementById("admin-container").classList = "container open";
      break;

    default:
      mainState = 1;
      resetState();
  }
}

var registrationFlag = false;
function toggleLoginRegister(){
  registrationFlag = !registrationFlag;
  var loginButton = document.getElementById("login-button");
  var registerButton = document.getElementById("register-button");
  var loginClip = loginButton.getBoundingClientRect();
  var registerClip = registerButton.getBoundingClientRect();

  if(registrationFlag){
    loginButton.style.order = 1;
    registerButton.style.order = -1;
    document.getElementById("confirm-password").style.height = "auto";
    loginButton.setAttribute("onclick", "toggleLoginRegister()");
    registerButton.setAttribute("onclick", "submitRegister()");
  } else {
    loginButton.style.order = -1;
    registerButton.style.order = 1;
    document.getElementById("confirm-password").style.height = "0";
    loginButton.setAttribute("onclick", "submitLogin()");
    registerButton.setAttribute("onclick", "toggleLoginRegister()");
  }

  var loginClip2 = loginButton.getBoundingClientRect();
  var registerClip2 = registerButton.getBoundingClientRect();
  var loginDelta = loginClip.top - loginClip2.top;
  var registerDelta = registerClip.top - registerClip2.top;

  loginButton.animate([
    {transform: 'translateY(' + loginDelta + 'px)'},
    {transform: 'translateY(0px)'}
  ], {
    duration: 500,
    iterations: 1,
    fill: "forwards"
  });

  registerButton.animate([
    {transform: 'translateY(' + registerDelta + 'px)'},
    {transform: 'translateY(0px)'}
  ], {
    duration: 500,
    iterations: 1,
    fill: "forwards"
  });
}

function submitLogin(){
  console.log("Submit Login");
}

function submitRegister(){
  console.log("Submit Register");
}
