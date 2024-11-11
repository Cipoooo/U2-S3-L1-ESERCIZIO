// ESERCIZIO 1

class User {
   constructor(firstName,lastName,age,location){

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
   }

   static ageDifference(User1,User2){
   
   if( User1.age > User2.age){
    return User1.firstName +" piu grande di " + User2.firstName
   }
   else{
    return User2.firstName + " piu grande di " + User1.firstName
   }

   }
}

const User1 = new User("gabriele","cipolloni",19,"roma")
const User2 = new User("leonardo","leonardo",25,"roma")

console.log(User.ageDifference(User1,User2))

//ESERCIZIO 2

const petname = document.getElementById("petname")
/*const inputPetname = inputName.addEventListener("input",()=>{
    console.log(inputName.value)
})*/
const ownerName = document.getElementById("ownerName")
/*const  inputOwnerName = inputOwner.addEventListener('input',()=>{
    console.log(inputOwner.value)
})*/
const species = document.getElementById("species")
/*const inputSpecies = inputS.addEventListener("input",()=>{
    console.log(inputS.value)
})*/
const breed = document.getElementById("breed")
/*const inputBreed = inputB.addEventListener("input",()=>{
    console.log(inputB.value)
})*/


class Pet{
    constructor(petname,ownerName,species,breed){
        this.petname = petname;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    sameOwner(petToCompare){
        return this.ownerName.value === petToCompare.ownerName.value ?  `${this.ownerName.value} è lo stesso padrone di ${petToCompare.petname.value} e ${this.petname}`:  `${petToCompare.ownerName} ha un solo animale domestico`;
    }
    
}
const pets = []
function updateList(){
    const petList = document.getElementById('petlist')
    petList.innerHTML = ""
    pets.forEach((pet,index)=>{
        const listItem = document.createElement('li');
        listItem.textContent =  `Nome : ${pet.petname}, Proprietario : ${pet.ownerName}, Specie : ${pet.species}, Razza : ${pet.breed} `
        petList.appendChild(listItem)
    })
}
document.getElementsByTagName('form')[0].addEventListener("submit", function(event){
    event.preventDefault();
})
document.getElementById('create').addEventListener("click",()=>{
    const Pet1 = new Pet(petname.value,ownerName.value,species.value,breed.value);
    console.log(Pet1)
    pets.push(Pet1);
    updateList();
    Pet1.sameOwner();

document.getElementsByTagName('form')[0].reset()
})


/*class Pet{

    constructor(petname,ownerName,species,breed){
        this.petname = petname;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;

    }

    sameOwner(petToCompare){
        return this.ownerName === petToCompare.ownerName ?  `${this.ownerName} è lo stesso padrone di ${petToCompare.petname} e ${this.petname}`:  `${petToCompare.ownerName} ha un solo animale domestico`;
    }
    
}
    
const Pet1 = new Pet("choppy","cipo","cane","bastarda");
const Pet2 = new Pet("tombola", "cipo","cane","pastore tedesco");
const Pet3 = new Pet("boh","guglielmino","pesce","rosso")

console.log(Pet1.sameOwner(Pet2))
console.log(Pet1.sameOwner(Pet3))*/

