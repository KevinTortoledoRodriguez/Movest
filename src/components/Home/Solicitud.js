import React, { Component } from 'react'
import propTypes from 'prop-types'
import {Grid, GridColumn,Card, Image, Button, Modal,ModalHeader, Icon,ModalContent,ModalActions,ModalDescription, FormGroup,FormInput,Form, Table} from 'semantic-ui-react';
import Api from '../../libraries/api'


export class Solicitud extends Component {
    constructor(){
        super()
        this.state = {
            solicitud:{},
            alumno:{},
            carrera:{},
            institucionSolicitada:{},
            materias:[]
        }
        this.obtenerAlumno = this.obtenerAlumno.bind(this);
    }
    componentWillMount(){
        this.obtenerAlumno();
    }
    obtenerAlumno(){
        const solicitudes = this.props.solicitudes
        var alumno = {}


        Api.getMethod({
            url: 'alumnos',
            success: (response) => {
                response.data.map((alu) =>{
                    if(alu._id === solicitudes.alumno){
                        alumno = alu
                        this.setState({alumno: alu})
                    }
                })
            },
            fail: (error) => {
              console.log(error)
            }
          })


        Api.getMethod({
        url: 'carreras',
        success: (response) => {
            response.data.map((carrera) => {
                if(carrera._id === alumno.carrera){
                    this.setState({carrera:carrera})
                }
            })
        },
        fail: (error) => {
            console.log(error)
        }
        });

    
        Api.getMethod({
        url: 'instituciones',
        success: (response) => {
            response.data.map((institucion) => {
                if(institucion._id === this.props.solicitudes.institucionSolicitada){
                    this.setState({institucionSolicitada:institucion})
                }
            })
        },
        fail: (error) => {
            console.log(error)
        }
        });
        
        const mateariasFiltradas = []
        this.props.solicitudes.materias.map((mat, index) => {
            Api.getMethod({
                url:'materias',
                success: (response) => {
                    response.data.map((materia, index) =>{
                        if(materia._id == mat.materia){
                            mateariasFiltradas.push(materia)
                        }
                    })
                },
                fail: (error) => {
                    console.log(error)
                }
            });
        })
        this.setState({materias:mateariasFiltradas})
    }
    showMeDetails(){
        const alumno = this.state.alumno;
        const carrera = this.state.carrera;
        const institucionSolicitada = this.state.institucionSolicitada
        return(
            <Grid>
                <GridColumn width={'1'}/>
                <GridColumn width={'14'}>
                <ModalHeader><h1>Alumno solicitante: <strong>{alumno.numeroControl}</strong></h1></ModalHeader>
                    <ModalContent>
                        <ModalDescription>
                            <Form>
                                <FormGroup width="equal">
                                    <h1>Datos personales</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput readOnly fluid label="Nombre(s)" value={alumno.nombres} width="6"/>
                                    <FormInput readOnly fluid label="Apellido Paterno" value={alumno.apellidoPat} width="6"/>
                                    <FormInput readOnly fluid label="Apellido Materno" value={alumno.apellidoMat} width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput readOnly fluid label="Fecha de nacimiento" value={alumno.fechaNacimiento} width="6"/>
                                    <FormInput readOnly fluid label="Estado civil" width="6" value={alumno.estadoCivil}/>
                                    <FormInput readOnly fluid label="Genero" width="6" value={alumno.genero}/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput readOnly fluid label="CURP" value={alumno.curp} width="6"/>
                                    <FormInput readOnly fluid label="Corre electronico" value={alumno.correo} width="6"/>
                                    <FormInput readOnly fluid label="Telefono" value={alumno.telefono} width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Datos academicos</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput readOnly fluid label="Carrera" value={carrera.nombre} width="6"/>
                                    <FormInput readOnly fluid label="Plan de estudios" value={alumno.planEstudios} width="6"/>
                                    <FormInput readOnly fluid label="Numero de control" value={alumno.numeroControl} width="6"/>
                                    <FormInput readOnly fluid label="Semestre" value={alumno.semestre} width="6"/>
                                    <FormInput readOnly fluid label="Promedio general" value={alumno.promedio} width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Institucion de educacion superior de interes</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput readOnly fluid label="Nombre de la institucion" value={institucionSolicitada.nombre} width="6"/>
                                    <FormInput readOnly fluid label="Pais" value="Mexico" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Relacion de asignaturas en movilidad</h1>
                                </FormGroup>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Asignatura de procedencia</Table.HeaderCell>
                                            <Table.HeaderCell>Clave</Table.HeaderCell>
                                            <Table.HeaderCell>Creditos</Table.HeaderCell>
                                            <Table.HeaderCell>Horas teoricas</Table.HeaderCell>
                                            <Table.HeaderCell>Horas practicas</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.renderMaterias()}
                                    </Table.Body>
                                </Table>       
                            </Form>
                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <GridColumn>
                            <Button primary fluid>
                                Aceptar <Icon name='left chevron' />
                            </Button>
                        </GridColumn>
                    </ModalActions>
                </GridColumn>
                <GridColumn width={'1'}/>
            </Grid>
        )
    }

    renderMaterias(){
        const materias = this.state.materias
        console.log(materias,"solicitud")
        return materias.map((materia, index) => {
            return(
                <Table.Row disabled key={index}>
                    <Table.Cell>{materia.nombre}</Table.Cell>
                    <Table.Cell>{materia.clave}</Table.Cell>
                    <Table.Cell>{materia.creditos}</Table.Cell>
                    <Table.Cell>{materia.horasTeoricas}</Table.Cell>
                    <Table.Cell>{materia.horasPracticas}</Table.Cell>
                </Table.Row>
            )
        })
        
    }
    
    renderButtons(solicitud){
        if(solicitud.status === 'Pendiente' || solicitud.status === 'Por confirmar'){
            return(
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={this.aprobar.bind(this)}>
                        Aprobar
                    </Button>
                    <Button basic color='red' onClick={this.denegar.bind(this)}>
                        Denegar
                    </Button>
                </div>
            )
        }    
    }
    denegar(){
        var solicitud = this.props.solicitudes;
        const institutoOrigen = this.props.user.institucion
        
        if(this.props.user.puesto){
            solicitud.autorizacionCoordinadorOrigen = false
            solicitud.autorizacionCoordinadorDestino = false
            solicitud.autorizacionJefe = false
            solicitud.status = 'Rechazada'
            solicitud.logs.push({ log:'Cancelada'})
        }

        console.log(solicitud)
        this.props.actualizar(solicitud)
    }
    aprobar(){
        var solicitud = this.props.solicitudes;
        const institutoOrigen = this.props.user.institucion
        
        if(this.props.user.puesto !== 'Jefe de Departamento'){
            if(solicitud.institucionOrigen === institutoOrigen){
                if(solicitud.autorizacionCoordinadorOrigen === false){
                    solicitud.autorizacionCoordinadorOrigen = true
                    solicitud.logs.push({log:'Autorizada por coordinador origen'})
                }
            } else {
                if(solicitud.autorizacionCoordinadorOrigen !== false){
                    solicitud.autorizacionCoordinadorDestino = true
                    solicitud.logs.push({log:'Autorizada por coordinador destino'})
                }
            }
            if(solicitud.autorizacionCoordinadorDestino === true && solicitud.autorizacionCoordinadorOrigen === true ){
                solicitud.status = 'Por confirmar'
            }
        } else {
            if(solicitud.autorizacionCoordinadorDestino === true && solicitud.autorizacionCoordinadorOrigen === true){
                solicitud.autorizacionJefe = true
                solicitud.status = 'Aprobada'
                solicitud.logs.push({log: 'Autorizada por jefe de departamento'})
            }
        }
        console.log(solicitud)
        this.props.actualizar(solicitud)
    }

    render() {
        const alumno = this.state.alumno;
        const carrera = this.state.carrera;
        const solicitud = this.props.solicitudes;
        const fecha = solicitud.fecha.substr(0,10)
        return (
            <Card.Group>
                <Card fluid color={solicitud.autorizacionCoordinadorOrigen ? 'red' : 'green'}>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                    />
                    <Card.Header>{ alumno.nombres + '  ' + alumno.apellidoPat}</Card.Header>
                    <Card.Meta>{carrera.nombre}</Card.Meta>
                    <Card.Meta>{'Folio: ' + solicitud.folio}</Card.Meta>
                    <Card.Meta>{'Fecha: ' + fecha}</Card.Meta>
                    <Card.Description>
                        Este alumno ha solicitado una movilidad estudiantil                    
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <div className='ui two buttons'>
                        <Modal trigger={<Button basic color='blue' fluid >Ver informacion</Button>}>
                            {this.showMeDetails()}
                        </Modal>
                    </div>
                    { this.renderButtons(solicitud)}
                </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}

Solicitud.propTypes = {
    solicitudes: propTypes.object,
    user:   propTypes.object,
    actualizar: propTypes.func
}

export default Solicitud
