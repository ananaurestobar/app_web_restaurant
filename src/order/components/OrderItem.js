
const OrderItem = ({orderItem, handleDelete, handleAdd, handleSubtract}) =>{
  
  return (
    (<tr>            
      <td>{orderItem.id}</td>
      <td>{orderItem.name}</td>
      <td>{orderItem.qtty}</td>
      <td>{orderItem.price}</td>
      <td>{orderItem.total}</td>
      <td>        
        <button onClick={()=>handleDelete(orderItem)}> X </button>
        <button onClick={()=>handleSubtract(orderItem)}> - </button>
        <button onClick={()=>handleAdd(orderItem)}> + </button>
      </td>
    </tr>)           
    )
}

export default OrderItem