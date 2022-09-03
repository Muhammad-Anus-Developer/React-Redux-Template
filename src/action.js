export const addTodo = () => (dispach)=>{

    let url= "https://reactnative.dev/movies.json"
fetch(url)
.then((data)=>{
  data.json()
  .then((dataJson)=>{
   
    return dispach({
            type: "ADD_TODO",
            data: dataJson,
    })

  }) 
})
.catch(err =>{
  console.error(err)
})

}

 