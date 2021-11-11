const empleados = [
    {
        id: 1,
        nombre: 'Israel'
    },
    {
        id: 2,
        nombre: 'Aarón'
    },
    {
        id: 3,
        nombre: 'Mauro'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = ( id ) => {
    //Resolve manda a llamar un callback cuando todo se ejecuta correctamente.
    //Reject se ejecutará si se encuentra un error.
    return new Promise(( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
        ( empleado )
            ? resolve ( empleado )
            : reject (`Empleado con id ${ id } no existe`);
    });
}
const getSalario = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        ( salario )
            ? resolve ( salario )
            : reject (`Salario con id ${ id } no existe`);
    });
}


/*    PROMESAS
getEmpleado( id ) //Se ejecuta la promesa
    .then( empleado => console.log(empleado)) //then se ejecuta cuando sea cierta o se cumpla la promesa
    .catch( err => console.log(err));

getSalario( id )
    .then( salario => console.log( salario ))
    .catch( err => console.log(err));
*/

/*  PROMESA ANIDADA
getEmpleado( id ) 
    .then( empleado => {
        getSalario( id )
            .then( salario => console.log(`El empleado ${ empleado } tiene un salario de ${ salario }`))
            .catch( err => console.log(err))
    })  
    .catch( err => console.log(err));
*/
const id = 3;
let nombre;

getEmpleado( id )
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    })
    .then( salario => console.log(`El empleado ${ nombre } tiene un salario de ${ salario }`))
    .catch( err => console.log(err));