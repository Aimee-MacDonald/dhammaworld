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
