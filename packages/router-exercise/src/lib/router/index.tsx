// import { History } from 'history'
// import { createBrowserHistory } from '@lib/history'
import { ReactElement, ReactNode } from 'react'
// import { createBrowserHistory } from '../history'

type RouterProps = {
  // history: History
  // history?: any,
  basename?: string;
  forceRefresh?: boolean;
  getUserConfirmation?: (...args: any) => void;
  keyLength?: number;
  children?: ReactNode | ReactNode[]
}
// basename={optionalString}
// forceRefresh={optionalBool}
// getUserConfirmation={optionalFunc}
// keyLength={optionalNumber}

export function Router(props: RouterProps): ReactElement {
  /**
   * BrowserRouter uses the html5api strategy
   * Hash router uses the hash strategy
   */
  return <div>
    {props?.children}
  </div>
}
// export * from '../history'
/*
Difference between Browser Router and HashRouter is the hashStrategy
You're gonna need to config how your server handles recieving urls
and responding with data.
base href stuff usually.
https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing

i'm assuming that the server will serve the same page, the same js payload, and the client will detect object in pushstate
https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API

*/
// export * from './outlet'
// export * from './route'
// export * from './routes'
// export * from './link'
// export * from './hooks'
