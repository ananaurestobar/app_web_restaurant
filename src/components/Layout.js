import { Outlet } from "react-router-dom"

const Layout = () =>{
  return (
    <div>
      <h2>menu - layout</h2>
      <Outlet/>
    </div>
  )
}

export default Layout