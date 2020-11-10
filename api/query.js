var estudiantes = {
    "numeroControl": "16171511",
	"nombres": "Kevin Andres",
	"apellidoPat": "Tortoledo",
	"apellidoMat": "Rodriguez",
	"fechaNacimiento": "1998-01-03",
    "estadoCivil": "Soltero",
    "genero": "Masculino",
    "planEstudio": ""
};

//estados
var estados = [
    { 
        "nombre": "Sinaloa"
    },
    {
        "nombre": "Cohahuila"
    }
]
// municipios
var municipios = [
    {
        "nombre": "Culiacan",
        "estado": "5f97c74c1a525823906eadcf"
    },
    {
        "nombre": "Saltillo",
        "estado": "5f97c78fc962fb2ab4114cbc"
    }
]

//colonias
var colonias = [
    {
        "nombre" : "Guadalupe",
        "municipio" : "5f97cbecc962fb2ab4114cc0"
    },
    {
        "nombre": "Tecnologico",
        "municipio" : "5f97cbfec962fb2ab4114cc1"
    }
]

var materias = [
    {
        "clave": "ACF–0901",
        "nombre": "Cálculo Diferencial",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "ACF – 0902",
        "nombre": "Cálculo Integral",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "ACF – 0903",
        "nombre": "Álgebra Lineal",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "ACF – 0904",
        "nombre": "Cálculo Vectorial",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "ACF – 0905",
        "nombre": "Ecuaciones Diferenciales",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "ACC-0906",
        "nombre": "Fundamentos de Investigación",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "ACA-0907",
        "nombre": "Taller de Ética",
        "creditos": "4",
        "horasTeoricas": "4",
        "horasPracticas": "0",
        "status": "activo"
    },
    
    {
        "clave": "ACD-0908",
        "nombre": "Desarrollo Sustentable",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "ACA-0909",
        "nombre": "Taller de investigación I",
        "creditos": "4",
        "horasTeoricas": "4",
        "horasPracticas": "0",
        "status": "activo"
    },
    
    {
        "clave": "ACA-0910",
        "nombre": "Taller de investigación II",
        "creditos": "4",
        "horasTeoricas": "4",
        "horasPracticas": "0",
        "status": "activo"
    },
    
    {
        "clave": "SCB-1001",
        "nombre": "Administración de Base de Datos",
        "creditos": "5",
        "horasTeoricas": "4",
        "horasPracticas": "1",
        "status": "activo"
    },
    
    {
        "clave": "SCA-1002",
        "nombre": "Administración de redes",
        "creditos": "4",
        "horasTeoricas": "0",
        "horasPracticas": "0",
        "status": "activo"
    },
    
    {
        "clave": "AEC-1008",
        "nombre": "Contabilidad Financiera",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "AED-1026",
        "nombre": "Estructura de Datos",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "AEF-1031",
        "nombre": "Fundamentos de Base de Datos",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "AEC–1034",
        "nombre": "Fundamentos de Telecomunicaciones",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "AEF-1041",
        "nombre": "Matemáticas Discretas",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "AEF-1052",
        "nombre": "Probabilidad y Estadística",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "AEB-1055",
        "nombre": "Programación Web",
        "creditos": "5",
        "horasTeoricas": "4",
        "horasPracticas": "1",
        "status": "activo"
    },
    
    {
        "clave": "AEC-1058",
        "nombre": "Química",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "AEC-1061",
        "nombre": "Sistemas Operativos I",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "AED-1285",
        "nombre": "Fundamentos de Programación",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "AED-1286",
        "nombre": "Programación Orientada a Objetos",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1003",
        "nombre": "Arquitectura de Computadoras",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1004",
        "nombre": "Conmutación y Enrutamiento en Redes de Datos",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1005",
        "nombre": "Cultura Empresarial",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCF-1006",
        "nombre": "Física General",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1007",
        "nombre": "Fundamentos de Ingeniería de Software",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCG-1009",
        "nombre": "Gestión de Proyectos de Software",
        "creditos": "6",
        "horasTeoricas": "3",
        "horasPracticas": "3",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1010",
        "nombre": "Graficación",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1011",
        "nombre": "Ingeniería de Software",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1012",
        "nombre": "Inteligencia Artificial",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1013",
        "nombre": "Investigación de operaciones",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1014",
        "nombre": "Lenguajes de Interfaz",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1015",
        "nombre": "Lenguajes y Autómatas I",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1016",
        "nombre": "Lenguajes y Autómatas II",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1017",
        "nombre": "Métodos numéricos",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1018",
        "nombre": "Principios Eléctricos y Aplicaciones Digitales",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1019",
        "nombre": "Programación Lógica y Funcional",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1021",
        "nombre": "Redes de Computadoras",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1022",
        "nombre": "Simulación",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCC-1023",
        "nombre": "Sistemas Programables",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
    },
    
    {
        "clave": "SCH-1024",
        "nombre": "Taller de Administración",
        "creditos": "4",
        "horasTeoricas": "3",
        "horasPracticas": "1",
        "status": "activo"
    },
    
    {
        "clave": "SCA–1025",
        "nombre": "Taller de base de datos",
        "creditos": "4",
        "horasTeoricas": "4",
        "horasPracticas": "0",
        "status": "activo"
    },
    
    {
        "clave": "SCA–1026",
        "nombre": "Taller de Sistemas Operativos",
        "creditos": "4",
        "horasTeoricas": "4",
        "horasPracticas": "0",
        "status": "activo"
    },
    
    {
        "clave": "SCD-1027",
        "nombre": "Tópicos Avanzados de Programación",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
    },
    {
        "clave": "TIF-1001a",
        "nombre": "Administración de Proyectos",
        "creditos": "3",
        "horasTeoricas": "2",
        "horasPracticas": "5",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1002",
        "nombre": "Administración Gerencial",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIB-1003",
        "nombre": "Administración y Seguridad de Redes",
        "creditos": "5",
        "horasTeoricas": "1",
        "horasPracticas": "4",
        "status": "activo"
        },
        
        {
        "clave": "AEB-1011",
        "nombre": "Desarrollo de Aplicacion para Dispositivos Móviles",
        "creditos": "5",
        "horasTeoricas": "1",
        "horasPracticas": "4",
        "status": "activo"
        },
        
        {
        "clave": "AEF-1032",
        "nombre": "Fundamentos de Programación",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "AEB-1054",
        "nombre": "Programación Orientada a Objetos",
        "creditos": "5",
        "horasTeoricas": "1",
        "horasPracticas": "4",
        "status": "activo"
        },
        
        {
        "clave": "AED-1062",
        "nombre": "Sistemas Operativos II",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
        },
        
        {
        "clave": "AEA-1063",
        "nombre": "Taller de Base de Datos",
        "creditos": "4",
        "horasTeoricas": "0",
        "horasPracticas": "4",
        "status": "activo"
        },
        
        {
        "clave": "TID-1004",
        "nombre": "Análisis de Señales y Sistemas de Comunicación",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1005",
        "nombre": "Arquitectura de Computadoras",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1006",
        "nombre": "Auditoria en Tecnologías de la Información",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1007",
        "nombre": "Bases de Datos Distribuidas",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TID-1008",
        "nombre": "Circuitos Eléctricos y Electrónicos",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1009",
        "nombre": "Contabilidad y Costos",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TID-1010",
        "nombre": "Desarrollo de Emprendedores",
        "creditos": "5",
        "horasTeoricas": "2",
        "horasPracticas": "3",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1011",
        "nombre": "Electricidad y Magnetismo",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TID-1012",
        "nombre": "Estructuras y Organización de Datos",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1013",
        "nombre": "Fundamentos de Redes",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1014",
        "nombre": "Ingeniería de Software",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1015",
        "nombre": "Ingeniería del Conocimiento",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIH-1016",
        "nombre": "Interacción Humano Computadora",
        "creditos": "4",
        "horasTeoricas": "1",
        "horasPracticas": "3",
        "status": "activo"
        },
        
        {
        "clave": "TIP-1017",
        "nombre": "Introducción a las TIC's",
        "creditos": "3",
        "horasTeoricas": "3",
        "horasPracticas": "0",
        "status": "activo"
        },
        
        {
        "clave": "TIE-1018",
        "nombre": "Matemáticas Aplicadas a Comunicaciones",
        "creditos": "4",
        "horasTeoricas": "3",
        "horasPracticas": "1",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1019",
        "nombre": "Matemáticas Discretas I",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1020",
        "nombre": "Matemáticas Discretas II",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1021",
        "nombre": "Matemáticas para la Toma de Decisiones",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1022",
        "nombre": "Negocios Electrónicos I",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1023",
        "nombre": "Negocios Electrónicos II",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIB-1024",
        "nombre": "Programación II",
        "creditos": "5",
        "horasTeoricas": "1",
        "horasPracticas": "4",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1025",
        "nombre": "Redes de Computadoras",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1026",
        "nombre": "Redes Emergentes",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIC-1027",
        "nombre": "Taller de Ingeniería de Software",
        "creditos": "4",
        "horasTeoricas": "2",
        "horasPracticas": "2",
        "status": "activo"
        },
        
        {
        "clave": "TIH-1016",
        "nombre": "Tecnologías Inalámbricas",
        "creditos": "4",
        "horasTeoricas": "1",
        "horasPracticas": "3",
        "status": "activo"
        },
        
        {
        "clave": "TIF-1029",
        "nombre": "Telecomunicaciones",
        "creditos": "5",
        "horasTeoricas": "3",
        "horasPracticas": "2",
        "status": "activo"
        },
]

