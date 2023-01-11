export async function createGroupOrders() {
  const result =  {id: 10, date: '13/12/20222', state: {id:1, name:'activo'}}
  
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      if (Math.floor(Math.random() * 10)<6)
        return resolve(result)
      else
        return reject(new Error('no se pudo crear caja'))
    }, 1000) 
  })
}