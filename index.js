var newQ = document.getElementById("question");
var newA = document.getElementById("answer");
var newCard = document.getElementById("createCard");

newCard.addEventListener("click", setCard);

var deck = [];

function setCard() {
  var new_question = newQ.value;
  var new_answer = newA.value;

  document.getElementById("cTitle").innerHTML = new_question;
}
