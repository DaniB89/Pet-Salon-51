function save(service){
    console.log(service);//this is an object
    let val = JSON.stringify(service);
    console.log(val);
    localStorage.setItem("services",val);//sending to localStorage
}