var carreras = [
    {
        "nombre": "Ingenieria en Sistemas",
        "materias": [
            {"materia": "5f9bc050e516772158afbd9a"},
            {"materia": "5f9bc050e516772158afbd9b"},
            {"materia": "5f9bc050e516772158afbd9c"},
            {"materia": "5f9bc050e516772158afbd9d"},
            {"materia": "5f9bc050e516772158afbd9e"},
            {"materia": "5f9bc050e516772158afbd9f"},
            {"materia": "5f9bc050e516772158afbda0"},
            {"materia": "5f9bc050e516772158afbda1"},
            {"materia": "5f9bc050e516772158afbda2"},
            {"materia": "5f9bc050e516772158afbda3"},
            {"materia": "5f9bc050e516772158afbda4"},
            {"materia": "5f9bc050e516772158afbda5"},
            {"materia": "5f9bc050e516772158afbda6"},
            {"materia": "5f9bc050e516772158afbda7"},
            {"materia": "5f9bc050e516772158afbda8"},
            {"materia": "5f9bc050e516772158afbda9"},
            {"materia": "5f9bc050e516772158afbdaa"},
            {"materia": "5f9bc050e516772158afbdab"},
            {"materia": "5f9bc050e516772158afbdac"},
            {"materia": "5f9bc050e516772158afbdad"},
            {"materia": "5f9bc050e516772158afbdae"},
            {"materia": "5f9bc050e516772158afbdaf"},
            {"materia": "5f9bc050e516772158afbdb0"},
            {"materia": "5f9bc050e516772158afbdb1"},
            {"materia": "5f9bc050e516772158afbdb2"},
            {"materia": "5f9bc050e516772158afbdb3"},
            {"materia": "5f9bc050e516772158afbdb4"},
            {"materia": "5f9bc050e516772158afbdb5"},
            {"materia": "5f9bc050e516772158afbdb6"},
            {"materia": "5f9bc050e516772158afbdb7"},
            {"materia": "5f9bc050e516772158afbdb8"},
            {"materia": "5f9bc050e516772158afbdb9"},
            {"materia": "5f9bc050e516772158afbdba"},
            {"materia": "5f9bc050e516772158afbdbb"},
            {"materia": "5f9bc050e516772158afbdbc"},
            {"materia": "5f9bc050e516772158afbdbd"},
            {"materia": "5f9bc050e516772158afbdbe"},
            {"materia": "5f9bc050e516772158afbdbf"},
            {"materia": "5f9bc050e516772158afbdc0"},
            {"materia": "5f9bc050e516772158afbdc1"},
            {"materia": "5f9bc050e516772158afbdc2"},
            {"materia": "5f9bc050e516772158afbdc3"},
            {"materia": "5f9bc050e516772158afbdc4"},
            {"materia": "5f9bc050e516772158afbdc5"},
            {"materia": "5f9bc050e516772158afbdc6"},
            {"materia": "5f9bc050e516772158afbdc7"}
        ],
        "status": "activo"
    },
    {
        "nombre": "Ingenieria Industrial",
        "materias": [
            {"materia" :"5f9bc050e516772158afbd9a"},
            {"materia" :"5f9bc050e516772158afbd9b"},
            {"materia" :"5f9bc050e516772158afbd9c"},
            {"materia" :"5f9bc050e516772158afbd9d"},
            {"materia" :"5f9bc050e516772158afbd9e"},
            {"materia" :"5f9bc050e516772158afbd9f"},
            {"materia" :"5f9bc050e516772158afbda0"},
            {"materia" :"5f9bc050e516772158afbda1"},
            {"materia" :"5f9bc050e516772158afbda2"},
            {"materia" :"5f9bc050e516772158afbda3"},
            {"materia" :"5f9bc050e516772158afbda8"},
            {"materia" :"5f9bc050e516772158afbdab"},
            {"materia" :"5f9bc050e516772158afbdac"},
            {"materia" :"5f9bc050e516772158afbdae"},
            {"materia" :"5f9bc050e516772158afbdc8"},
            {"materia" :"5f9bc050e516772158afbdc9"},
            {"materia" :"5f9bc050e516772158afbdca"},
            {"materia" :"5f9bc050e516772158afbdcb"},
            {"materia" :"5f9bc050e516772158afbdcc"},
            {"materia" :"5f9bc050e516772158afbdcd"},
            {"materia" :"5f9bc050e516772158afbdce"},
            {"materia" :"5f9bc050e516772158afbdcf"},
            {"materia" :"5f9bc050e516772158afbdd0"},
            {"materia" :"5f9bc050e516772158afbdd1"},
            {"materia" :"5f9bc050e516772158afbdd2"},
            {"materia" :"5f9bc050e516772158afbdd3"},
            {"materia" :"5f9bc050e516772158afbdd4"},
            {"materia" :"5f9bc050e516772158afbdd5"},
            {"materia" :"5f9bc050e516772158afbdd6"},
            {"materia" :"5f9bc050e516772158afbdd7"},
            {"materia" :"5f9bc050e516772158afbdd8"},
            {"materia" :"5f9bc050e516772158afbdd9"},
            {"materia" :"5f9bc050e516772158afbdda"},
            {"materia" :"5f9bc050e516772158afbddb"},
            {"materia" :"5f9bc050e516772158afbddc"},
            {"materia" :"5f9bc050e516772158afbddd"},
            {"materia" :"5f9bc050e516772158afbdde"},
            {"materia" :"5f9bc050e516772158afbddf"},
            {"materia" :"5f9bc050e516772158afbde0"},
            {"materia" :"5f9bc050e516772158afbde1"},
            {"materia" :"5f9bc050e516772158afbde2"},
            {"materia" :"5f9bc050e516772158afbde3"},
            {"materia" :"5f9bc050e516772158afbde4"},
            {"materia" :"5f9bc050e516772158afbde5"},
            {"materia" :"5f9bc050e516772158afbde6"},
            {"materia" :"5f9bc050e516772158afbde7"},
            {"materia" :"5f9bc050e516772158afbde8"},
            {"materia" :"5f9bc050e516772158afbde9"}
        ],
        "status": "activo"
    }
]

