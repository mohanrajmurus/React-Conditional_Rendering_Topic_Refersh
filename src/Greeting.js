import React from 'react';
import Usergreet from './Usergreet';
import Guestuser from './Guestuser'
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
        return <Usergreet name='Mohanraj'/>
    else
        return <Guestuser/>
}

export default Greeting;