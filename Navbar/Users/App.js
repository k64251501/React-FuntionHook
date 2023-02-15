import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import UserApp from './Users/UserApp'
import Home from './Users/Home'
const App = () => {
  return ( <React.Fragment>
    <Router>
            <Navbar />
            <Routes>
                <Route path = "/home" element={<Home />}></Route>
                <Route path='/user'   element=  {<UserApp />}>

                </Route>
            </Routes>
            </Router>
  </React.Fragment>
    
  )
}

export default App