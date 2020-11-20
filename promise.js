const getUsers = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["data"])
    }, 2000);
});

getUsers()
    .then((data) =>{
        console.log("j'ai resolve !", data)
    })
    .catch((error) =>{
        console.log("j'ai reject", error)
    })