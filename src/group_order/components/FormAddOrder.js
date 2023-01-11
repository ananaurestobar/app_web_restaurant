import styled from 'styled-components'
import { useState } from "react"

const FormAddOrder = ({addTask, estadoModal, cambiarEstadoModal}) =>{
  const [task, setTask] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    addTask(task)
    cambiarEstadoModal(false)
    setTask('')
  }
  return (
    <>
    {estadoModal &&
      <TaskForm>
	<Form onSubmit={handleSubmit}>
          <Tittle>Add task</Tittle>
	  <label>task:</label>
	  <input
	    type='text'
	    name = 'value'
	    value = {task}
	    placeholder = 'task value'
	    onChange={e=>setTask(e.target.value)}
	  />
	  <Opciones>
            <button type='submit'>ADD</button>
            <button onClick={()=>cambiarEstadoModal(false)}>close</button>
          </Opciones>
        </Form>
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

const Form = styled.form`
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