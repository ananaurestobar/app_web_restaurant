import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import ListOrderItems from './ListOrderItems'
import FormAddOrderItem from './FormAddOrderMenu'

const {getOrder} =require('../use_cases/getOrder')

const Order = () =>{
  const params = useParams()  
  const groupOrderId = parseInt(params.groupOrderId)
  const orderId = parseInt(params.orderId)
  const initialState = {
    error:'',
    loading:true,
    data:[]
  }  
  const [state, setState] = useState(initialState)

  const [estadoModal, cambiarEstadoModal] = useState(false)


  useEffect(()=>{
    console.log('state changed!!!', state)
  },[state])
  
  useEffect(()=>{
    async function fetchData(){
      try{
        const result = await getOrder(groupOrderId, orderId)
        setState({
          error:'',
          loading:false,
          data: result
        })   
      }catch(e){
        setState({
          error:e.message,
          loading:false,
          data: []
        })   
      }
    }
    fetchData()
  }, [groupOrderId, orderId])


  const handleDelete = (orderItem) =>{
    const newListOrderDetails = state.data.details.filter(x=>x.id !== orderItem.id)    

    setState({
      error: '',
      loading:false,
      data: {...state.data, details:newListOrderDetails} 
    })
  }

  const handleAdd = (orderItem) =>{
    const newListOrderDetails = state.data.details.map(x=>{
      if(x.id === orderItem.id){
        const newQtty = x.qtty + 1
        const newPrice = newQtty * x.price

        return {...x, qtty: newQtty, total:newPrice}
      }
      return x
    })
    const newTotal = newListOrderDetails.reduce((a, b)=>a + b.total, 0)    

    setState({
      error: '',
      loading:false,
      data: {...state.data, total:newTotal, details:newListOrderDetails} 
    })
  }

  const handleSubtract = (orderItem) =>{
    const newListOrderDetails = state.data.details.map(x=>{
      if(x.id === orderItem.id){
        const newQtty = x.qtty - 1
        const newPrice = newQtty * x.price
        if(newQtty<0)
          return x
        else
          return {...x, qtty: newQtty, total:newPrice}
      }
      return x
    })
    const newTotal = newListOrderDetails.reduce((a, b)=>a + b.total, 0)    

    setState({
      error: '',
      loading:false,
      data: {...state.data, total:newTotal, details:newListOrderDetails} 
    })
  }

  const handleChangeMenu = (selectedMenu) =>{
    console.log('------------------------ handleChangeMenu ------------------------')
    console.log(selectedMenu)
    const newListOrderDetails = selectedMenu
      .filter(x=>x.selected)
      .map(x => {
        const findItem = state.data.details.find(elm=>elm.id === x.id)
        if (findItem === undefined){
          return {id:x.id, name:x.name, qtty: 1, price: x.price, total: x.price}
        }
        else{
          return {id:x.id, name:x.name, qtty: findItem.qtty, price: findItem.price, total: findItem.total}
        }
      })
    const newTotal = newListOrderDetails.reduce((a, b)=>a + b.total, 0)    
    setState({
      error: '',
      loading:false,
      data: {...state.data, total:newTotal, details:newListOrderDetails} 
    })
    console.log('------------------------ handleChangeMenu ------------------------')
  }



  if (state.loading)
    return <div>loading....</div>

  if (state.error.length > 0)  
    return <div>{state.error}</div>


  return (
    <>
      <p>CAJA: {state.data.groupOrderId}</p>
      <p>FECHA: {state.data.date}</p>
      <p>PEDIDO: {state.data.orderId}</p>
      <p>NOMBRE: {state.data.customer}</p>
      <p>ESTADO: {state.data.state.name}</p>      
      <p>TOTAL: {state.data.total}</p>
      <p>DETALLES</p>
      <button
        onClick={()=>cambiarEstadoModal(true)}
      >NUEVO</button>
      <FormAddOrderItem
        handleChangeMenu={handleChangeMenu}
        estadoModal={estadoModal}
        cambiarEstadoModal={cambiarEstadoModal}
        order = {state.data.details}
      />


      <ListOrderItems
        listOrderItems = {state.data.details}
        handleDelete = {handleDelete}
        handleAdd = {handleAdd}
        handleSubtract = {handleSubtract}
        />
    </>
  )
}

export default Order


