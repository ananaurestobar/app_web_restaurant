export async function getGroupOrders(_id) {
  const orders = [
    {id:6, name:'Javier', total: 54.00, state:{id: 3, name:'pagado'}},
    {id:5, name:'Alberto', total: 25.00, state:{id: 3, name:'pagado'}},
    {id:4, name:'Marta', total: 80.00, state:{id: 3, name:'pagado'}},
    {id:3, name:'Maria', total: 30.00, state:{id: 2, name:'entregado'}},
    {id:2, name:'Pedro', total: 50.50, state:{id: 2, name:'entregado'}},
    {id:1, name:'Juan', total: 20.50, state:{id: 1, name:'pendiente'}},
  ]

  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      if (_id === 4)
        return resolve({id: _id, date: '13/12/20222', total: 300.00, state: {id:1, name:'activo'}, orders})
      else if(_id >=1 && _id <4)
        return resolve({id: _id, date: '13/12/20222', total: 300.00, state: {id:0, name:'cerrado'}, orders})
      else
      return reject(new Error('no se pudo recuperar los datos'))     
    }, 1000)
  })
}