import React, {Component} from 'react';
import Logoutbutton from './Logoutbutton';
import Loginbutton from './Loginbutton';
import Greeting from './Greeting';



class Logincontrol extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    loginClick = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    logoutClick = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button = isLoggedIn ? <Logoutbutton onClick={this.logoutClick}/>:<Loginbutton onClick={this.loginClick}/>
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
            
        );
    }
}

export default Logincontrol;