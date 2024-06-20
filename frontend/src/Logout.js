import React, {useContext} from 'react'
import ContextObject from './ContextObject'

function Logout () {
    let {setCurrentUser} = useContext(ContextObject) 
    //####################null?
    setCurrentUser('')



    return (
        <h1>Logged Out</h1>
    )

}

export default Logout
