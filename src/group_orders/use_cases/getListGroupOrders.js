export async function getListOrders() {
  const result = [
    {id: 4, date: '13/12/20222', state: {id:1, name:'activo'}}
  , {id: 3, date: '12/12/20222', state: {id:0, name:'cerrado'}}
  , {id: 2, date: '11/12/20222', state: {id:0, name:'cerrado'}}
  , {id: 1, date: '10/12/20222', state: {id:0, name:'cerrado'}}
  ]

  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      if (Math.floor(Math.random() * 10)<6)
        return resolve(result)
      else
        return reject(new Error('no se pudo recuperar los datos'))
    }, 1000)
  })
}