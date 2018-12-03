console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
 // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
var sectionTag = document.createElement("section");
sectionTag.setAttribute("id", "middle-earth");
document.body.appendChild(sectionTag);

    lands.forEach(function(land) {
        var articleTag = document.createElement("article");
        var h1Tag = document.createElement("h1");
        h1Tag.textContent = land;
        articleTag.appendChild(h1Tag); //append <h1> land </h1> to article tag.

        var getIdMidEarth = document.getElementById("middle-earth");
        getIdMidEarth.appendChild(articleTag);


    });
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

var ulTag = document.createElement("ul");
ulTag.setAttribute("id","list-of-hobbits");
var getIdMidEarth = document.getElementById("middle-earth");
getIdMidEarth.getElementsByTagName("h1")[0].appendChild(ulTag);

    hobbits.forEach(function(hobbit) {
        var liTag = document.createElement("li");
        liTag.setAttribute("class", "hobbit");
        liTag.textContent = hobbit;
        var getListHobbits = document.getElementById("list-of-hobbits");

        getListHobbits.appendChild(liTag);

    });
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

var divTag = document.createElement("div");
divTag.setAttribute("id", "the-ring")
divTag.setAttribute("class", "magic-imbued-jewelry");
var getFrodo = document.getElementsByClassName("hobbit")[0];
getFrodo.appendChild(divTag);

//document.getElementById("the-ring").addEventListener("click", function())

}

keepItSecretKeepItSafe();



// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

var asideTag = document.createElement("aside");
asideTag.setAttribute("id", "list-of-buddies");
var getRivendell = document.getElementById("middle-earth");
getRivendell.getElementsByTagName("h1")[1].appendChild(asideTag);

    buddies.forEach(function(bff) {
        var ulTag = document.createElement("ul");
        ulTag.setAttribute("class", "bff");
        ulTag.textContent = bff;
        var getListBuddies = document.getElementById("list-of-buddies");
        getListBuddies.appendChild(ulTag);
   });

}

makeBuddies()

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
