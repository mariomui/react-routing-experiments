const ACTION_MAPPING = {
  POP: 'pop',
} as const
export type Action = (typeof ACTION_MAPPING)[keyof typeof ACTION_MAPPING]
// instead of enuns that turn

type LocationPicks = 'pathname' | 'search' | 'hash'
export type CustomLocation = Pick<Location, LocationPicks>
export type CustomHistory = Pick<History, 'pushState' | 'state'>
export interface BrowserHistoryAndOther extends CustomHistory {
  readonly action: Action
  // last action that modified current location , will be Action.Pop on initial load

  readonly location: CustomLocation
}

type ReadOnlyFunction = <T>(obj: T) => Readonly<T>
const readOnly: ReadOnlyFunction = (obj) => {
  return Object.freeze(obj)
}

export function createBrowserHistory(
  options: { window?: Window } = {}
): BrowserHistoryAndOther {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { window = document.defaultView! } = options

  const { pathname, search, hash } = window.location
  const { history } = window
  const location = readOnly<CustomLocation>({
    pathname,
    search,
    hash,
  })
  const workspace = {
    action: ACTION_MAPPING.POP,
    location,
  }
  const customHistory: CustomHistory = new Proxy<CustomHistory>(history, {
    get(t, p: keyof CustomHistory, r) {
      console.log({ t, p })
      if (p === 'pushState') {
        return (...args: any) => {
          console.log('changes')
          const [state] = args
          console.log({ state })
          // Object.assign(t.state, ...state)
          Reflect.apply(t[p], t, args)
        }
      }
      return Reflect.get(t, p)
    },
  })
  console.log({ customHistory })
  /*
  the remix runs guy default the action to pop. 
  todo work on this later after i have the routes up
  i only need the history if i'm thinking of going back and forth
  and app.
  */
  return {
    ...workspace,
    pushState: customHistory.pushState,
    state: customHistory.state,
  }
}

// this is from the dom.
// interface History {
//   readonly length: number
//   scrollRestoration: ScrollRestoration
//   readonly state: any
//   back(): void
//   forward(): void
//   go(delta?: number): void
//   pushState(data: any, unused: string, url?: string | URL | null): void
//   replaceState(data: any, unused: string, url?: string | URL | null): void
// }
