var readline = require('readline-sync');

var luku1 = readline.question("Anna ensimmainen luku: ");
var luku2 = readline.question("Anna toinen luku: ");

if(luku1 > luku2) {
    console.log(luku1);
} 
else {
    console.log(luku2);
}

// ohjelma kysyy kahta lukua ja tulostaa suuremma lopuksi

// HUOM! käyttää kirjastoa readline-sync