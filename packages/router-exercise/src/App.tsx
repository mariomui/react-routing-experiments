// import { useState } from 'react'

import { Home } from "@features/home"
import { Router } from "@lib/router"
// import { Link } from "@lib/router/link"
import { Route } from "@lib/router/route"



// the only way basename works here is if history api has it.

// import { Home } from '~/features/home'
// import { About } from '~/features/about'
function App() {
  return (
    <div>
      Loadeedd
      <Router basename="hyacinth">
        {/* <Link to="/mario" /> */}
        <Route path="/home" element={<Home />} />
      </Router>
      {/* <h1>Router Exercise</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      */}
    </div >
  )
}

export default App
