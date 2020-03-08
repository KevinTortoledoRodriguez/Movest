import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Menu, Segment, Container } from 'semantic-ui-react'
import Pendientes from './Pendientes.js';
import PorConfirmar from './PorConfirmar.js';
import Rechazadas from './Rechazadas.js';
import Aprobadas from './Aprobadas.js';
import Terminadas from './Terminadas.js';
import Api from '../../libraries/api'
import propTypes from 'prop-types'

export class Coordinador extends Component {
    constructor(){
        super()

        this.state = { 
            activeItem: '',
            user: {},
            solicitudes: []
        }
        this.obtenerUser = this.obtenerUser.bind(this);
        this.obtenerSolicitudes = this.obtenerSolicitudes.bind(this);
    }
    

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    obtenerUser(){
        const user = JSON.parse(localStorage.getItem('user'))
        Api.getMethod({
            url: 'empleados',
            success: (response) => {
                response.data.map((empleado, index) => {
                    if(empleado._id === user.usuario){
                        this.setState({ user: empleado });
                    }
                })
            },
            fail: (error) => {
              console.log(error)
            }
          })
        this.setState({user: user})
    }
    obtenerSolicitudes(){
        Api.getMethod({
            url: 'solicitud',
            success: (response) => {
                this.setState({solicitudes:response.data})
            },
            fail: (error) => {
              console.log(error)
            }
          })
    }
    aprobarSolicitud(params = {}){
        Api.putMethod({
            url: 'solicitud',
            body: params,
            success: (response) => {
                console.log(params)
              console.log(response);
              this.obtenerSolicitudes();
            },
            fail: (error) => {
              console.log(error);
            }
        })
    }
    componentWillMount(){
        this.obtenerUser();
        this.obtenerSolicitudes();
    }

    content (){
        const solicitudes = this.state.solicitudes;

        if(this.state.activeItem ==='Pendientes'){
            return(
                <Pendientes user={this.props.user} actualizar={this.aprobarSolicitud.bind(this)} solicitudes={solicitudes} />
            )
        } else if(this.state.activeItem ==='Por confirmar'){
            return(
                <PorConfirmar user={this.props.user} actualizar={this.aprobarSolicitud.bind(this)} solicitudes={solicitudes} />
            )
        } if(this.state.activeItem ==='Rechazadas'){
            return(
                <Rechazadas user={this.props.user} solicitudes={solicitudes}/>
            )
        } if(this.state.activeItem ==='Aprobadas'){
            return(
                <Aprobadas user={this.props.user} solicitudes={solicitudes} />
            )
        } if(this.state.activeItem ==='Terminadas'){
            return(
                <Terminadas user={this.props.user} solicitudes={solicitudes} />
            )
        }
    }

    render() {
        const user = this.state.user
        const { activeItem } = ''
        return (
            <Grid>
                <GridRow>
                <GridColumn width={1}></GridColumn>
                    <GridColumn width={5}>
                        <h1>Tipo Acceso: {user.puesto}</h1>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={1}></GridColumn>
                    <Grid.Column width={4}>
                    <Menu fluid vertical>
                        <Menu.Item
                        name='Pendientes'
                        active={activeItem === 'Pendientes'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Por confirmar'
                        active={activeItem === 'Por confirmar'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Rechazadas'
                        active={activeItem === 'Rechazadas'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Aprobadas'
                        active={activeItem === 'Aprobadas'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Terminadas'
                        active={activeItem === 'Terminadas'}
                        onClick={this.handleItemClick}
                        />
                    </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={10}>
                    <Segment>
                        {this.content()}
                    </Segment>
                    </Grid.Column>
                </GridRow>
            </Grid>
        )
    }
}
Coordinador.propTypes = {
    user: propTypes.object
}
export default Coordinador
