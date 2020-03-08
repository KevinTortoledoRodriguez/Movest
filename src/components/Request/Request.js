import React, { Component } from 'react'
import {Grid,GridColumn,GridRow,FormInput, Form, FormGroup, Button, FormSelect, Icon} from 'semantic-ui-react'
import Api from '../../libraries/api'

export class Request extends Component {
    constructor(){
        super()
        this.state= {
            Asignaturas: [{}],
            alumno: {},
            carrera: {},
            carreras: [],
            materias: [],
            materiasCompletas:[],
            materiasSolicitadas:[],
            instituciones: [],
            institucionSolicitada: {},
        }

        this.obtenerAlumno = this.obtenerAlumno.bind(this);
    }
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.obtenerAlumno(user);
    }

    handleChange(e, {value}){
        const materias = JSON.parse(localStorage.getItem('materias')) ? JSON.parse(localStorage.getItem('materias')) : []
        console.log(materias)
        const materia={
            materia:value,
            calificacion:0
        }
        var bandera= false
        if(materias !== []){
            materias.map((mat) => {
                if(mat.materia === materia.materia){
                    bandera = true
                }
            })
            if(bandera === false){
                materias.push(materia)
            }
            localStorage.setItem('materias',JSON.stringify(materias))
        }
        
    };
    guardaInstitucion(e, {name, value}){
        this.setState({institucionSolicitada:value})
    };
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
        Api.getMethod({
            url: 'carreras',
            success: (response) => {
                const alumno = this.state.alumno
                this.setState({carreras:response.data})
                response.data.map((index)=>{
                    if(alumno.carrera === index._id){
                        this.setState({carrera:index})
                        this.setState({materias:index.materias})
                    }
                })
            },
            fail: (error) => {
              console.log(error)
            }
        });
        Api.getMethod({
            url: 'materias',
            success: (response) => {
                const materias = this.state.materias
                const mati = []
                materias.map((materia) => {
                    response.data.map((mate)=>{
                        if(materia.materia === mate._id){
                            console.log(materia.materia, mate._id)
                            mati.push(mate)
                            this.setState({materiasCompletas:mati})
                        }
                    })
                })
            },
            fail: (error) => {
              console.log(error)
            }
        })
        Api.getMethod({
            url: 'instituciones',
            success: (response) => {
                this.setState({instituciones:response.data})
            },
            fail: (error) => {
              console.log(error)
            }
        })
    }
    aumentaAssignaturas(){
        const Asignaturas = this.state.Asignaturas;
        const Asignatura = {}
        Asignaturas.push(Asignatura)
        this.setState({Asignaturas:Asignaturas})
    }
    renderAssignatures(materias){
        const Asignaturas = this.state.Asignaturas 
        const materiasFiltradas= []
        materias.map((mate, index) => {
            const materia = {
                key:mate.nombre,
                value:mate._id,
                text:mate.nombre, 
                clave:mate.clave,
                nombre:mate.nombre,
                creditos:mate.creditos,
                horasTeoricas:mate.horasTeoricas,
                horasPracticas:mate.horasPracticas,
                status:'activo', 
                _id:mate._id
            }
            materiasFiltradas.push(materia)
        })
        return(
            <div>
                {
                    Asignaturas.map((Asig, index) => {
                        return(
                            <FormGroup key={index}>
                                <FormSelect fluid label="Asignatura" options={materiasFiltradas} onChange={this.handleChange} width="6"/>
                            </FormGroup>
                         ) 
                    })
                }
            </div>          
        )
    }
    
    generarSolicitud(){
        const user = this.state.alumno
        const institucionSolicitada = this.state.institucionSolicitada
        const materias = JSON.parse(localStorage.getItem('materias'))
        const Solicitud = {
            alumno: user._id,
            institucionOrigen: user.institucion,
            institucionSolicitada: institucionSolicitada,
            materias: materias,
            logs:[{
                log:'Generada'
            }]
        }
        console.log(Solicitud)
        Api.postMethod({
            url: 'solicitud',
            body: Solicitud,
            success: (response) => {
                console.log('se creo exitosamente')
            },
            fail: (error) => {
              console.log(error)
            }
        })
        localStorage.removeItem('materias')
    }
    render() {
        const user = this.state.alumno
        const carrera = this.state.carrera
        const materias = this.state.materiasCompletas
        const instituciones = this.state.instituciones
        console.log(user, carrera)
        return (
            <Grid>
                <GridRow>
                    <GridColumn width="2"/>
                    <GridColumn width="12">
                        <GridRow>
                            <Form>
                                <FormGroup width="equal">
                                    <h1>Datos personales</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Nombre(s)" value={user.nombres} text={user.nombres} width="6"/>
                                    <FormInput fluid label="Apellido Paterno" value={user.apellidoPat} text={user.apellidoPat} width="6"/>
                                    <FormInput fluid label="Apellido Materno" value={user.apellidoMat} text={user.apellidoMat} width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Fecha de nacimiento" value={user.fechaNacimiento} text={user.fechaNacimiento} width="6"/>
                                    <FormInput fluid label="Estado civil" value={user.estadoCivil} text={user.estadoCivil} width="6" />
                                    <FormInput fluid label="Genero" value={user.genero} text={user.genero} width="6" />
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="CURP" value={user.curp} text={user.curp} width="6"/>
                                    <FormInput fluid label="Corre electronico" value={user.correo} text={user.correo} width="6"/>
                                    <FormInput fluid label="Telefono" value={user.telefono} text={user.telefono} width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Datos academicos</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Carrera" value={carrera.nombre} text={carrera.nombre} width="6"/>
                                    <FormInput fluid label="Plan de estudios" value={user.planEstudio} text={user.planEstudio}  width="6"/>
                                    <FormInput fluid label="Numero de control" value={user.numeroControl} text={user.numeroControl} width="6"/>
                                    <FormInput fluid label="Semestre" value={user.semestre} text={user.semestre} width="6"/>
                                    <FormInput fluid label="Promedio general" value={user.promedio} text={user.promedio} width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Institucion de educacion superior de interes</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormSelect fluid label='Institucion' options={instituciones} onChange={this.guardaInstitucion.bind(this)} width='8'/>
                                    <FormInput fluid label="Pais" placeholder="Mexico" value="Mexico" width="3"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <GridColumn>
                                        <h1>Relacion de asignaturas en movilidad</h1>
                                    </GridColumn>
                                    <GridColumn>
                                        <Button onClick={this.aumentaAssignaturas.bind(this)} icon>
                                            <Icon name="plus"/>
                                        </Button>
                                    </GridColumn>
                                </FormGroup>
                                {this.renderAssignatures(materias)}
                                <FormGroup width= "equal">
                                    <GridColumn>
                                        <Button onClick={this.generarSolicitud.bind(this)} positive>Aceptar</Button>
                                    </GridColumn>
                                </FormGroup>
                            </Form>
                        </GridRow>
                    </GridColumn>
                    <GridColumn width="2" />
                </GridRow>
            </Grid>
        )        
    }
}

export default Request
