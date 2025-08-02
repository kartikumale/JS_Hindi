//  Primitive

//  7 types : String , Number , Boolean , Null , undefined , Symbol , BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1213')
const anotherId= Symbol('123')

console.log(id === anotherId);

const bigNumber = 3423432123213123n





// Reference  (Non Primitive)

// Array, Objects , Functions 

const heros = ["naagraj", "doga", "Raju" ," vikram"];

let myObj = {
    name : "kartik",
    age: 22,
}

const myFunction = function(){

    console.log("Hello world");
    
}

console.log( typeof outsideTemp);


// ++++++++++++----Memory------+++++++++++++++++++++++++++++++++++

//  Stack(Primitive)----- stack ke andar app kuch chiz lenge uski aapko copy hi milngi...
     
// Heap (Non- Primitive)---- haep ke another aapk kuch bhi value rakhte ho aapko uska reference milta hai....change or update aap original value me hi karte hai

                                                                                                                                      
let myYoutubename= "Kartikumale@gmail.com"

let anothername = myYoutubename
anothername = "ayushphotbhare"

console.log(myYoutubename);
console.log(anothername);

let userOne = { 
    email : "usergoogle@gmail.com",
   upi : "user@ybl"


}

let userTwo = userOne

userTwo.email = "Kartikumale.com"

console.log(userOne.email);
console.log(userTwo.email);



