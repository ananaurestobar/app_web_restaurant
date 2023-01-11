import { useState } from "react"

const FormMenuItem = ({menuItem, handleChangeListState})=>{
  const [item, setItem] = useState(menuItem)

  const handleSelectedChange = (x) => {
    const newItem = {...item, selected: !item.selected}
    setItem(newItem)
    handleChangeListState(newItem)
  }

  if(!item)
    return (<></>)

  return(<div>      
    <label>{item.id} - {item.name}</label>
    <input type="checkbox"
    id={item.id}
    value={item}
    checked={item.selected}
    onChange={handleSelectedChange}
    />
    <button onClick={(e)=>{
      e.preventDefault()
      console.log('--------------------- FormMenuItem ---------------------')
      console.log(item)
      console.log('--------------------- FormMenuItem ---------------------')
    }}>print</button>
  </div>)
}

export default FormMenuItem