// import { useState } from 'react'

import { About } from "@features/about"
import { Home } from "@features/home"
import { Router } from "@lib/router"
import { Link } from "@lib/router/link"
// import { Link } from "@lib/router/link"
import { Route } from "@lib/router/route"
import { Border } from "./cmps"
import { createBrowserHistory } from "@lib/history"



// the only way basename works here is if history api has it.

// import { Home } from '~/features/home'
// import { About } from '~/features/about'
const history = createBrowserHistory()
function App() {
  return (
    <div>
      <h1>Router Exercise</h1>
      {/* 
      <Link to="/">Home</Link>
      Cannot read properties of undefined (reading 'history') */}
      {/* that means there is an object that link reads history from. */}
      <Router history={history} basename="hyacinth">
        {/* router provides an object to its children.
          I can eitehr do context api or pushstate.
        */}
        {/* LInks do not work outside of a router sandwich */}
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>

        {/* that means that the routes should actuall be route registering */}
        <Border>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Border>
      </Router>
      {/* 

      <Link to="/about">About</Link>

      <Routes>
      </Routes> */}

    </div >
  )
}

export default App