var instituciones = [
    {
        "nombre":"Instituto Tecnologico de Culiacan",
        "direccion": {
            "calle":"Juan de Dios Batiz",
            "numero": 310,
            "colonia":"5f97ced4298fd63f40e29717",
            "codigoPostal":"80220",
            "ciudad":"5f97cbfec962fb2ab4114cc1",
            "estado":"5f97c74c1a525823906eadcf"
        },
        "carreras":[
            {"carrera": "5f9bdf3ae4d5b90978b62a80"},
            {"carrera": "5f9be99e1e2d8e35a09f41db"}
        ],
        "telefono": "6677133804",
        "correo": "webmaster@culiacan.tecnm.mx"
    },
    {
        "nombre": "Instituto Tecnlogico de Saltillo",
        "direccion": {
            "calle": "Venustiano Carranza",
            "numero": 2400,
            "colonia": "5f97cee0298fd63f40e29718",
            "codigoPostal": "25280",
            "ciudad":"5f97cbecc962fb2ab4114cc0",
            "estado":"5f97c78fc962fb2ab4114cbc";
        },
        "carreras":[
            {"carrera": "5f9bdf3ae4d5b90978b62a80"},
            {"carrera": "5f9be99e1e2d8e35a09f41db"}
        ],
        "telefono": "(844)4389500",
        "correo":""
    }
]

