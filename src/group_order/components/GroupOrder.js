import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { addNewOrder } from '../use_cases/addNewOrder'
import FormAddOrder from './FormAddOrder'
import ListGroupOrder from './ListGroupOrder'
const {getGroupOrders} = require('../use_cases/getGroupOrders')

/*****************************************************************************/
const GroupOrder = () => {
  const params = useParams()
  const groupOrderId = parseInt(params.groupOrderId)
  const initialState = {
    error:'',
    loading: true,
    data:{}
  }
  const [state, setState] = useState(initialState)
  const [estadoModal, cambiarEstadoModal] = useState(false)

  
  useEffect(()=>{
    async function fetchData(){
      try{
        const result = await getGroupOrders(groupOrderId)
        setState({
          error:'',
          loading:false,
          data: result
        })  
        
      }catch(e){
        setState({
          error:e.message,
          loading:false,
          data: {}
        })
      }
    }

    fetchData()
  },[groupOrderId])
  
  const addTask = async(clienteName) => {
    const newOrder = await addNewOrder(clienteName)
    const updOrders = [...state.data.orders, newOrder]
    setState({
      error:'',
      loading:false,
      data: {...state.data, orders: updOrders.sort((a,b)=> b.id-a.id)}
    })
 }

  const handleDeliver = (order) =>{    
    const newListOrder = state.data.orders.map(x=>{
      if (x.id === order.id)
        return {...x, state:{id:2, name:'entregado'}}
      return x
    })
    setState({
      error: '',
      loading:false,
      data: {...state.data, orders:newListOrder} 
    })
  }

  const handlePayment = (order) =>{    
    const newListOrder = state.data.orders.map(x=>{
      if (x.id === order.id)
        return {...x, state:{id:3, name:'pagado'}}
      return x
    })
    setState({
      error: '',
      loading:false,
      data: {...state.data, orders:newListOrder} 
    })
  }



  const handleDelete = (order) =>{
    const newListOrder = state.data.orders.filter(x=>x.id !== order.id)    

    setState({
      error: '',
      loading:false,
      data: {...state.data, orders:newListOrder} 
    })
  }

  if (state.loading)
    return <div>loading....</div>

  if (state.error.length > 0)  
    return <div>{state.error}</div>


  return (<>
    <p>Caja: {state.data.id}</p>
    <p>Fecha: {state.data.date}</p>
    <p>Total: {state.data.total}</p>
    <p>Estado: {state.data.state.name}</p>
    <button
      onClick={()=>cambiarEstadoModal(true)}
      disabled={state.data.state.id!==1}
    >NUEVA
    </button>
    <FormAddOrder
        addTask={addTask}
        estadoModal={estadoModal}
        cambiarEstadoModal = {cambiarEstadoModal}
      />
    <ListGroupOrder
      active = {state.data.state}
      listOrder ={state.data.orders}
      handleDeliver = {handleDeliver}
      handlePayment = {handlePayment}
      handleDelete = {handleDelete}
    />
  </>)
}
/*****************************************************************************/

export default GroupOrder