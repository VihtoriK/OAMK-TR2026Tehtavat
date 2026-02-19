var readline = require('readline-sync');

var sana = readline.question("Anna sana: ");

var kaanteinen_sana = sana.split('').reverse().join('');

if(sana == kaanteinen_sana) {
    console.log("Syotettu sana on palindromi!");
}
else {
    console.log("Syotettu sana ei ole palindromi!");
}


// Ohjelma ottaa yhden sanan vastan ja tarkistaa onko se palindromi

// HUOM! käyttää kirjastoa readline-sync