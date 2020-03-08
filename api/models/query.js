var estudiantes = [
    {
        "numeroControl": "16171511",
        "nombres": "Kevin Andres",
        "apellidoPat": "Tortoledo",
        "apellidoMat": "Rodriguez",
        "fechaNacimiento": "1998-01-03",
        "estadoCivil": "Soltero",
        "genero": "Masculino",
        "planEstudio": "2015",
        "rcs":1,
        "movilidades":0,
        "adeudos": [{"adeudo":null}],
        "curp": "TORK980103HASLRDV06",
        "correo": "catkuroi@gmail.com",
        "telefono": "6671428064",
        "direccion":{
            "calle": "Andador 3",
            "noInterior": "5363",
            "noExterior": null,
            "colonia": null,
            "codigoPostal":"80184",
            "ciudad":"5de4368d37460114b0d7cdae",
            "estado":"5ddcb5dad21f073da8586443"
        },
        "semestre": 7,
        "promedio": 80,
        "idiomas": null,
        "dominio": null,
        "documentosAval":null,
        "institucion":"5de4bb345bf68a2a08e7774b",
        "status": 'Regular'
    }
]
var logins = [

    {
        "userName":"KevinTortoledo",
        "password":"1234",
        "tipoLogin":"Alumno",
        "usuario": "5de4c617598e951de49d3727",
        "status":"activo"
    },
    {
        "userName":"EdnaRocio",
        "password":"1234",
        "tipoLogin":"Empleado",
        "usuario": "5de4bf05946dd0262caf8913",
        "status":"activo"
    },
    {
        "userName":"GuadalupeLopez",
        "password":"1234",
        "tipoLogin":"Empleado",
        "usuario": "5de4bf4e946dd0262caf8914",
        "status":"activo"
    },
    {
        "userName":"AltamiranoGuerra",
        "password":"1234",
        "tipoLogin":"Empleado",
        "usuario": "5de4c05d946dd0262caf8915",
        "status":"activo"
    },
    {
        "userName":"MaestroPrueba",
        "password":"1234",
        "tipoLogin":"Empleado",
        "usuario": "5de4c1317b507b2bb83fed04",
        "status":"activo"
    },
    {
        "userName":"EscolaresAdmin",
        "password":"1234",
        "tipoLogin":"Empleado",
        "usuario": "5de4c1f81936a319305bc3c7",
        "status":"activo"
    }
    
]
var empleados = [
    {
        "nombres": "Edna Rocio",
        "apellidoPaterno":"Barajas",
        "apellidoMaterno":"Tavares",
        "direccion":{
            "calle":"calle prueba",
            "numero":5131,
            "colonia":null,
            "codigoPostal":80184,
            "ciudad":"5de4368d37460114b0d7cdae",
            "estado":"5ddcb5dad21f073da8586443"
        },
        "telefono":null,
        "correo":null,
        "departamento": "5de4baf95bf68a2a08e7774a",
        "puesto": "Coordinadora",
        "carrera": "5de4b363dceda8014c1cab5f",
        "status": "activo"
    },
    {
        "nombres": "Altamirano",
        "apellidoPaterno":"Guerra",
        "apellidoMaterno":"",
        "direccion":{
            "calle":"calle prueba",
            "numero":5131,
            "colonia":null,
            "codigoPostal":80184,
            "ciudad":"5de4369b37460114b0d7cdaf",
            "estado":"5ddcb5f9d21f073da8586444"
        },
        "telefono":null,
        "correo":null,
        "departamento": "5de4baf95bf68a2a08e7774a",
        "puesto": "Coordinador",
        "carrera": "5de4b363dceda8014c1cab5f",
        "status": "activo"
    },
    {
        "nombres": "Guadalupe",
        "apellidoPaterno":"Lopez",
        "apellidoMaterno":"",
        "direccion":{
            "calle":"calle prueba",
            "numero":5131,
            "colonia":null,
            "codigoPostal":80184,
            "ciudad":"5de4368d37460114b0d7cdae",
            "estado":"5ddcb5dad21f073da8586443"
        },
        "telefono":null,
        "correo":null,
        "departamento": "5de4baf95bf68a2a08e7774a",
        "puesto": "Jefe de Departamento",
        "carrera": "5de4b363dceda8014c1cab5f",
        "status": "activo"
    },
    {
        "nombres": "Maestro",
        "apellidoPaterno":"Prueba",
        "apellidoMaterno":"",
        "direccion":{
            "calle":"calle prueba",
            "numero":5131,
            "colonia":null,
            "codigoPostal":80184,
            "ciudad":"5de4369b37460114b0d7cdaf",
            "estado":"5ddcb5f9d21f073da8586444"
        },
        "telefono":null,
        "correo":null,
        "departamento": "5de4c0e7946dd0262caf8916",
        "puesto": "Docente",
        "carrera": "5de4b363dceda8014c1cab5f",
        "status": "activo"
    },
    {
        "nombres": "Escolares Admin",
        "apellidoPaterno":"",
        "apellidoMaterno":"",
        "direccion":{
            "calle":"calle prueba",
            "numero":5131,
            "colonia":null,
            "codigoPostal":80184,
            "ciudad":"5de4368d37460114b0d7cdae",
            "estado":"5ddcb5dad21f073da8586443"
        },
        "telefono":null,
        "correo":null,
        "departamento": "5de4baf05bf68a2a08e77749",
        "puesto": "Admin Escolares",
        "carrera": null,
        "status": "activo"
    }
]
//estados
var estados = [
    { 
        "nombre": "Sinaloa",
        "estatus": "activo"
    },
    {
        "nombre": "Cohahuila",
        "estatus": "activo"
    }
]
// municipios
var municipios = [
    {
        "nombre": "Culiacan",
        "estado": "5ddcb5dad21f073da8586443",
        "status": "activo"
    },
    {
        "nombre": "Saltillo",
        "estado": "5ddcb5f9d21f073da8586444",
        "status": "activo"
    }
]
//colonias
var colonias = [
    {
        "nombre" : "Guadalupe",
        "municipio" : "5de4368d37460114b0d7cdae",
        "status": "activo"
    },
    {
        "nombre": "Tecnologico",
        "municipio" : "5de4369b37460114b0d7cdaf",
        "status": "activo"
    }
]
//materias Sistemas
var materiasSistemas = [
    {
        "clave": "",
        "nombre": "Calculo Diferencial",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Fundamentos de Programacion",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Taller de etica",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Matematicas Discretas",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Taller de Administracion",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Fundamentos de Investigacion",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Taller de Herramientas Intelectuales",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Quimica",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Dibujo Industrial",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Electricidad y Electronica Industrial",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Propiedad de Los Materiales",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Calculo Integral",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Ingenieria en Sistemas",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Probabilidad y Estadistica",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Analisis de la Realidad Nacional",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Taller de Liderazgo",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Metodologia y Normalizacion",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Calculo Vectorial",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Estadistica Inferencial 1",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Estudio del Trabajo 1",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Economia",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Algebra Lineal",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Procesos de Fabricacion",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Fisica",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Investigacion de Operaciones 1",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Estadistica Inferencial 2",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Estudio Del trabajo 2",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Higiene y Seguridad Industrial",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Algoritmos y Lenguajes de Programacion",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Administracion de Proyectos",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Gestion de Costos",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Administracion de Operaciones 1",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Control Estadistico de la Calidad",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Ergonomia",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Desarrollo Sustentable",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Taller de Investigacion 1",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Ingenieria Economica",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Administracion de Las Operaciones 2",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Simulacion",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Administracion Del Mantenimiento",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
    {
        "clave": "",
        "nombre": "Mercadotecnia",
        "creditos": "",
        "horasTeoricas": "",
        "horasPracticas": "",
        "status": "activo"
    },
]
//materias Industrial
var materiasIndustrial = [
    {
        "clave": "INH-1029",
        "nombre": "Taller de Herramientas Intelectuales",
        "creditos": 4,
        "horasTeoricas": 1,
        "horasPracticas": 3,
        "status": "activo"
    },
    {
        "clave": "INC-1025",
        "nombre": "Quimica",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INN-1008",
        "nombre": "Dibujo Industrial",
        "creditos": 6,
        "horasTeoricas": 0,
        "horasPracticas": 6,
        "status": "activo"
    },
    {
        "clave": "INC-1009",
        "nombre": "Electricidad y Electronica Industrial",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1024",
        "nombre": "Propiedad de Los Materiales",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INR-1017",
        "nombre": "Ingenieria en Sistemas",
        "creditos": 3,
        "horasTeoricas": 2,
        "horasPracticas": 1,
        "status": "activo"
    },
    {
        "clave": "AEC-1053",
        "nombre": "Probabilidad y Estadistica",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INQ-1006",
        "nombre": "Analisis de la Realidad Nacional",
        "creditos": 3,
        "horasTeoricas": 1,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1030",
        "nombre": "Taller de Liderazgo",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "AEC-1048",
        "nombre": "Metodologia y Normalizacion",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "AEF-1024",
        "nombre": "Estadistica Inferencial 1",
        "creditos": 5,
        "horasTeoricas": 3,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INJ-1011",
        "nombre": "Estudio del Trabajo 1",
        "creditos": 6,
        "horasTeoricas": 4,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "AEC-1018",
        "nombre": "Economia",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1023",
        "nombre": "Procesos de Fabricacion",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1013",
        "nombre": "Fisica",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1018",
        "nombre": "Investigacion de Operaciones 1",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "AEF-1025",
        "nombre": "Estadistica Inferencial 2",
        "creditos": 5,
        "horasTeoricas": 3,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INJ-1012",
        "nombre": "Estudio Del trabajo 2",
        "creditos": 6,
        "horasTeoricas": 4,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INF-1016",
        "nombre": "Higiene y Seguridad Industrial",
        "creditos": 5,
        "horasTeoricas": 3,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1005",
        "nombre": "Algoritmos y Lenguajes de Programacion",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INR-1003",
        "nombre": "Administracion de Proyectos",
        "creditos": 3,
        "horasTeoricas": 2,
        "horasPracticas": 1,
        "status": "activo"
    },
    {
        "clave": "INC-1001",
        "nombre": "Administracion de Operaciones 1",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INF-1007",
        "nombre": "Control Estadistico de la Calidad",
        "creditos": 5,
        "horasTeoricas": 3,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INF-1010",
        "nombre": "Ergonomia",
        "creditos": 5,
        "horasTeoricas": 2,
        "horasPracticas": 3,
        "status": "activo"
    },
    {
        "clave": "AEC-1037",
        "nombre": "Ingenieria Economica",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1002",
        "nombre": "Administracion de Las Operaciones 2",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1027",
        "nombre": "Simulacion",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "INC-1004",
        "nombre": "Administracion Del Mantenimiento",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
    {
        "clave": "AED-1044",
        "nombre": "Mercadotecnia",
        "creditos": 5,
        "horasTeoricas": 2,
        "horasPracticas": 3,
        "status": "activo"
    },
	 {
        "clave": "INC-1021",
        "nombre": "Planeacion financiera",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
	 {
        "clave": "INC-1022",
        "nombre": "Planeaci�n y dise�o de instalaciones ",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
	 {
        "clave": "INF-1028",
        "nombre": "Sistemas de Manufactura ",
        "creditos": 5,
        "horasTeoricas": 3,
        "horasPracticas": 2,
        "status": "activo"
    },
	 {
        "clave": "INH-1020",
        "nombre": "Log�stica y cadenas de suministro ",
        "creditos": 4,
        "horasTeoricas": 1,
        "horasPracticas": 3,
        "status": "activo"
    },
	 {
        "clave": "INC-1015",
        "nombre": "Gesti�n de los Sistemas de Calidad ",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    },
	 {
        "clave": "AED-1030",
        "nombre": "Formulacion y evaluacion de proyectos ",
        "creditos": 5,
        "horasTeoricas": 2,
        "horasPracticas": 3,
        "status": "activo"
    },
	 {
        "clave": "INC-1015",
        "nombre": "Erlaciones industriales ",
        "creditos": 4,
        "horasTeoricas": 2,
        "horasPracticas": 2,
        "status": "activo"
    }
]
var carreras = [
    {
        "_id": "5de4b363dceda8014c1cab5f",
        "nombre" : "Ingenieria en Sistemas",
        "materias": [
            {"materia":"5de4671074a2de1ea4079c25"},
            {"materia":"5de4672c74a2de1ea4079c26"},
            {"materia":"5de4673374a2de1ea4079c27"},
            {"materia":"5de4673b74a2de1ea4079c28"},
            {"materia":"5de4673b74a2de1ea4079c28"},
            {"materia":"5de4675e74a2de1ea4079c2a"},
            {"materia":"5de4676574a2de1ea4079c2b"},
            {"materia":"5de4676b74a2de1ea4079c2c"},
            {"materia":"5de4676b74a2de1ea4079c2c"},
            {"materia":"5de4677874a2de1ea4079c2e"},
            {"materia":"5de4678074a2de1ea4079c2f"},
            {"materia":"5de4678674a2de1ea4079c30"},
            {"materia":"5de4679374a2de1ea4079c31"},
            {"materia":"5de4679a74a2de1ea4079c32"},
            {"materia":"5de467a174a2de1ea4079c33"},
            {"materia":"5de467a774a2de1ea4079c34"},
            {"materia":"5de467ad74a2de1ea4079c35"},
            {"materia":"5de467b474a2de1ea4079c36"},
            {"materia":"5de467ba74a2de1ea4079c37"},
            {"materia":"5de467c174a2de1ea4079c38"},
            {"materia":"5de467c874a2de1ea4079c39"},
            {"materia":"5de467ce74a2de1ea4079c3a"},
            {"materia":"5de467d574a2de1ea4079c3b"},
            {"materia":"5de467da74a2de1ea4079c3c"},
            {"materia":"5de467e074a2de1ea4079c3d"},
            {"materia":"5de467e674a2de1ea4079c3e"},
            {"materia":"5de467ec74a2de1ea4079c3f"},
            {"materia":"5de467f274a2de1ea4079c40"},
            {"materia":"5de467f774a2de1ea4079c41"},
            {"materia":"5de467fd74a2de1ea4079c42"},
            {"materia":"5de4680374a2de1ea4079c43"},
            {"materia":"5de4680874a2de1ea4079c44"},
            {"materia":"5de4680f74a2de1ea4079c45"},
            {"materia":"5de4681374a2de1ea4079c46"},
            {"materia":"5de4681974a2de1ea4079c47"},
            {"materia":"5de4681e74a2de1ea4079c48"}
        ],
        "status": "activo"
    },
    {
        "nombre": "Ingenieria Industrial",
        "materias":[
            {"materia":"5de4675e74a2de1ea4079c2a"},
            {"materia":"5de4673374a2de1ea4079c27"},
            {"materia":"5de4671074a2de1ea4079c25"},
            {"materia":"5de5581eb4b0e22c5851ae7f"},
            {"materia":"5de4677874a2de1ea4079c2e"},
            {"materia":"5de55836b4b0e22c5851ae81"},
            {"materia":"5de55840b4b0e22c5851ae82"},
            {"materia":"5de5584bb4b0e22c5851ae83"},
            {"materia":"5de4676574a2de1ea4079c2b"},
            {"materia":"5de55855b4b0e22c5851ae84"},
            {"materia":"5de4678674a2de1ea4079c30"},
            {"materia":"5de55867b4b0e22c5851ae86"},
            {"materia":"5de55871b4b0e22c5851ae87"},
            {"materia":"5de5587ab4b0e22c5851ae88"},
            {"materia":"5de4679374a2de1ea4079c31"},
            {"materia":"5de55884b4b0e22c5851ae89"},
            {"materia":"5de5588cb4b0e22c5851ae8a"},
            {"materia":"5de55894b4b0e22c5851ae8b"},
            {"materia":"5de4678074a2de1ea4079c2f"},
            {"materia":"5de558bab4b0e22c5851ae8c"},
            {"materia":"5de558c3b4b0e22c5851ae8d"},
            {"materia":"5de558ccb4b0e22c5851ae8e"},
            {"materia":"5de558d6b4b0e22c5851ae8f"},
            {"materia":"5de558dfb4b0e22c5851ae90"},
            {"materia":"5de558e9b4b0e22c5851ae91"},
            {"materia":"5de558f2b4b0e22c5851ae92"},
            {"materia":"5de558fcb4b0e22c5851ae93"},
            {"materia":"5de55907b4b0e22c5851ae94"},
            {"materia":"5de5590fb4b0e22c5851ae95"},
            {"materia":"5de55918b4b0e22c5851ae96"},
            {"materia":"5de467ad74a2de1ea4079c35"},
            {"materia":"5de55920b4b0e22c5851ae97"},
            {"materia":"5de55929b4b0e22c5851ae98"},
            {"materia":"5de55933b4b0e22c5851ae99"},
            {"materia":"5de55942b4b0e22c5851ae9a"},
            {"materia":"5de5594ab4b0e22c5851ae9b"}
        ]
    }
]

var instituciones = [
    {
        "_id": "5de4bb345bf68a2a08e7774b",
        "nombre": "Instituto Tecnologico de Culiacan",
        "direccion": {
            "calle": "Av. Juan de Dios Batiz",
            "numero": 310,
            "colonia": "5de437d6d32d432a90f6cfe8",
            "codigoPostal": "80220",
            "ciudad": "5de4368d37460114b0d7cdae",
            "estado": "5ddcb5dad21f073da8586443"
        },
        "carreras": [{"carrera":"5de4b363dceda8014c1cab5f"}],
        "telefono": "(667) 713 -17-96",
        "correo": ""
    },
    {
        "_id": "5de4b986dceda8014c1cab87",
        "nombre": "Instituto Tecnologico de Saltillo",
        "direccion": {
            "calle": "Blvd. Venustiano Carranza",
            "numero": 2400,
            "colonia": "5de437e4d32d432a90f6cfe9",
            "codigoPostal": "80220",
            "ciudad": "5de4369b37460114b0d7cdaf",
            "estado": "5ddcb5f9d21f073da8586444"
        },
        "carreras": [{"carrera":"5de4b363dceda8014c1cab5f"}],
        "telefono": "(844) 438-9500",
        "correo": ""
    }
]

var departamentos = [
    {
        "nombre":"Division de Estudios Profesinales",
    },
    {
        "nombre":"Escolares",
    },
    {
        "nombre":"Coordinacion",
    }
]

