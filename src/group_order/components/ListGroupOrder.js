import ItemGroupOrder from './ItemGroupOrder'

const ListGroupOrder =({active, listOrder, handleDeliver, handlePayment, handleDelete})=>{
  return (
    <>
    <h2>ORDENES:</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>TOTAL</th>
          <th>ESTADO</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {listOrder.map(x=>(
          <ItemGroupOrder
          key={x.id}
          active = {active}
          order={x}
          handleDeliver={handleDeliver}
          handlePayment={handlePayment}
          handleDelete={handleDelete}
        />))}
      </tbody>
    </table>

    </>
  )
}

export default ListGroupOrder