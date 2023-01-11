import {useEffect, useState} from 'react'
import ListGroupOrders from './ListGroupOrders'
const {getListOrders} = require('../use_cases/getListGroupOrders')
const {createGroupOrders} = require('../use_cases/createGroupOrder')


/*****************************************************************************/
const GroupOrders = ()=> {

  const initialState = {
    error:'',
    loading:true,
    data:[]
  }
  
const [stateComponent, setStateComponent] = useState(initialState)

useEffect(()=>{
  async function fetchData(){
    try{
      const result = await getListOrders()
      setStateComponent({
        error:'',
        loading:false,
        data: result
      })   
    }catch(e){
      setStateComponent({
        error:e.message,
        loading:false,
        data: []
      })   
    }
  }
  fetchData()
}, [])

  const handleDelete = (groupOrder) =>{
    const newData = stateComponent.data.filter(x=>x.id !== groupOrder.id)    

    setStateComponent({
      error: '',
      loading:false,
      data: newData
    })
  }

  const handleClose = (groupOrder) =>{
    const newData = stateComponent.data.map(x=>{
      if (x.id === groupOrder.id)
        return {...x, state:{'id':0, 'name':'cerrado'}}
      return x
    })    
    setStateComponent({
      error: '',
      loading:false,
      data: newData
    })
  }

  const handleNuevaClick = async ()=>{
    const newGroupOrder = await createGroupOrders()
    console.log(newGroupOrder)
    const newData = [...stateComponent.data, newGroupOrder]
    setStateComponent({
      error: '',
      loading:false,
      data: newData
    })
  }
  return(
    <div>
      <p>CAJAS:</p>
      <button onClick={()=>handleNuevaClick()} >NUEVA</button>
      <ListGroupOrders
        stateComponent={stateComponent}
        handleDelete={handleDelete}
        handleClose={handleClose}      
      />
    </div>
  )
}

export default GroupOrders