import React from "react"
import Header from "./components/Header"
import FormInput from "./components/FormInput"
import All from "./components/All"
import {Switch, Route, Link} from "react-router-dom"
console.log(All);

function App() {
    return (
        <main>
            <Header/>
            <nav>
                <ul>
                    <Link to="/">All</Link>
                    <Link to="/active">Active</Link>
                    <Link to="/completed">Completed</Link>
                </ul>
            </nav>

            <FormInput/>
            <Switch>
                <Route exact path="/">
                  <All/>
                </Route>
                <Route path="/active">
                  <All/>
                </Route>
                <Route path="/completed">
                  <All/>
                </Route>

            </Switch>
        </main>
    )
}
export default App;