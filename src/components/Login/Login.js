import React, { Component } from 'react'
import { Grid, GridColumn, FormField, FormInput, GridRow, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import Api from '../../libraries/api'
export default class Login extends Component {
    constructor(){
        super()

        this.state = { 
            user: '', 
            password: '',
            logins:[],
            auth:{}    
        }
        this.obtenerLogins= this.obtenerLogins.bind(this);
    }
    
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    obtenerLogins(){
        Api.getMethod({
            url: 'logins',
            success: (response) => {
              this.setState({ logins: response.data });
            },
            fail: (error) => {
              console.log(error)
            }
          })
    }
    componentDidMount(){
        localStorage.setItem('user', JSON.stringify({}))
        this.obtenerLogins();
    }
    auth(){
        const logins = this.state.logins
        const user = {
            "user":this.state.user,
            "password":this.state.password
        }
        logins.map((login) => {
            if(user.user === login.userName ){
                this.setState({auth: login})
                localStorage.setItem('user', JSON.stringify(login))
                window.location='/home'
            }
        })    
    }

    render() {
        const {user, password} = this.state
        return (
            <GridRow>
                <Grid columns={3} relaxed='very'>
                <GridColumn>
                </GridColumn>
                <GridColumn>
                    <FormField>
                        <GridRow>
                            <FormInput fluid label='Usuario' placeholder='Usuario'
                            name='user'
                            value={user}
                            onChange={this.handleChange}/>

                            <FormInput fluid label='Contraseña' placeholder='Contraseña' type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}/>
                        </GridRow>
                        <GridRow>
                            <Button primary onClick={this.auth.bind(this)}>Ingresar</Button>
                            <Button secondary>Cancelar</Button>
                            <Link to='/signup' style={{color: 'black'}}>¿No estas registrado?</Link>
                        </GridRow>
                    </FormField>
                </GridColumn>
                <GridColumn>
                </GridColumn>
                </Grid>  
            </GridRow>  
        )
    }
}
