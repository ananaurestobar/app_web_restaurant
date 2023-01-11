import ItemGroupOrders from './ItemGroupOrders'

const ListGroupOrders = ({stateComponent, handleDelete, handleClose})=>{
  const {data, error, loading} = stateComponent
  
  if (loading)
    return <div>loading....</div>

  if (error.length > 0)  
    return <div>{error}</div>

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>FECHA</th>
          <th>ESTADO</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
      {data.map((x) => {return (       
        <ItemGroupOrders
          key={x.id}
          component={x}
          handleDelete={handleDelete}
          handleClose={handleClose}
        />)})}
      </tbody>
    </table>
  )
}

export default ListGroupOrders