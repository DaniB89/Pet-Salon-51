function displayCards(){
    const Cards = document.getElementById("petCards");
    Cards.innerHTML="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        console.log(pet)
        Cards.innerHTML+=`</p>
        <div class="pet">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
        </div>
        `
    }
}


function displayRows(){
    //get the tbody
    const Table = document.getElementById("petRows")
    //clear the tbody (for)
    let row="";
            //Row.innerHMTL='
            // <tr>

            // </tr>
            //`
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        row+=`
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td><button class="btn btn-sm btn-danger"  onclick="deletePet(${i})"> Delete </button></td>
            </tr>
            `;
    }
    Table.innerHTML=row;
    document.getElementById("totalPets").innerHTML=pets.length;
        //create the template row

}

