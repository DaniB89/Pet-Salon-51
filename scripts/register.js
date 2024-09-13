console.log("Register");

let pets=[];//empty array
//create the constructor
//<------parameters (local) --->
function Pet(name,age,gender,breed,service){
    //property=paramentor
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service
}

//get the imputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputService= document.getElementById("txtService")
let inputBreed = document.getElementById("txtBreed");

function isValid(pet){
    let validation =true;
    //check if name is empty?
    if(pet.name==""){
        validation=false;
    }
    return validation;
}


function register(){
    let inputGender = document.querySelector('input[name="gender"]:checked');
    console.log(inputGender.value);

    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    //create an obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);

    if(isValid(newPet)==true){
        pets.push(newPet)//push newPet to the array
        //display on the  console the new pet
        console.log(newPet);
        //displayCards();
        displayRows();
    }else{
        alert("Fill in the information")
    }
    
}

function deletePet(petID){
    console.log("Deleting the pet")
    document.getElementById(petID).remove();//deletes from html
    pets.splice(petID,1);//removes the pet from the array
    displayRows();
}

function init(){
    console.log("Init fn");
    let scooby = new Pet("Scooby",60,"Male","Dane","grooming");
    let scrappy = new Pet("Scooby",50,"Male","Boxer","vaccines");
    pets.push(scooby,scrappy);
    // displayCards();
    displayRows();
}
window.onload=init;//it waits to render the html

//push pets into the array
pets.push();

function search(){
    //by name
    displayRows();
    //display on the console the text that the user enters on the input
    let ss=document.getElementById("textSearch").value;
    let foundPet=null;
    let id;
    console.log(ss)

    for(let i=0;i<pets.length;i++){
        if(pets[i].name.toLowerCase() == ss.toLowerCase()){
            foundPet=pets[i];
            id=i;
            break;
        }
    }
    if(foundPet){
        document.getElementById(id).classList.add("highlight");
    }else{
        document.querySelectorAll("tr").classList.remove("highlight");
    }
}