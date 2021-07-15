import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

import icon from '../../assets/Logo.png'

export const Navbar = () => {
    
    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory()


    
    const handleLogout = () => {

        history.replace('./login')

        dispatch({
            type: types.logout 
        })
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img 
                    className= "logo animate__animated animate__headShake"
                    src={ icon }
                    alt="logo"
                />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/olimpics"
                    >
                        Olimpics
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/cethonic"
                    >
                        Cethonics
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className= "nav-item nav-link text-info"> 
                        { name } 
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout } 
                    >
                        Logout
                    </button >
                </ul>
            </div>
        </nav>
    )
}