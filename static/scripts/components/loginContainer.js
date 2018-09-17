createElements();

var EL_loginContainer;
var EL_loginForm;
var EL_emailLabel;

var EL_emailInput;
var EL_passwordLabel;
var EL_passwordInput;
var EL_confirmPassword;
var EL_confirmPasswordLabel;
var EL_confirmPasswordInput;
var EL_loginButtons;
var EL_loginButton;
var EL_registerButton;

function createElements(){
  EL_loginContainer = document.createElement("div");
  EL_loginContainer.id = "login-container";
  EL_loginContainer.classList = "container open"

  EL_loginForm = document.createElement("div");
  EL_loginForm.id = "login-form";

  EL_emailLabel = document.createElement("label");
  EL_emailLabel.innerText = "Email:";

  EL_emailInput = document.createElement("input");
  EL_emailInput.type = "email";
  EL_emailInput.placeholder = "example@email.com";
  EL_emailInput.id = "email-input";

  EL_passwordLabel = document.createElement("label");
  EL_passwordLabel.innerText = "Password:";

  EL_passwordInput = document.createElement("input");
  EL_passwordInput.type = "password";
  EL_passwordInput.placeholder = "password";
  EL_passwordInput.id = "password-input";

  EL_confirmPassword = document.createElement("div");
  EL_confirmPassword.id = "confirm-password";

  EL_confirmPasswordLabel = document.createElement("label");
  EL_confirmPasswordLabel.id = "confirm-password-label";
  EL_confirmPasswordLabel.innerText = "Confirm Password:";

  EL_confirmPasswordInput = document.createElement("input");
  EL_confirmPasswordInput.id = "confirm-password-input";
  EL_confirmPasswordInput.type = "password";
  EL_confirmPasswordInput.placeholder = "password";

  EL_loginButtons = document.createElement("div");
  EL_loginButtons.id = "login-buttons";

  EL_loginButton = document.createElement("button");
  EL_loginButton.id = "login-button";
  EL_loginButton.setAttribute("onclick", "submitLogin()");
  EL_loginButton.innerText = "Submit";

  EL_registerButton = document.createElement("button");
  EL_registerButton.id = "register-button";
  EL_registerButton.setAttribute("onclick", "toggleLoginRegister()");
  EL_registerButton.innerText = "Register";

  buildLogin();
}

function buildLogin(){
  EL_loginForm.append(EL_emailLabel);
  EL_loginForm.append(EL_emailInput);
  EL_loginForm.append(EL_passwordLabel);
  EL_loginForm.append(EL_passwordInput);
  EL_loginForm.append(EL_confirmPassword);
  EL_confirmPassword.append(EL_confirmPasswordLabel);
  EL_confirmPassword.append(EL_confirmPasswordInput);
  EL_loginForm.append(EL_loginButtons);
  EL_loginButtons.append(EL_loginButton);
  EL_loginButtons.append(EL_registerButton);

  EL_loginContainer.append(EL_loginForm);

  document.getElementById("main-container").append(EL_loginContainer);
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
