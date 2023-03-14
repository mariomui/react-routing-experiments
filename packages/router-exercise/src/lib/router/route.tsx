// import { ReactElement } from 'react'

import { ReactElement, useContext } from "react"
import { useLocation } from "./hooks"
import { RouterContext } from ".";
import { join } from "path";
type RouteProps = {
  path?: string
  element: ReactElement
  index?: boolean
  children?: (typeof Route)[]
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


  if (location.pathname === finalPath) {
    return <>{location.pathname} :: {path} ::: {element}</>
  }
  return <>{null}</>;
  // return <>{(location?.pathname === finalPath) + ""}finalPath:{finalPath}{children}</>;
}
