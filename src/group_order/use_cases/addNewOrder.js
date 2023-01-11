export async function addNewOrder(name) {
  const result = {id:10, name: name, total: 0.00, state:{id: 3, name:'pendiente'}}

  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      return resolve(result)
    }, 1000)
  })
}