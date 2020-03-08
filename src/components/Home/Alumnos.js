import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {  Grid, GridRow, GridColumn, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Api from '../../libraries/api'
import Panel from './Panel'

export class Alumnos extends Component {
    constructor(){
        super()
        this.state= {
            alumno: {},
            activeItem: ''
        }

        this.obtenerAlumno = this.obtenerAlumno.bind(this);
    }
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.obtenerAlumno(user);
    }

    obtenerAlumno(user){
        Api.getMethod({
            url: 'alumnos',
            success: (response) => {
                response.data.map((index)=>{
                    if(user.usuario === index._id){
                        this.setState({alumno:index})
                    }
                })
            },
            fail: (error) => {
              console.log(error)
            }
        });
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    content(user, usuario){
        if(this.state.activeItem === 'Solicitudes'){
            return(<Panel user={user} actualizar={this.actualizaSolicitud.bind(this)} usuario={usuario}/>)
        } 
    }
    validaTodo(){
        const alumno = this.state.alumno
        console.log(alumno.adeudos.length)
        if(alumno.movilidades >= 3){
            alert('No puedes realizar mas de 3 movilidades.')
        } else {
            if(alumno.adeudos.length >0){
                alert('No puedes generar una solicitud con adeudos')
            } else {
                if(alumno.rcs > 1){
                    alert('No puedes generar una solicitud con mas de una materia en recursamiento')
                }else{
                    window.location='/request'
                }
            }
        }
    }
    actualizaSolicitud(params = {}){
        Api.putMethod({
            url: 'solicitud',
            body: params,
            success: (response) => {
                console.log(params)
            },
            fail: (error) => {
              console.log(error);
            }
        })
    }
    render() {
        const { activeItem } = this.state
        const user = this.props.user
        const tipoAcceso =  ` Tipo de acceso: ${user.tipoLogin}`
        return (
            <Grid>
                <GridRow>
                <GridColumn width={1}></GridColumn>
                    <GridColumn width={5}>
                        <h1>{tipoAcceso}</h1>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={1}></GridColumn>
                    <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item
                        name='Solicitudes'
                        active={activeItem === 'Solicitudes'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item><Link onClick={this.validaTodo.bind(this)} ><h4>Crear solicitud</h4></Link> </Menu.Item>
                    </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={10}>
                    <Segment>
                        {this.content(user, this.props.usuario)}
                    </Segment>
                    </Grid.Column>
                </GridRow>
            </Grid>
        )
    }
}
Alumnos.propTypes = {
    user: PropTypes.object,
    usuario:PropTypes.object
};

export default Alumnos
