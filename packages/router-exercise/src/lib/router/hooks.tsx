// // import { Location } from 'history'

import { useContext, useRef, useState } from "react"
import { RouterContext } from ".";

// type Navigate = (to: string) => void

// export function useNavigate(): Navigate {
//   return function (to: string) { }
// }
// export function useLocation(): Location {
//   return {} as Location
// }

export function useLocation() {

  const { history } = useContext(RouterContext);
  const [location, setLocation] = useState(history?.location)
  const ref = useRef<any>(null)
  ref.current = setLocation
  history.listen(
    (_location: any) => {
      console.log('location', _location)
      ref.current(_location)
    }
  )
  return location;

}