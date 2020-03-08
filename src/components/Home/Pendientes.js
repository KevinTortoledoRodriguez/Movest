import React, { Component } from 'react'
import Api from '../../libraries/api'
import Solicitud from './Solicitud'
import propTypes from 'prop-types'
export class Pendientes extends Component {
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
                if(soli.status === 'Pendiente' && soli.institucionOrigen === user.institucion){
                    solicitudesFiltradas.push(soli)
                }
            } else {
                if(soli.status === 'Pendiente' && soli.institucionOrigen === user.institucion && alumnos.includes(soli.alumno) || soli.institucionSolicitada === user.institucion && soli.status === 'Pendiente' && alumnos.includes(soli.alumno)){
                    solicitudesFiltradas.push(soli)
                }
            }
        })
        this.setState({solicitudes:solicitudesFiltradas})
    }

    render() {
        const solicitudes = this.state.solicitudes
        return solicitudes.map((soli, index) => {
            return(
                <Solicitud solicitudes={soli} user={this.props.user} key={soli._id} actualizar={this.props.actualizar}/>
            )
        })
    }
}
Pendientes.propTypes = {
    solicitudes: propTypes.array,
    user: propTypes.object,
    actualizar: propTypes.func
}
export default Pendientes
