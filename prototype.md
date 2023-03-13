# Router Exercise

---

## Scaffolding steps

- scaffold up a new project

- use corepack
- corepack prepare --all
- `$ corepack enable pnpm`
- set up webpack, typescript (to be honest all the inits naturally do most of it
  for me below)
  - this is all implicitly shared at the root workspace level.
  - If you are missing a dep, they'll tell you
- `$ $pnpm add webpack-cli -D && pnpm exec webpack-cli init`
- `$ $pnpm add eslint -D && pnpm exec eslint -- init`
- `$ touch pnpm-workspace.yaml`

- frontend package hijinks
  - set up all the presets for babel, inside of the package
  - set up react and react-dom as dependencies
  - types are annoying, `$ pnpm add @types/react @types/react-dom` in dev-deps
  - tell tsconfig to only make declaration files
  - tell babel-loader to handle all transpiles
    - for performance and jest compatibility reasons
  - setup the bootstrap file to do the react 18 root render stuff.
  - fix up webpack html to have app id for root replacement
  - fix index ts to index tsx so it doesnt spout errors
  - use automatic runtime in my babel react plugin
    - extend eslint so it doesnt complain
      - "plugin:react/jsx-runtime"

```bash
$ cat > pnpm-workspace.yaml << EOF
packages:
- 'packages/*'
```

- set up babel for react and typescript inside the package.

- create packages folder
  - `$ mkdir -p packages/router-exercise`

## Exercise

- Create Router component and a route component that behaves like react router.
- Implement basename api.

---

1. Using the empty Router, Routes, Route, and Link components in `lib/router`,
   along with the
   [`history`](https://github.com/remix-run/history/blob/3e9dab413f4eda8d6bce565388c5ddb7aeff9f7e/docs/getting-started.md)
   library, create a router that allows a user to navigate between the Home and
   About routes by clicking the `Links`.
2. Create a `useNavigate` hook that returns a `navigate` function that allows
   programmatic routing between the About and Home components. This hook has
   been started in `lib/router/hooks`.
3. Create a `useLocation` hook that provides the updated `location` based on
   `history` updates. This hook has also been started in `lib/router/hooks`.
4. Allow a custom basename to be passed to the `Router`. This property should
   allow all paths to be relative to this path prefix. For example, make it so
   `/home` and `/about` work for `/app/home` and `/app/about`.
5. Refactor the routes to use the `Root` component to render its children via
   the `Outlet` component. Add an `index` prop to the `Router` component for
   matching the index route. The routes should look like:

   ```jsx
   <Routes>
     <Route path="/" element={<Root />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
     </Route>
   </Routes>
   ```

---

For my notes later:

- babel env environments replace the presets entirely.
  - does it replace other properties? Is there a merge logic?
- typescript path aliases fun stuff
  - Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget
    a leading './'?
  - using tilde for a catchall is bad for my vscode, better to explicitly state
    the folders i'm using.
