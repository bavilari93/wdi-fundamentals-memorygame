

console.log("User flipped " + cardOne);
console.log("User flipped " + cardFour);

var cards =[{rank:"queen",suit:"hearts",cardImage:"images/queen-of-hearts.png"}
{rank:"queen",suit:"diamonds",cardImage:"images/queen-of-diamonds.png"}
{rank:"king",suit:"hearts",cardImage:"images/queen-of-hearts.png"}
{rank:"king",suit:"diamonds",cardImage:"images/queen-of-diamonds.png"}



}]; 

var cardsInPlay[]
var checkForMatch = funcion ()

{
	if (cardsInPlay[0]===CardsInPlay[1])
 {alert ("You found a match!");}
		else { alert ("sorry, try again.");}
	}
};


var flipCard = function(flip) {
	cardsInPlay.push(cards[flip.getAttribute('data-id')].rank);
	flip.setAttribute ('src' , cards[flip.getAttribute('data-id')].cardImage);
if (cardsInPlay.length === 2){checkForMatch(flip);}

};



var createBoard = function() 
{for (var i = 0; i < cards.length; i++)
 {
 	var cardElement = document.createElement ('img');
 	cardElement.setAttribute ('src', 'images/back.png');
 	cardElement.setAttribute ('data-id', i);
 	cardElement.addEventListener ('click',flipCard);
 	document.getElementByID('game-board')appendChild(cardElement);

 	cardElement. addEventListener('click', function(){flipCard(this);});
 }};

createBoard();

  






