window.onload = function(){
  createMenu();

  var EL_mainContainer = document.createElement("div");
  EL_mainContainer.id = "main-container";
  EL_mainContainer.classList = "container";
  document.body.append(EL_mainContainer);

  var SRC_loginContainer = document.createElement("script");
  SRC_loginContainer.src = "scripts/components/loginContainer.js";
  EL_mainContainer.append(SRC_loginContainer);

  var SRC_newsfeedContainer = document.createElement("script");
  SRC_newsfeedContainer.src = "scripts/components/newsfeedContainer.js";
  EL_mainContainer.append(SRC_newsfeedContainer);
}

window.onhashchange = function(hash){
  document.getElementById("login-container").classList = "container closed";
  document.getElementById("newsfeed-container").classList = "container closed";

  var nurl = hash.newURL;
  var hash = nurl.substring(nurl.indexOf('#'));
  switch (hash) {
    case "#login":
      document.getElementById("login-container").classList = "container open";
      break;

    case "#news":
    document.getElementById("newsfeed-container").classList = "container open";
      break;
  }
}

function createMenu(){
  var SRC_menu = document.createElement("script");
  SRC_menu.src = "scripts/components/menu.js";
  document.body.append(SRC_menu);
}

window.addEventListener("click", function(e){
  if(menuOpen && e.target.id != "menu-toggle") toggleMenu();
});

function submitLogin(){
  console.log("Submit Login");
}
