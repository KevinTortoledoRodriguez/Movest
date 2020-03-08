import React, { Component } from 'react'
import Pendientes from './Pendientes.js';
import Alumnos from './Alumnos'
import Coordinador from './Coordinador'
import Api from '../../libraries/api'


export default class Home extends Component {
    constructor(){
        super()

        this.state = { 
            activeItem: '',
            user: {},
            usuario: {} 
        }
        this.obtenerUser = this.obtenerUser.bind(this);
    }
    

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    obtenerUser(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({user: user})

        if(user.tipoLogin === "Empleado"){
            Api.getMethod({
                url: 'empleados',
                success: (response) => {
                    response.data.map((index)=>{
                        if(user.usuario === index._id){
                            this.setState({usuario:index})
                        }
                    })
                },
                fail: (error) => {
                  console.log(error)
                }
            });
        } else {
            Api.getMethod({
                url: 'alumnos',
                success: (response) => {
                    response.data.map((index)=>{
                        if(user.usuario === index._id){
                            this.setState({usuario:index})
                        }
                    })
                },
                fail: (error) => {
                  console.log(error)
                }
            });
        }
    }
    componentWillMount(){
        this.obtenerUser();
    }

    renderRol(){
        const user = this.state.user
        if(user.tipoLogin == "Empleado"){
            return(<Coordinador user={this.state.usuario}/>)
        } else if(user.tipoLogin == 'Alumno'){
            return(<Alumnos user={user} usuario={this.state.usuario}/>)
        }
    }
    render() {
        console.log(this.state.usuario)
        return (
                <div>
                     {this.renderRol()}
                </div>
        )
    }
}
