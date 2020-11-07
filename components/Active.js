import React from "react"
import UseToggler from "./useToggler"
function Active() {
    const {todo, handleInput} = UseToggler()
    return (
        <fieldset>
            <input type="checkbox"/>
            <label>{todo}</label>
        </fieldset>
    )
}
export default Active;