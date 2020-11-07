import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Navigation() {
    return (
     <div>
         <nav>
             <ul>
                 <Link to="/">All</Link>
                 <Link to="/active">Active</Link>
                 <Link to="/completed">Completed</Link>
             </ul>
         </nav>

     </div>
    )
}
export default Navigation;