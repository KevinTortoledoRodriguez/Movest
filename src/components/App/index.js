import React, { Component } from 'react'
import Login from '../Login/Login'
import Signup  from '../Signup/Signup'  

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            location:'',
            user:{}
        }
    }
    componentWillMount(){
        const location= JSON.stringify(window.location.href)    
        this.setState({
            location: location
        })
        console.log(this.state.location)
    }

    load(){
        if(this.state.location === 'http://localhost:3000/login'){
            return(<Login/>)
        } else if(this.state.location === 'http://localhost:3000/signup'){
            return(<Signup/>)
        }
    }
    
    render() {
        return (
            <div className='App'>
                {this.load}
            </div>
        )
    }
}
