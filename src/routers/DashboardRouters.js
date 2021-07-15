import React from 'react'
import { Navbar } from '../Components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'

import { OlimpicScreen } from '../Components/olimpics/OlimScreen'
import { GodScreen } from '../Components/gods/GodScreen'
import { CethonicScreen } from '../Components/cethonic/CtScreen'
import { SearchScreen } from '../Components/search/SearchScreen'

export const DashboardRouters = () => {


    return (
        <>
            <Navbar />

            <div className= "container mt-2">
                <Switch>
                    <Route exact path="/olimpics" component={ OlimpicScreen}/>
                    <Route exact path="/god/:godsId" component={ GodScreen}/>
                    <Route exact path="/cethonic" component={ CethonicScreen}/>
                    <Route exact path="/search" component={ SearchScreen}/>

                    <Redirect to="/olimpics" />
                </Switch>
            </div>

        </>
    )
}
