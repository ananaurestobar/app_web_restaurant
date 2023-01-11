import Button from '../../components/Button'
import {NavLink} from 'react-router-dom'
const {deliverOrder} = require('../use_cases/deliverOrder')
const {payOrder} = require('../use_cases/payOrder')
const {deleteOrder} = require('../use_cases/deleteOrder')

const ItemGroupOrder = ({active, order, handleDeliver, handlePayment, handleDelete}) =>{  
  
  const  activeGroupOrder = (active.id!==1)

  console.log(activeGroupOrder)

  const onHandleDeliver = async(order)=>{
    const result = await deliverOrder(order)    
    if(!result)
      alert('prueba alert!!!')
    else
      handleDeliver(order)
  }

  const onHandlePayment = async(order)=>{
    const result = await payOrder(order)    

    if(!result)
      alert('prueba alert!!!')
    else
      handlePayment(order)
  }

  const onHandleDelete = async(order) => {
    const result = await deleteOrder(order)
    
    if(!result)
      alert('prueba alert!!!')
    else
    handleDelete(order)
  }


  return (
    (<tr>            
      <td>{order.id}</td>
      <td>{order.name}</td>
      <td>{order.total}</td>
      <td>{order.state.name}</td>
      <td>        
        <button>
          <NavLink to={order.id.toString()}>VER</NavLink>
        </button>
        <Button
          onClick={()=>onHandleDeliver(order)}
          disabled={activeGroupOrder || order.state.id!==1}
        >
          entregar
        </Button>
        <Button onClick={()=>onHandlePayment(order)}
          disabled={activeGroupOrder || order.state.id!==2}
        >
          pagar
        </Button>
        <Button onClick={()=>onHandleDelete(order)}
          disabled={activeGroupOrder || order.state.id!==1}
        >
          eliminar
        </Button>
      </td>
    </tr>)           
    )
}

export default ItemGroupOrder