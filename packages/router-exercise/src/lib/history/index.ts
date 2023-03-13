const ACTION_MAPPING = {
  POP: 'pop',
} as const
export type Action = (typeof ACTION_MAPPING)[keyof typeof ACTION_MAPPING]
// instead of enuns that turn

type LocationPicks = 'pathname' | 'search' | 'hash'
type CustomLocation = Pick<Location, LocationPicks>
export interface CustomHistory {
  readonly action: Action // last action that modified current location , will be Action.Pop on initial load

  readonly location: CustomLocation
}

type ReadOnlyFunction = <T>(obj: T) => Readonly<T>
const readOnly: ReadOnlyFunction = (obj) => {
  return Object.freeze(obj)
}

export function createBrowserHistory(
  options: { window?: Window } = {}
): CustomHistory {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { window = document.defaultView! } = options

  const { pathname, search, hash } = window.location
  const location = readOnly<CustomLocation>({
    pathname,
    search,
    hash,
  })
  /*
  the remix runs guy default the action to pop. 
  todo work on this later after i have the routes up
  i only need the history if i'm thinking of going back and forth
  and app.
  */
  return {
    action: ACTION_MAPPING.POP,
    location,
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
