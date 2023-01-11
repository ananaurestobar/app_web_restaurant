export async function getOrder(_groupOrderId, _orderId) {
  const orderDetails = [
    {id:4, name:'Parrichi', qtty: 1, price: 10.00, total: 10.00},
    {id:3, name:'Ananau', qtty: 2, price: 13.00, total: 26.00},
    {id:2, name:'Alita BBQ limo', qtty: 1, price: 14.00, total: 14.00},
    {id:1, name:'Te Piteado Maracuya', qtty: 2, price: 5.00, total: 10.00},
  ]

  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      return resolve({
        groupOrderId: _groupOrderId,
        date: '13/12/20222',
        orderId: _orderId,
        customer: `customer_${_orderId}`,
        state:{id:1, name:'pendiente'},
        total:60.00,
        details:orderDetails})
    }, 1000)
  })
}