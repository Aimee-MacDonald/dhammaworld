createElement();

var EL_newsfeedContainer;
var EL_newsCard;
var EL_newsTitle;
var EL_newsImg;
var EL_newsDate;
var EL_newsAuthor;
var EL_newsDescription;

function createElement(){
  EL_newsfeedContainer = document.createElement("div");
  EL_newsfeedContainer.id = "newsfeed-container";
  EL_newsfeedContainer.classList = "container closed";

  EL_newsCard = document.createElement("div");
  EL_newsCard.classList = "news-card";

  EL_newsTitle = document.createElement("p");
  EL_newsTitle.innerText = "Title";

  EL_newsImg = document.createElement("img");

  EL_newsDate = document.createElement("p");
  EL_newsDate.innerText = "Date";

  EL_newsAuthor = document.createElement("p");
  EL_newsAuthor.innerText = "Author";

  EL_newsDescription = document.createElement("p");
  EL_newsDescription.append("Description");

  buildNewsfeed();
}

function buildNewsfeed(){
  EL_newsfeedContainer.append(EL_newsCard);

  EL_newsCard.append(EL_newsTitle);
  EL_newsCard.append(EL_newsImg);
  EL_newsCard.append(EL_newsDate);
  EL_newsCard.append(EL_newsAuthor);
  EL_newsCard.append(EL_newsDescription);

  document.getElementById("main-container").append(EL_newsfeedContainer);
}
