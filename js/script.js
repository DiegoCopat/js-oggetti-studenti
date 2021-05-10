/* 
Descrizione:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
*/

var studente = {
    nome : "Diego", 
    cognome : "Copat",
    eta : 32
}

for (var key in studente) {
    console.log(key + ": " + studente[key]);
}

var studenti = [
    {
        nome : "Diego", 
        cognome : "Copat",
        eta : 32
    },
    {
        nome : "Gianfranco", 
        cognome : "Poletti",
        eta : 18
    },
    {
        nome : "Ciro", 
        cognome : "DeLuigi",
        eta : 44
    },
    {
        nome : "Rosa", 
        cognome : "Menegatti",
        eta : 20
    },
    {
        nome : "Silvio", 
        cognome : "Benedetti",
        eta : 22
    },
    {
        nome : "Giorgia", 
        cognome : "Depaoli",
        eta : 33
    },
    {
        nome : "Lucia", 
        cognome : "Cristoforetti",
        eta : 25
    },
    {
        nome : "Maria", 
        cognome : "Bertolini",
        eta : 21
    },
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < studenti.length; i++) {
    console.log("Nome e cognome: " + studenti[i].nome, studenti[i].cognome);
}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

var nuovoUtente = {
}


do {
    var nomeUtente = prompt("inserisci qui il nome dello studente che vuoi aggiungere"); 
} while (isNaN(nomeUtente) == false);
console.log(nomeUtente);
nuovoUtente.nome = nomeUtente;

do {
    var cognomeUtente = prompt("inserisci qui il cognome dello studente che vuoi aggiungere");
} while (isNaN(cognomeUtente) == false);
console.log(cognomeUtente);
nuovoUtente.cognome = cognomeUtente;

do {
    var etaUtente = parseInt(prompt("inserisci qui l'età dello studente che vuoi aggiungere"));
} while (isNaN(etaUtente) == true);
console.log(etaUtente);
nuovoUtente.eta = etaUtente;


studenti.push(nuovoUtente);
console.log(studenti);