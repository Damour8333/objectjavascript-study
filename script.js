// let house ={
//     type:'basque',
//     color:'red',
//     doors:5,
//     airConditionner :true
// }
// //ajouter une nouvelle propriété 
// house.terrain =125 ;
// house.type = 'landais';
// console.log(house);
// console.log(user['color']);





// // Déclarer un objet en utilisant une fonction avec les mots « new » et « this »
//     let user = {
//      firstName: 'John',
//      lastName: 'DOE',
//      age: 36,
//      email: 'j.doe@email.com',
//      phoneNumbers: ['0660504030', '0123456789'],

// }

// for (property  in user) {
//     console.log(property);
//     }



// function user (firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.sayHello  =function(){
//         return 'Hello' +this.firstName+ '' +this.lastName
//     }
// }

// const camion = {
//      type: 'BMW',
//      color: 'bleu',
//      doors: 5,
//      airConditioner: true
//      }
//      camion.type = "truckstory";
//      camion.color = "blue";
//      camion.doors = 5;
//      console.log(camion);


//      function voiture(type,color,doors,airConditioner){
//         this.type = type;
//         this.color = color;
//         this.doors = doors;
//         this.airConditioner= airConditioner;
//      }

//      let voiture1 = new voiture ("Renault","rouge",3,false);
//      let voiture2 = new voiture ("Volvo","vert",2,true);

// console.log(voiture1); 
// console.log(voiture2);

// //différence entre array et object

// const carInObject ={
//     type: 'BMW',
//     doors:3,
//     color:"blue"
// }

// const carInArray =['BMW',3,'blue'];
// console.log(carInObject.doors);
// console.log(carInArray[2]);

// Il n'est pas possible de connaître le nombre d'éléments présents dans un Object() sans le transformer en
// Array().


// const Baudelaire ={
//     age :47,
//     prenom:"Charles",
//     nom:"Baudelaire",
//     oeuvres : ["les fleurs du mal","petits poémes en prose"]
// }

const Hugo = {
    age: 52,
    prenom: "Victor",
    nom: "Hugo",
    oeuvres: ["le dernier jour d'un comndamné a mort", "les misérables", "Notre Dame de Paris"]
}
let propertyLastNameExist = Hugo.hasOwnProperty('oeuvres')
if (propertyLastNameExist) {
    console.log(Hugo['oeuvres']) // DOE
}

//console.log(Hugo,Baudelaire);

// const ecrivainsFrançais =[Hugo,Baudelaire];
// console.log(Object.entries(ecrivainsFrançais));//keys values entries


// let user = {
//     firstName: 'John',
//     lastName: 'DOE',
//     age: 36,
//     email: 'j.doe@email.com',
//     phoneNumbers: ['0660504030', '0123456789'],
//     }


const car = {
    type: 'BMW',
    color: 'blue',
    doors: 5,
    airConditioner: true
}

const arrayCarsKeys = [car];
const arrayCarsValues = [car];
console.log(Object.keys(arrayCarsKeys))
console.log(Object.values(arrayCarsValues))


// destructuration d'un objet

// L'objet "personne" a des propriétés nom, age et ville
let personne = {
    nom: "Thomas",
    age: 35,
    ville: "Paris"
};

// Avec les méthodes classiques, il faut déclarer une variable et lui assigner la propriété de l'objet séparément à chaque fois.
// let nom = personne.nom;
// 	let age = personne.age;
// 	let adresse = personne.ville;

// Avec la déstructuration, il suffit d'une seule ligne
// Définition des variables nom, age et ville, que l'on renomme en adresse, pour leur appliquer les valeurs des propriétés du même nom de l'objet personne
let { nom, age, ville } = personne;

console.log("nom : ", nom, " age : ", age, " adresse : ", ville);
// Affichera nom : Thomas age : 35 adresse : Paris

// travail perso
let peintre = {
    Nom: 'Renoir',
    prenom: 'pierre-Auguste',
    Age: 70,
    oeuvres: ['le moulin de la galette', 'jean renoir enfant']
}

let { Nom, prenom, Age, oeuvres } = peintre;
console.log("nom :", Nom, " prenom:", prenom, "age :", Age, "oeuvres:", oeuvres);

// destructuration d'un objet
// travail perso 
let albums = ["nevermind", "incesticide", 'in utero'];
let [album1, album2, album3] = albums;
console.log(album1, album2, album3);


// Le tableau
let langages = ["JavaScript", "Java", "PHP", "Go"];

// Avec les méthodes classiques, il faut déclarer une variable et lui assigner la valeur de chaque élément du tableau séparément.
// let langage1 = langages[0];
// let langage2 = langages[1];
// let langage4 = langages[3];

// Avec la déstructuration, il suffit d'une seule ligne.
let [langage1, langage2, langage3, langage4] = langages;


// On peut aussi procéder comme suit
// let [langage1, langage2, langage3, langage4] = ["JavaScript", "Java", "PHP", "Go"];

console.log("langage1 : ", langage1, " langage2 : ", langage2, " langage3 : ", langage3, " langage4 : ", langage4);
// Affichera langage1 : JavaScript, langage2 : Java, langage3 : PHP, langage4 : Go



// l'operateur spread

let maDate = [1985, 12, 10];
new Date(...maDate, 50);

// let mesLangages = ["JavaScript", "Java"];
// let lang = ["PHP", "Go", ...mesLangages];
// console.log(lang);

let mesLangages = ["JavaScript", "Java", "PHP", "Go"];
// let premierMot = mesLangages[0];

// console.log(premierMot);
// let restant = mesLangages.slice(1);
// console.log(restant);

let [premierMot, ...restant] = mesLangages;
console.log(mesLangages);
// XI. Exercice : Appliquez la notion

// let myNumber = [1, 2, 3, 4, 5, 6];
// // destructuration
// let [] = myNumber;
// console.log(myNumber);
// //spread/
// let myArray = [1, 2, 3, 4, 5, 6];
// new Array(...myArray, 56);
// console.log(new Array);
// solution
console.log(myArray.splice(1));
let myArray = [1, 2, 3, 4, 5, 6];
const [, myNumber] = myArray;
console.log(myNumber) // 2
myArray.splice(0, 4);
console.log(myArray) // [5, 6]
myArray = [myNumber, ...myArray];
console.log(myArray) // [2, 5, 6]








