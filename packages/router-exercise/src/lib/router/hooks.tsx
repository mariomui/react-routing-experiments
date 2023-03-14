// // import { Location } from 'history'

import { useContext, useEffect, useRef, useState } from "react"
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
  // const ref = useRef<any>(null)
  // ref.current = setLocation

  useEffect(() => {
    const unlisten = history.listen(
      (_location: any) => {
        console.log('location', _location)
        setLocation(_location)
      }
    )
    return unlisten
  }, [])
  return location;

}