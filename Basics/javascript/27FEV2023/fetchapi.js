//async way but without async funtion    
    fetch('http://localhost:3000/database')
    .then(res=> {
        if( res.ok ){
            res.json()
        } else {
            console.log("ERROR")
        }
    })
    .then(data=>{
        data.forEach(todo => {
            console.log(todo)
        });
    })
    

    /*
        fetch('http://localhost:3000/database')
    .then(response=>{
        return response.json()
    })
    .then(daXta=>{
        datXa.forEach(todo=>{
            console.log(todo)
        })
    })
     */