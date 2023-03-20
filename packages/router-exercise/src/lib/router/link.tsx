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
  console.log({ _to })
  const handleClick = () => {
    // console.log({ _history })

    _history.pushState(_history?.state, '', _to)
  }
  return (

    <div onClick={handleClick}>
      {children}
    </div >
  )
}
