function Ticket(movie, matineeOrSoiree, first, price) {
  this.movie = movie;
  this.matineeOrSoiree = matineeOrSoiree;
  this.first = first;
  this.price = price;
}
function Person(name, age){
  this.name = name;
  this.age = age;
}



var batmanVsSuperman = new Ticket("Batman vs Superman", "matinee", true, 11);
var zootopia = new Ticket("Zootopia", "matinee", true, 11);
var myBigFatGreekWedding = new Ticket("My Big Fat Greek Wedding", 'matinee', true, 11);
var deadpool = new Ticket("Deadpool", 'soiree', true, 11);
var londonHasRisen = new Ticket("London has Risen", 'soiree', true, 11);
var theRevanant = new Ticket("The Revenant", 'matinee', true, 11);
var goonies = new Ticket("Goonies", 'matinee', false, 8);
var wallE = new Ticket("Wall-E", 'matinee', false, 8);
var lionKing = new Ticket("Lion King",'soiree', false, 8);
var liloAndStitch = new Ticket("Lilo and Stitch",'matinee', false, 8);
var toyStory = new Ticket("Toy Story",'matinee', false, 8);
var despicableMe = new Ticket("Despicable Me",'soiree', false, 8);
var up = new Ticket("UP",'matinee', false, 8);
var dracula = new Ticket("Dracula",'soiree', false, 8);
var evilDead = new Ticket("Evil Dead",'soiree', false, 8);
var legoMovie = new Ticket("Lego Movie",'matinee', false, 8);

var movies = [batmanVsSuperman, zootopia, myBigFatGreekWedding, deadpool, londonHasRisen, theRevanant, goonies, wallE, lionKing, liloAndStitch, toyStory, despicableMe, up, dracula, evilDead, legoMovie];
console.log(movies);
