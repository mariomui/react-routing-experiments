// import { Children, ReactElement, useContext, useEffect } from 'react'
import { Mario } from '.'
import { ReactElement, useContext } from 'react'



export function Outlet(): ReactElement {
  // the outlet should show grab children somehow.
  const pathContext = useContext(Mario)
  // const location = useLocation()
  const woot = pathContext[window.location.pathname]
  console.log({ woot })
  return <>
    {woot}
  </>
}
