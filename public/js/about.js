function mysubmit(){
    var firstName = document.getElementById('fname').value
    var lastName = document.getElementById('lname').value
    //console.log(firstName, lastName);

    fetch('/validateUser',{
        method:"POST",
        headers: new Headers({'content-type':'applicaton/json'}),
        body:JSON.stringify({firstName, lastName}),

    }).then(res=>res.json()).then(data=>console.log(data))
}