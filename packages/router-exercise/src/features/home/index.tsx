import { Outlet } from "@lib/router/outlet";

export function Home() {
  // const navigate = useNavigate()
  // const location = useLocation()
  return (
    <div>
      {/* <p>Location.pathname is: {location.pathname}</p> */}
      {/* <button type="button" onClick={() => navigate('/about')}> */}
      {/* Navigate */}
      {/* </button> */}
      <Outlet></Outlet>
      <h1>Homeddd</h1>
    </div>
  )
}
