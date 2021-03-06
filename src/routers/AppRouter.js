  import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
  
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../Components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';


  
export const AppRouter = () => {

  const {user} = useContext(AuthContext)
  // console.log(user);

    return (
      <Router>
          <div>
            <Switch>
              <PublicRoute 
              exact path= "/login" 
              component={ LoginScreen } 
              isAuthenticated= { user.logged }
              />

                <PrivateRoute 
                  path= "/" 
                  component={ DashboardRouters} 
                  isAuthenticated= { user.logged }
                />
            </Switch>
          </div>
      </Router>
    )
}
