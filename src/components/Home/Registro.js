import React, { Component } from 'react'
import {Card, Image, List, Button} from 'semantic-ui-react'
import Api from '../../libraries/api'
import PropTypes from 'prop-types'

export class Registro extends Component {
    generaData(){
        var solicitud = this.props.solicitud
        var usuario = this.props.usuario
        if(solicitud.status === "Aprobada"){
            solicitud.logs.push({log: "Aceptada"})
            solicitud.logs.push({log: "En curso"})
            solicitud.status = "En curso"
            usuario.movilidades += 1
            this.props.actualizar(solicitud)
            this.actualizaMovilidadUsuario(usuario)
        }
    }
    actualizaMovilidadUsuario(usuario){
        const alumno = usuario
        console.log(alumno)
        Api.putMethod({
            url: 'alumnos',
            body: alumno,
            success: (response) => {
                console.log(response)
            },
            fail: (error) => {
              console.log(error);
            }
        })
    }
    cancelarData(){
        var solicitud = this.props.solicitud
        console.log(solicitud.status)
            solicitud.logs.push({log: "Cancelada"})
            solicitud.status = "Cancelada"
            console.log(solicitud.status)
            this.props.actualizar(solicitud)
    }
    renderLogs(logs){
        return(
            <List>
                {
                    logs.map((log) => {
                        return(
                            <List.Item key={log._id}>
                                {log.fecha},{log.log}
                            </List.Item>
                        );
                    })
                }
            </List> 
        )
    }

    render() {
        const user = this.props.user
        const carrera = this.props.carrera
        const soli = this.props.solicitud
        console.log(this.props.usuario)
        return (
            <Card.Group key={soli._id}>
                <Card fluid>
                <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                />
                <Card.Header>{user.nombres + ' ' + user.apellidoPat}</Card.Header>
                <Card.Meta>{carrera.nombre}</Card.Meta>
                <Card.Meta>Folio:  {soli.folio}</Card.Meta>
                <Card.Description>
                    Registro de movimientos:
                    {this.renderLogs(soli.logs)}
                </Card.Description>
                <Button.Group>
                    <Button onClick={this.cancelarData.bind(this)}>Cancelar Solicitud</Button>
                    <Button.Or/>
                    <Button positive onClick={this.generaData.bind(this)}>Aceptar solicitud</Button>
                </Button.Group>
                </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}
Registro.propTypes = {
    user: PropTypes.object,
    usuario:PropTypes.object,
    actualizar: PropTypes.func,
    solicitud: PropTypes.object,
    carrera: PropTypes.object
};

export default Registro
