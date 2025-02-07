const user = {
    nom: "Doe",
    prenom: "John",
    address : {
        rue: "27 av NY",
        ville: "NY"
       
    }
}

for(let data in user){
    if(user[data]!==user.address){
        console.log(data+" "+user[data])
    }
    else{
        for(data in user.address){
            console.log(data+" "+user.address[data])
        }
    }
}