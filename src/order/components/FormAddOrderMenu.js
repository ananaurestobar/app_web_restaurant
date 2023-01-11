import styled from 'styled-components'
import { useEffect, useState } from "react"
import FormMenuItem from './FormMenuItem'
const { getMenu } = require('../use_cases/getMenu')

const FormAddOrder = ({handleChangeMenu, estadoModal, cambiarEstadoModal, order}) =>{
  const initialState = {
    error:'',
    loading:true,
    data:[],
    filteredData:[],    
  }

  const [stateComponent, setStateComponent] = useState(initialState)

  useEffect(()=>{
    async function fetchData(){
      try{
        const _result = await getMenu(order)
        
        const result = _result.map(x => {
          const exists = order.find(elm => {
            return elm.id === x.id
          })
          return {...x, selected: (exists !== undefined)}
        })
        setStateComponent({
          error:'',
          loading:false,
          data:result,
          filteredData:[],    
        })
      }catch(e){
        setStateComponent({
          error:e.message,
          loading:true,
          data:[],
          filteredData:[],    
        })
      }
    }
    
    if (!estadoModal)
      return
    else{
      console.log('----------------- useEffect -----------------')
      console.log('fetchData')
      fetchData()
      console.log('----------------- useEffect -----------------')
    }
  }, [estadoModal, order])

  const handleSubmit = ()=>{
    handleChangeMenu(stateComponent.data)
    setStateComponent(initialState)
    cambiarEstadoModal(false)
    console.log('-------------------- handleSubmit --------------------')
    console.log(stateComponent)
    console.log('-------------------- handleSubmit --------------------')
  }

  const handleChangeListState = (item)=>{
    console.log('--------------- FormAddOrder ---------------')
    console.log(item)
    const newData = stateComponent.data.map(x => {
      if(x.id === item.id){
        return item
      }
      return x
    })
    setStateComponent({
      ...stateComponent, data:newData
    })
    console.log('--------------- FormAddOrder ---------------')
  }

  return (
    <>
    {estadoModal &&
      <TaskForm>
        <FormDiv>
          <Tittle>Menu</Tittle>
          {
            stateComponent.loading ? <div>loading....</div>
            :(stateComponent.error.length > 0)?  <div>{stateComponent.error}</div>
            :stateComponent.data.map(x=>
              <FormMenuItem
                key={x.id}
                menuItem = {x}
                handleChangeListState = {handleChangeListState}
                />
            )    
          }
          <Opciones>
            <button onClick={handleSubmit}>ADD</button>
            <button onClick={()=>{
              setStateComponent(initialState)
              cambiarEstadoModal(false)
            }}>close</button>


            <button onClick={(e)=>{
              e.preventDefault()
              console.log('-----------------------------------')
              console.log(order)
              console.log('-----------------------------------')
              console.log(stateComponent.data)
              console.log('-----------------------------------')
            }}>prueba</button>
          </Opciones>
        </FormDiv>
      </TaskForm>}
    </>
    )
}
const Tittle = styled.div`
  display:flex;
  justify-content:center;  
`
const TaskForm = styled.div`
  width:100vw;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  background:rgba(0, 0, 0, .2);
  display:flex;
  flex-direction:columns;
  align-items:center;
  justify-content:center;
`

const FormDiv = styled.div`
  background:#729bcf;
  width:60%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  label{
    display:block;  
  }
  input{
    display:block;
    margin:0 auto;
    width:80%;
  }
`
const Opciones = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:end;
  button{
    margin-top:5px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`

export default FormAddOrder