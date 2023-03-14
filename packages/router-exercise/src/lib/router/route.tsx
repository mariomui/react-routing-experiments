// import { ReactElement } from 'react'

import { ReactElement, useContext, useMemo } from "react"
import { useLocation } from "./hooks"
import * as nodepath from 'path';
import { RouterContext } from ".";
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

  const location = useLocation()
  const { history: _history } = useContext(RouterContext)
  const basename = _history?.state?.basename || '';

  //  register route.

  const finalPath = nodepath.join(DOMAIN, basename, path || '')
  // const url = new URL(_path, DOMAIN).href

  // rende route
  if (location?.pathname === finalPath) {
    return <>{location?.pathname}{element}</>
  }

  return <>{(location?.pathname === finalPath) + ""}finalPath:{finalPath}{children}</>;
}
