// import { ReactElement } from 'react'

import { createBrowserHistory } from "@lib/history"
import { ReactElement, useEffect, useState } from "react"

type RouteProps = {
  path?: string
  element: ReactElement
  index?: boolean
  children?: (typeof Route)[]
}

function useLocation() {
  const history = createBrowserHistory()
  const [pathname, setPathName] = useState(history?.location?.pathname || 'pop')
  useEffect(() => {
    console.log(history.location.pathname)
    setPathName(history.location.pathname)
  }, [history.location.pathname])

  return pathname;
}
export function Route({
  path,
  element,
  index,
  children,
}: RouteProps): ReactElement {

  const pathname = useLocation()
  console.log({ pathname, path })
  if (pathname === path) {
    return <>{element}</>
  }
  return <>{children}</>;
}
