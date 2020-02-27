const somethingWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Lo logramos, promesa exitosa')
        }else{
            reject('Error, promesa rechaza')
        }
    })
}


const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
          setTimeout(() => {
              resolve('TRUE')
          }, 2000);
        }else{
            const error = new Error('Error promise 2');
            reject(error)
        }
    })
}
somethingWillHappen()
.then(response =>console.log(response))
.catch(err => console.error(err))


somethingWillHappen2()
.then(response =>console.log(response))
.catch(err => console.error(err))

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response =>{
        console.log('Array of results',response)
    })
    .catch(err => {
        console.error(err)
    })
