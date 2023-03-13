import { ReactElement, ReactNode } from "react"

type LinkProps = {
  to: string
  children: ReactNode
}

export function Link({ to, children }: LinkProps): ReactElement {
  window.history.pushState({}, "", to);

  return (

    <div>
      {children}
    </div >
  )
}
