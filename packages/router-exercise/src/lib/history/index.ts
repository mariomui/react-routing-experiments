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
  listen: any
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
  const location = <CustomLocation>{
    pathname,
    search,
    hash,
  }
  const workspace = {
    action: ACTION_MAPPING.POP,
    location,
  }

  // eslint-disable-next-line prefer-const
  let listeners = []
  function listen(messenger: any) {
    listeners.push(messenger)
  }
  function activateListeners(location: any) {
    listeners.forEach((l) => l(location))
  }

  const customHistory: CustomHistory = new Proxy<CustomHistory>(history, {
    get(t, p: keyof CustomHistory, r) {
      if (p === 'pushState') {
        return (...args: any) => {
          const [state, x, path] = args

          // Object.assign(t.state, ...state)
          const _location = {
            ...location,
            pathname: path,
          }
          workspace.location = _location
          activateListeners(_location)
          Reflect.apply(t[p], t, [state, x, path])
        }
      }
      return Reflect.get(t, p)
    },
  })

  return {
    ...workspace,
    pushState: customHistory.pushState,
    state: customHistory.state,
    listen,
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
