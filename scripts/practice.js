//JS vs jQuery

//ID
//document.getElementByID("title")
//$("title")

//Class
//document.getElementByClassName("classname")
//$(".classname")

//Tags
//document.getElementByTagName("p")
//$("p")

function clickMe(){
    $("#results").text("The button was clicked.");
    $("p:first").hide();
    $("p:last").css('background-color', 'red');
}

function register(){
    //JaveScript
    let testEntry = document.getElementById("testInput").value;
    let results = document.getElementById("results");
    results.innerHTML += `<li>${testEntry}</li>`
}

function init(){
    let h1 = document.getElementById("title");
    console.log(h1);
    let hijQuery = $("#title");
    console.log(hijQuery); 
    let p = document.getElementsByClassName("paragraph");
    console.log(p);
    let p2 = $(".paragraph");
    console.log(p2);

    let combined = $("p.paragrap#example"); 
    console.log(combined)

    $("#btn1").on("click",clickMe);

    $("#btn1").on("mouseover", function(){
        $(this).addClass("btn");
    })
    $("#btn1").on("mouseleave", function(){
        $(this).removeClass("btn");
    })

    $("#btnRegister").on("click",register);
}

window.onload = init;