// // import { Location } from 'history'

import { CustomLocation, createBrowserHistory } from "@lib/history"
import { useContext, useEffect, useState } from "react"
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
  useEffect(() => {
    if (history?.location?.pathname) {
      console.log('fires?')
      setLocation(history?.location)
    }
  }, [history?.location?.pathname])
  return location;
}