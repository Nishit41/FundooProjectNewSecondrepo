import React from 'react'
import SignIn from '../../pages/signin/signin'
import SignUp from '../../pages/signup/signup'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from '../Dashboard'
function Router() {
  return (
    <BrowserRouter>
            <Routes> 
                       
             <Route exact path="/"   element ={<SignIn/>} />
             <Route  path="/SignUp"   element ={<SignUp/>} />
             <Route  path="/Dashboard"   element ={<Dashboard/>} />
            </Routes>


         </BrowserRouter>
          
      
  )
}

export default Router