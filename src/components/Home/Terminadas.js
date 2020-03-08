import React, { Component } from 'react'
import propTypes from 'prop-types'
import Solicitud from './Solicitud'
import Api from '../../libraries/api'


export class Terminadas extends Component {
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
                if(soli.status === 'Terminada' && soli.institucionOrigen === user.institucion){
                    solicitudesFiltradas.push(soli)
                }
            } else {
                if(soli.status === 'Terminada' && soli.institucionOrigen === user.institucion && alumnos.includes(soli.alumno) ){
                    solicitudesFiltradas.push(soli)
                }
            }
        })
        this.setState({solicitudes:solicitudesFiltradas})
    }

    render() {
        const solicitudes = this.state.solicitudes
        const alumnos = this.state.alumnos
        console.log(this.state.solicitudes)
        return solicitudes.map((soli, index) => {
            return(
                <Solicitud solicitudes={soli} key={index}/>
            )
        })
    }

}
Terminadas.propTypes = {
    solicitudes: propTypes.array,
    user: propTypes.object
}
export default Terminadas
