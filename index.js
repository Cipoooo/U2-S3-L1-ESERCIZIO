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
    return console.log(User1.firstName + " piu grande di"+ + User2.firstName)
   }
   else{
    return console.log(User2.firstName + "piu grande di" + User1.firstName)
   }

   }
}

const User1 = new User("gabriele","cipolloni",19,"roma")
const User2 = new User("leonardo","leonardo",25,"roma")

console.log(User.ageDifference(User1,User2))

//ESERCIZIO 2

let inputPetname = document.getElementById('petname').value
console.log(inputPetname)
let inputOwnerName = document.getElementById('ownerName').value
let inputSpecies = document.getElementById('species').value
let inputBreed = document.getElementById('breed').value


    class Pet{

        constructor(inputPetname,inputOwnerName,inputSpecies,inputBreed){
            this.petname = inputPetname;
            this.ownerName = inputOwnerName;
            this.species = inputSpecies;
            this.breed = inputBreed;
    
        }
       
        sameOwner(petToCompare){
            return this.ownerName === petToCompare.ownerName ?  `${this.ownerName} è lo stesso padrone di ${petToCompare.petname} e ${this.petname}`:  `${petToCompare.ownerName} ha un solo animale domestico`;
        }
    
    }
    

const Pet1 = new Pet(inputPetname,inputOwnerName,inputSpecies,inputBreed)
console.log(Pet1)


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
    
*const Pet1 = new Pet("choppy","cipo","cane","bastarda");
const Pet2 = new Pet("tombola", "cipo","cane","pastore tedesco");
const Pet3 = new Pet("boh","guglielmino","pesce","rosso")

console.log(Pet1.sameOwner(Pet2))
console.log(Pet1.sameOwner(Pet3))*/

