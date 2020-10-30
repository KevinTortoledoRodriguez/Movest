const materiasModel = require('../models/materias')

class materiasController {
    guardar(req, res) {
      //Creacion de una sola materia por postman
        /*const nuevo = new materiasModel({
            clave: req.body.clave,
            nombre: req.body.nombre,
            creditos: req.body.creditos,
            horasTeoricas: req.body.horasTeoricas,
            horasPracticas: req.body.horasPracticas,
            status: req.body.status
        });
        nuevo.save((error, data) => { 
          if(error){
              return res.status(500).json({error});
          } else {
              return res.status(201).json({data: data})
          }
      });*/

      //Creacion de un metodo que se encarga de llenar todas los registros predefinidos de las materias. 
      //solo mandar un post para activarlo
      
      materiasModel.insertMany([
          {
            clave: 'ACF–0901',
            nombre: 'Cálculo Diferencial',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'ACF – 0902',
            nombre: 'Cálculo Integral',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'ACF – 0903',
            nombre: 'Álgebra Lineal',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'ACF – 0904',
            nombre: 'Cálculo Vectorial',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'ACF – 0905',
            nombre: 'Ecuaciones Diferenciales',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'ACC-0906',
            nombre: 'Fundamentos de Investigación',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'ACA-0907',
            nombre: 'Taller de Ética',
            creditos: 4,
            horasTeoricas: 4,
            horasPracticas: 0,
            status: 'activo'
          },
          
          {
            clave: 'ACD-0908',
            nombre: 'Desarrollo Sustentable',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'ACA-0909',
            nombre: 'Taller de investigación I',
            creditos: 4,
            horasTeoricas: 4,
            horasPracticas: 0,
            status: 'activo'
          },
          
          {
            clave: 'ACA-0910',
            nombre: 'Taller de investigación II',
            creditos: 4,
            horasTeoricas: 4,
            horasPracticas: 0,
            status: 'activo'
          },
          
          {
            clave: 'SCB-1001',
            nombre: 'Administración de Base de Datos',
            creditos: 5,
            horasTeoricas: 4,
            horasPracticas: 1,
            status: 'activo'
          },
          
          {
            clave: 'SCA-1002',
            nombre: 'Administración de redes',
            creditos: 4,
            horasTeoricas: 0,
            horasPracticas: 0,
            status: 'activo'
          },
          
          {
            clave: 'AEC-1008',
            nombre: 'Contabilidad Financiera',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'AED-1026',
            nombre: 'Estructura de Datos',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'AEF-1031',
            nombre: 'Fundamentos de Base de Datos',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'AEC–1034',
            nombre: 'Fundamentos de Telecomunicaciones',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'AEF-1041',
            nombre: 'Matemáticas Discretas',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'AEF-1052',
            nombre: 'Probabilidad y Estadística',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'AEB-1055',
            nombre: 'Programación Web',
            creditos: 5,
            horasTeoricas: 4,
            horasPracticas: 1,
            status: 'activo'
          },
          
          {
            clave: 'AEC-1058',
            nombre: 'Química',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'AEC-1061',
            nombre: 'Sistemas Operativos I',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'AED-1285',
            nombre: 'Fundamentos de Programación',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'AED-1286',
            nombre: 'Programación Orientada a Objetos',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1003',
            nombre: 'Arquitectura de Computadoras',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1004',
            nombre: 'Conmutación y Enrutamiento en Redes de Datos',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1005',
            nombre: 'Cultura Empresarial',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCF-1006',
            nombre: 'Física General',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1007',
            nombre: 'Fundamentos de Ingeniería de Software',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCG-1009',
            nombre: 'Gestión de Proyectos de Software',
            creditos: 6,
            horasTeoricas: 3,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1010',
            nombre: 'Graficación',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1011',
            nombre: 'Ingeniería de Software',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1012',
            nombre: 'Inteligencia Artificial',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1013',
            nombre: 'Investigación de operaciones',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1014',
            nombre: 'Lenguajes de Interfaz',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1015',
            nombre: 'Lenguajes y Autómatas I',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1016',
            nombre: 'Lenguajes y Autómatas II',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1017',
            nombre: 'Métodos numéricos',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1018',
            nombre: 'Principios Eléctricos y Aplicaciones Digitales',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1019',
            nombre: 'Programación Lógica y Funcional',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1021',
            nombre: 'Redes de Computadoras',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1022',
            nombre: 'Simulación',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCC-1023',
            nombre: 'Sistemas Programables',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'SCH-1024',
            nombre: 'Taller de Administración',
            creditos: 4,
            horasTeoricas: 3,
            horasPracticas: 1,
            status: 'activo'
          },
          
          {
            clave: 'SCA–1025',
            nombre: 'Taller de base de datos',
            creditos: 4,
            horasTeoricas: 4,
            horasPracticas: 0,
            status: 'activo'
          },
          
          {
            clave: 'SCA–1026',
            nombre: 'Taller de Sistemas Operativos',
            creditos: 4,
            horasTeoricas: 4,
            horasPracticas: 0,
            status: 'activo'
          },
          
          {
            clave: 'SCD-1027',
            nombre: 'Tópicos Avanzados de Programación',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          {
            clave: 'TIF-1001a',
            nombre: 'Administración de Proyectos',
            creditos: 3,
            horasTeoricas: 2,
            horasPracticas: 5,
            status: 'activo'
          }, 
          {
            clave: 'TIC-1002',
            nombre: 'Administración Gerencial',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIB-1003',
            nombre: 'Administración y Seguridad de Redes',
            creditos: 5,
            horasTeoricas: 1,
            horasPracticas: 4,
            status: 'activo'
          },
          
          {
            clave: 'AEB-1011',
            nombre: 'Desarrollo de Aplicacion para Dispositivos Móviles',
            creditos: 5,
            horasTeoricas: 1,
            horasPracticas: 4,
            status: 'activo'
          },
          
          {
            clave: 'AEF-1032',
            nombre: 'Fundamentos de Programación',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'AEB-1054',
            nombre: 'Programación Orientada a Objetos',
            creditos: 5,
            horasTeoricas: 1,
            horasPracticas: 4,
            status: 'activo'
          },
          
          {
            clave: 'AED-1062',
            nombre: 'Sistemas Operativos II',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'AEA-1063',
            nombre: 'Taller de Base de Datos',
            creditos: 4,
            horasTeoricas: 0,
            horasPracticas: 4,
            status: 'activo'
          },
          
          {
            clave: 'TID-1004',
            nombre: 'Análisis de Señales y Sistemas de Comunicación',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1005',
            nombre: 'Arquitectura de Computadoras',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1006',
            nombre: 'Auditoria en Tecnologías de la Información',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1007',
            nombre: 'Bases de Datos Distribuidas',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TID-1008',
            nombre: 'Circuitos Eléctricos y Electrónicos',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1009',
            nombre: 'Contabilidad y Costos',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TID-1010',
            nombre: 'Desarrollo de Emprendedores',
            creditos: 5,
            horasTeoricas: 2,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1011',
            nombre: 'Electricidad y Magnetismo',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TID-1012',
            nombre: 'Estructuras y Organización de Datos',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1013',
            nombre: 'Fundamentos de Redes',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1014',
            nombre: 'Ingeniería de Software',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1015',
            nombre: 'Ingeniería del Conocimiento',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIH-1016',
            nombre: 'Interacción Humano Computadora',
            creditos: 4,
            horasTeoricas: 1,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'TIP-1017',
            nombre: 'Introducción a las TICs',
            creditos: 3,
            horasTeoricas: 3,
            horasPracticas: 0,
            status: 'activo'
          },
          
          {
            clave: 'TIE-1018',
            nombre: 'Matemáticas Aplicadas a Comunicaciones',
            creditos: 4,
            horasTeoricas: 3,
            horasPracticas: 1,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1019',
            nombre: 'Matemáticas Discretas I',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1020',
            nombre: 'Matemáticas Discretas II',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1021',
            nombre: 'Matemáticas para la Toma de Decisiones',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1022',
            nombre: 'Negocios Electrónicos I',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1023',
            nombre: 'Negocios Electrónicos II',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIB-1024',
            nombre: 'Programación II',
            creditos: 5,
            horasTeoricas: 1,
            horasPracticas: 4,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1025',
            nombre: 'Redes de Computadoras',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1026',
            nombre: 'Redes Emergentes',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIC-1027',
            nombre: 'Taller de Ingeniería de Software',
            creditos: 4,
            horasTeoricas: 2,
            horasPracticas: 2,
            status: 'activo'
          },
          
          {
            clave: 'TIH-1016',
            nombre: 'Tecnologías Inalámbricas',
            creditos: 4,
            horasTeoricas: 1,
            horasPracticas: 3,
            status: 'activo'
          },
          
          {
            clave: 'TIF-1029',
            nombre: 'Telecomunicaciones',
            creditos: 5,
            horasTeoricas: 3,
            horasPracticas: 2,
            status: 'activo'
          },
        ])
        .then(function(){ 
          console.log("Data inserted")  // Success 
      }).catch(function(error){ 
          console.log(error)      // Failure 
      });
    }
    leer(req, res){
        materiasModel.find((error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(200).json({ data: data });
          }
        });
    }
    buscar(req, res){
        if(req.params.dato === '-'){
          this.leer(req, res)
        }
        else{
          const query = new RegExp(req.params.dato, 'i')
    
          alumnosModel.find({
            $or: [
                {clave: { $regex: query}},
                {nombre: { $regex: query}},
                {creditos: { $regex: query}},
                {horasTeoricas: { $regex: query}},
                {horasPracticas: { $regex: query}},
                {status: { $rege: queryx}}
            ], status: 'activo'}, (error, data) => {
            if(error){
              return res.status(500).json({ error })
            }
            else{
              return res.status(200).json({ data: data })
            }
          });
        }
    }
}

module.exports = materiasController