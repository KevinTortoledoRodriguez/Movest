import React, { Component } from 'react'
import { Grid, GridColumn, FormField, GridRow, Button, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Signup extends Component {
    state = { 
        usuario: '', 
        constraseña: '', 
        confirmarContraseña: '', 
        primerNombre: '',
        segundoNombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        genero: ''     
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    generarData(){
        const data = {
            usuario: this.state.usuario,
            constraseña: this.state.constraseña, 
            confirmarContraseña: this.state.confirmarContraseña, 
            primerNombre: this.state.primerNombre,
            segundoNombre: this.state.segundoNombre,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            genero: this.state.genero
        }
        console.log(data)
    }
    render() {
        const {usuario, contraseña, confirmarContraseña, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno} = this.state

        const options = [
            {key: 1, text:'Masculino', value:'Masculino'},
            {key: 2, text:'Femenino', value:'Femenino'}
        ]

        return (
            <GridRow>
                <GridRow>
                <Grid columns={3} relaxed='very'>
                <GridColumn>
                </GridColumn>
                <GridColumn>
                    <FormField> 
                        <Form.Group widths='equal'>
                        <Form.Input fluid label='Usuario' placeholder='Numero de Control'   
                            name='usuario'   
                            value={usuario}  
                            onChange={this.handleChange} />
                        <Form.Input fluid label='Constraseña' placeholder='Contraseña' type='password'     
                            name='contraseña' 
                            value={contraseña}    
                            onChange={this.handleChange} />
                        <Form.Input fluid label='Repetir contraseña' placeholder='Contraseña' type='password' 
                            name='confirmarContraseña' 
                            value={confirmarContraseña}  
                            onChange={this.handleChange} />
                        <Form.Input fluid label='Primer nombre' placeholder='Primer nombre'  
                            name='primerNombre' 
                            value={primerNombre} 
                            onChange={this.handleChange} />
                        <Form.Input fluid label='Segundo nombre' placeholder='Segundo nombre'  
                            name='segundoNombre' 
                            value={segundoNombre} 
                            onChange={this.handleChange} />
                        <Form.Input fluid label='Apellido paterno' placeholder='Apellido paterno'  
                            name='apellidoPaterno' 
                            value={apellidoPaterno} 
                            onChange={this.handleChange} />
                        <Form.Input fluid label='Apellido materno' placeholder='Apellido materno' 
                            name='apellidoMaterno' 
                            value={apellidoMaterno} 
                            onChange={this.handleChange} />
                        <Form.Select
                            fluid
                            label='Genero'
                            name='genero'
                            placeholder='Genero'
                            options={options}
                            onChange={this.handleChange}
                        />
                        <Button primary onClick={this.generarData()}>Aceptar</Button>
                        <Button secondary>Cancelar</Button>
                        <Link to='/Login'>Regresar</Link>
                        </Form.Group>
                    </FormField>
                </GridColumn>
                <GridColumn>
                </GridColumn>
            </Grid>  
                </GridRow>
            </GridRow>
        )
    }
}
