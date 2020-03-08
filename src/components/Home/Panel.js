import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Api from '../../libraries/api'
import Registro from './Registro'


export class Panel extends Component {
    constructor(){
        super()

        this.state= {
            user:{},
            solicitudes:[],
            carrera:{}
        }
        this.obtenerSolicitudes = this.obtenerSolicitudes.bind(this);
    }
    componentWillMount(){
        this.obtenerSolicitudes()
    }

    obtenerSolicitudes(){
        var usuario= {}
        Api.getMethod({
            url: 'alumnos',
            success: (response) => {
                const user = this.props.user
                response.data.map((alu) => {
                    if(alu._id === user.usuario){
                        this.setState({user:alu})
                        usuario = alu
                    }
                })
            },
            fail: (error) => {
              console.log(error)
            }
        });
        const solis = []
        Api.getMethod({
            url: 'solicitud',
            success: (response) => {
                response.data.map((soli) => {
                    if(soli.alumno === usuario._id){
                        solis.push(soli)
                    }
                })
                this.setState({solicitudes:solis})
            },
            fail: (error) => {
              console.log(error)
            }
        });
        Api.getMethod({
            url: 'carreras',
            success: (response) => {
                response.data.map((carrera) => {
                    if(carrera._id === usuario.carrera){
                        this.setState({carrera:carrera})
                    }
                })
            },
            fail: (error) => {
              console.log(error)
            }
        });
    }
    render() {
        const user = this.state.user
        const carrera = this.state.carrera
        const solicitudes = this.state.solicitudes
        const usuario = this.props.usuario
        return(
            solicitudes.map((soli) => {
                return <Registro 
                solicitud={soli} 
                key={soli._id} 
                actualizar={this.props.actualizar} 
                user={user} 
                carrera={carrera}
                usuario={usuario}
                />       
            })
        )
    }
}

Panel.propTypes = {
    user: PropTypes.object,
    actualizar: PropTypes.func,
    usuario: PropTypes.object
};

export default Panel
