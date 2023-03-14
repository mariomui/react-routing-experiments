import { ReactElement, ReactNode, useContext } from "react"
import { join } from 'path'
import { RouterContext } from "."
type LinkProps = {
  to: string
  children?: ReactNode
}

export function Link({ to, children }: LinkProps): ReactElement {
  const { history: _history } = useContext(RouterContext)
  const _to = join('/', _history?.state?.basename || '', to)
  const handleClick = () => {
    console.log({ _history })
    if (_history) {

      console.log("handle", { historystate: _history?.state }, { _to })
      _history?.pushState(_history?.state, '', _to)
    }
  }
  return (

    <div onClick={handleClick}>
      {children}
    </div >
  )
}
