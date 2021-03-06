import React, { Component } from 'react'
import Api from '../../libraries/api'
import Solicitud from './Solicitud'
import propTypes from 'prop-types'


export class PorConfirmar extends Component {
    constructor(){
        super();
        this.state = {
            solicitudes:[],
            alumnos:[]
        }
    }

    componentWillMount(){
        this.obtenAlumnos()
    }
    obtenAlumnos(){
        Api.getMethod({
            url: 'alumnos',
            success: (response) => {
                const alumnos = []
                const user = this.props.user
                response.data.map((alumno) =>{
                    if(alumno.carrera === user.carrera){
                        alumnos.push(alumno._id)
                    }
                })
                this.setState({alumnos:alumnos})
                this.filtraSolicitudes(alumnos)
            },
            fail: (error) => {
              console.log(error)
            }
          })
          
    }
    filtraSolicitudes(alumnos){
        const solicitudesFiltradas=[]
        const solicitudes = this.props.solicitudes
        const user = this.props.user
        solicitudes.map((soli) => {
            if(user.puesto === 'Jefe de Departamento'){
                if(soli.status === 'Por confirmar' && soli.institucionOrigen === user.institucion){
                    solicitudesFiltradas.push(soli)
                }
            } else {
                if(soli.status === 'Por confirmar' && soli.institucionOrigen === user.institucion && alumnos.includes(soli.alumno) ){
                    solicitudesFiltradas.push(soli)
                }
            }
        })
        this.setState({solicitudes:solicitudesFiltradas})
    }

    render() {
        const solicitudes = this.state.solicitudes
        console.log(this.props.user)
        console.log(this.state.solicitudes)
        return solicitudes.map((soli, index) => {
            return(
                <Solicitud solicitudes={soli} key={index} user={this.props.user} actualizar={this.props.actualizar}/>
            )
        })
    }
}

PorConfirmar.propTypes = {
    solicitudes: propTypes.array,
    user: propTypes.object,
    actualizar: propTypes.func
}
export default PorConfirmar