var departamentos = [
    {
        "nombre": "Coordinacion sistemas",
        "institucion": "5fa36eb5604bc80aa0e10ded"
    },
    {
        "nombre": "Coordinacion industrial",
        "institucion": "5fa36eb5604bc80aa0e10ded"
    },
    {
        "nombre": "Division de estudios profesionales",
        "institucion": "5fa36eb5604bc80aa0e10ded"
    },
    {
        "nombre": "Servicios escolares",
        "institucion": "5fa36eb5604bc80aa0e10ded"
    },
    {
        "nombre": "Subdireccion academica",
        "institucion": "5fa36eb5604bc80aa0e10ded"
    },


    {
        "nombre": "Coordinacion sistemas",
        "institucion": "5fa37071604bc80aa0e10dee"
    },
    {
        "nombre": "Coordinacion industrial",
        "institucion": "5fa37071604bc80aa0e10dee"
    },
    {
        "nombre": "Division de estudios profesionales",
        "institucion": "5fa37071604bc80aa0e10dee"
    },
    {
        "nombre": "Servicios escolares",
        "institucion": "5fa37071604bc80aa0e10dee"
    },
    {
        "nombre": "Subdireccion academica",
        "institucion": "5fa37071604bc80aa0e10dee"
    },
]

var empleados = [
    {
        "nombres": "Dinorah",
        "apellidoPaterno": "Meza",
        "apellidoMaterno": "Garcia",
        "correo": "se_culiacan@tecnm.mx",
        "institucion": "5fa36eb5604bc80aa0e10ded",
        "departamento": "5fa374b2d012ad453404f620",
        "puesto": "Jefesita"
    },
    {
        "nombres": "David",
        "apellidoPaterno": "Noriega",
        "apellidoMaterno": "Urquidez",
        "correo": "acad_culiacan@tecnm.mx",
        "institucion": "5fa36eb5604bc80aa0e10ded",
        "departamento": "5fa374b8d012ad453404f621",
        "puesto": "Subdirector"
    },
    {
        "nombres": "Carlos Rafael",
        "apellidoPaterno": "Lizarraga",
        "apellidoMaterno": "Arreola",
        "correo": "divestudios@itculiacan.edu.mx",
        "institucion": "5fa36eb5604bc80aa0e10ded",
        "departamento": "5fa374a9d012ad453404f61f",
        "puesto": "Jefaso"
    },
    {
        "nombres": "Gabriela",
        "apellidoPaterno": "Sanchez",
        "apellidoMaterno": "Angulo",
        "correo": "coorindustrial@itculiacan.edu.mx",
        "institucion": "5fa36eb5604bc80aa0e10ded",
        "departamento": "5fa374a3d012ad453404f61e",
        "puesto": "Coordinadora"
    },
    {
        "nombres": "Edna Rocio",
        "apellidoPaterno": "Barajas",
        "apellidoMaterno": "Olivas",
        "correo": "coorsistemas@itculiacan.edu.mx",
        "institucion": "5fa36eb5604bc80aa0e10ded",
        "departamento": "5fa374a3d012ad453404f61e",
        "puesto": "Coordinadora"
    },


    {
        "nombres": "Teresita del Rosario",
        "apellidoPaterno": "Borrego",
        "apellidoMaterno": "Jimenez",
        "correo": "tborrego@itsaltillo.edu.mx",
        "institucion": "5fa37071604bc80aa0e10dee",
        "departamento": "5fa374b2d012ad453404f620",
        "puesto": "Jefesita"
    },
    {
        "nombres": "Antonio",
        "apellidoPaterno": "Escobedo",
        "apellidoMaterno": "Bocardo",
        "correo": "abocardo@itsaltillo.edu.mx",
        "institucion": "5fa37071604bc80aa0e10dee",
        "departamento": "5fa374b8d012ad453404f621",
        "puesto": "Subdirector"
    },
    {
        "nombres": "Ismael",
        "apellidoPaterno": "Luevano",
        "apellidoMaterno": "Martinez",
        "correo": "iluevano@itsaltillo.edu.mx",
        "institucion": "5fa37071604bc80aa0e10dee",
        "departamento": "5fa374a9d012ad453404f61f",
        "puesto": "Jefaso"
    },
    {
        "nombres": "Eduardo",
        "apellidoPaterno": "Marroquin",
        "apellidoMaterno": "Espinoza",
        "correo": "emarroquin@itsaltillo.edu.mx",
        "institucion": "5fa37071604bc80aa0e10dee",
        "departamento": "5fa374a3d012ad453404f61e",
        "puesto": "Coordinador"
    },
    {
        "nombres": "Juan Fraustro",
        "apellidoPaterno": "De la O",
        "apellidoMaterno": "",
        "correo": "jfraustro@itsaltillo.edu.mx",
        "institucion": "5fa37071604bc80aa0e10dee",
        "departamento": "5fa3749bd012ad453404f61d",
        "puesto": "Coordinador"
    },
]

var logins = [
    {
        "userName":"ktortoledo",
        "password":"123123",
        "tipoLogin":"Estudiante",
        "usuario":"5f97cf28298fd63f40e29719"
    },
    {
        "userName":"eRocio",
        "password":"123123",
        "tipoLogin":"Empleado",
        "usuario":"5fa382f92742a604dc077e61"
    }
]