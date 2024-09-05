console.log("Register");

let pets=[];//empty array

//create pet1 and pet2(name,age,gender,breed)
//object literal
let pet1={
    name:"Apache",
    age:12,
    gender:"Male",
    breed:"Pitbull"
}

let pet2={
    name:"Rose",
    age:10,
    gender:"Female",
    breed:"MinPin"
}

//push pets into the array
pets.push(pet1,pet2);

function displayNames(){
    console.log("Total Pets =" + pets.length);
    console.log(pets[0].name);
    console.log(pets[1].name);
}

displayNames();