import {NavLink} from 'react-router-dom'
import Button from '../../components/Button'
const {deleteGroupOrder} = require('../use_cases/deleteGroupOrder')
const {closeGroupOrder} = require('../use_cases/closeGroupOrder')

const ItemGroupOrders = ({component, handleDelete, handleClose}) => {

  const onHandleDelete = async(component) => {
    const result = await deleteGroupOrder(component.id)
    
    if(!result)
      alert('prueba alert!!!')
    else
      handleDelete(component)
  }

  const onHandleClose = async(component)=>{
    const result = await closeGroupOrder(component.id)
    
    if(!result)
      alert('prueba alert!!!')
    else
      handleClose(component)
  }
  
  return (
    <tr>
    <td>{component.id}</td>
    <td>{component.date}</td>
    <td>{component.state.name}</td>
    <td>
      <button>
        <NavLink to={component.id.toString()}>VER</NavLink>
      </button>      
      <Button
        onClick={()=>onHandleDelete(component)}
        disabled={component.state.id===0}>
        eliminar
      </Button>
      <Button
        onClick={()=> onHandleClose(component)}
        disabled={component.state.id===0}>
        cerrar
      </Button>
    </td>
  </tr>
  )  
}

export default ItemGroupOrders