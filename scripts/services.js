//constructor
function Service(descripion,price){
	this.descripion=descripion
	this.price=price
}
function isValid(){
	
}
//Remember to add jQuery to the html
function register(){
	let inputDescription = $("#txtDescription").val();
	let inputPrice = $("#txtPrice").val();
	//create the new object
	let newService = new Service(inputDescription,inputPrice);
	save(newService);//this function is under storeManager
	$("input").val(""); //clear the input
}

function init(){

}

window.onload=init