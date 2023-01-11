import OrderItem from './OrderItem'


const ListOrderItems =({listOrderItems, handleDelete, handleAdd, handleSubtract})=>{
  return (
    <>
    <h2>ORDENES:</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>CANTIDAD</th>
          <th>P. U.</th>
          <th>TOTAL</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {listOrderItems.map(x=>(          
          (<OrderItem
            key={x.id}
            orderItem = {x}
            handleDelete = {handleDelete}
            handleAdd = {handleAdd}
            handleSubtract = {handleSubtract}
          />
          )))}
      </tbody>
    </table>

    </>
  )
}

export default ListOrderItems