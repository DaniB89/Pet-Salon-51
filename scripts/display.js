function displayCards(){
    const CARDS = document.getElementById("petCards");
    CARDS.innerHTML="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        console.log(pet)
        CARDS.innerHTML+=`
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
    const Table = document.getElementById("petRows");
    //clear the tbody (for)
    let row="";
            //Row.innerHMTL='
            // <tr>

            // </tr>
            //`
    //travel the array (for)
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        //create the template row
        row+=`
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td> <button class="btn btn-sm btn-danger"  onclick="deletePet(${i})"> Delete </button></td>
            </tr>
            `;
    }
    Table.innerHTML=row;
    document.getElementById("totalPets").innerHTML=pets.length;
        //create the template row

}

//*** on the register.js replace the displayCards() by displayRows() */