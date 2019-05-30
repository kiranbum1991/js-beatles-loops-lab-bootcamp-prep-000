// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) {
  var combo = [];
  for (let i = 0; i < musicians.length; i++) {
    for (let j = 0; j < instruments.length; j++) {
      if (i === j)
  combo.push(musicians[i] + " plays " + instruments[j]);
  }
 }
 return combo;
}

function johnLennonFacts (array) {
  var factsNow = [];
  for (let i = 0; i < array.length; i++) {
  factsNow.push(array[i] + "!!!");
}
return factsNow;
}

function iLoveTheBeatles (number) {
var timesLoved = [];
var i = 0;
do {
    number++;
    timesLoved.push("I love the Beatles!");
} while (number !== 0);
return timesLoved;
}

