// import { ReactElement } from 'react'

import React, { Context, ReactElement, ReactNode, createContext, useContext } from "react"
import { useLocation } from "./hooks"
import { Mario, RouterContext } from ".";
import { join } from "path";
type RouteProps = {
  path?: string
  element: ReactElement
  index?: boolean
  children?: unknown
}
const DOMAIN = '/';

export function Route({
  path,
  element,
  index,
  children,
}: RouteProps): ReactElement {

  const { history: _history } = useContext(RouterContext)
  const location = useLocation()
  const basename = _history?.state?.basename || '';

  const finalPath = join(DOMAIN, basename, path || '')

  // const OutletContext = createContext(children)
  const val = useContext(Mario)
  if (location.pathname === finalPath) {
    if (children) {
      console.log({ children })
      return (

        <>
          <p>
            i route has children
          </p>
          {/* {children} */}
          <Mario.Provider value={{ ...val, [finalPath]: children }}>
            {element}
          </Mario.Provider>
        </>
      )

    }


    return <>{location.pathname} :: {path} :::
      {/* <OutletContext.Provider value={children}> */}
      {element}
      {/* {React.cloneElement(element, { outletContext: OutletContext })} */}
      {/* </OutletContext.Provider> */}
    </>
  }
  return <>{null}</>;
  // return <>{(location?.pathname === finalPath) + ""}finalPath:{finalPath}{children}</>;
}
