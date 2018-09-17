createElements();

var EL_composeContainer;
var EL_title;
var EL_img;
var EL_date;
var EL_author;
var EL_description;
var EL_publishButton;

function createElements(){
  EL_composeContainer = document.createElement("div");
  EL_composeContainer.id = "compose-container";
  EL_composeContainer.classList = "container closed";

  EL_title = document.createElement("input");
  EL_title.placeholder = "Title";

  EL_img = document.createElement("input");
  EL_img.placeholder = "Image";

  EL_date = document.createElement("input");
  EL_date.placeholder = "Date";

  EL_author = document.createElement("input");
  EL_author.placeholder = "Author";

  EL_description = document.createElement("input");
  EL_description.placeholder = "Description";

  EL_publishButton = document.createElement("button");
  EL_publishButton.setAttribute("onclick", "publishPost()");
  EL_publishButton.innerText = "Publish";

  buildComposeContainer();
}

function buildComposeContainer(){
  EL_composeContainer.append(EL_title);
  EL_composeContainer.append(EL_img);
  EL_composeContainer.append(EL_date);
  EL_composeContainer.append(EL_author);
  EL_composeContainer.append(EL_description);
  EL_composeContainer.append(EL_publishButton);

  document.getElementById("main-container").append(EL_composeContainer);
}

function publishPost(){
  var request = new XMLHttpRequest();
  request.onerror = function(err){console.log("Error: " + err)}
  request.open("post", "/publish", true);
  //request.setRequestHeader('CSRF-Token', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
  request.setRequestHeader('Content-Type', "Application/json");
  request.onload = function(){
    if(request.readyState === 4 && request.status === 200){
      console.log("Post Published");
    }
  }

  request.send(JSON.stringify({
    "title": EL_title.value,
    "img": EL_img.value,
    "date": EL_date.value,
    "author": EL_author.value,
    "description": EL_description.value
  }));
}
