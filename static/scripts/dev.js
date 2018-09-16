window.onload = function(){
  var SRC_menu = document.createElement("script");
  SRC_menu.src = "scripts/components/menu.js";
  document.body.append(SRC_menu);
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

window.addEventListener("click", function(e){
  if(menuOpen && e.target.id != "menu-toggle") toggleMenu();
});

function submitLogin(){
  console.log("Submit Login");
}

function submitRegister(){
  var em = document.getElementById("email-input").value;
  var pw = document.getElementById("password-input").value;
  var cpw = document.getElementById("confirm-password-input").value;

  if(pw === cpw){
    var request = new XMLHttpRequest();
    request.onerror = function(err){console.log("Error: " + err)}
    request.open("post", "/auth/register", true);
    //request.setRequestHeader('CSRF-Token', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
    request.setRequestHeader('Content-Type', "Application/json");
    request.onload = function(){
      if(request.readyState === 4){
        switch(request.status){
          case 200:
            console.log("User Registered");
            break;

          case 422:
            console.log("User already exists");
            break;
        }
      }
    }

    request.send(JSON.stringify({
      "email": em,
      "password": pw
    }));
  } else {
    console.log("Password and Password Confirmation do not Match");
  }
}
