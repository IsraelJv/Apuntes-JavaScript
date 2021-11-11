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

const getInfoUsuario = async( id ) => { //async transforma una función para que regrese una promesa
    try {
        const empleado = await getEmpleado(id); //await indica que es una promesa
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        throw error; //throw indica que es un error
        //Si se pusiera un return en su lugar, regresaria como algo correcto
        //se manejaría el error pero lo catalogaría como si se estuviera manejando correctamente.
    }
}

const id = 3;

getInfoUsuario( id )
    .then (msg => {
        console.log('Todo bien')
        console.log(msg)
    })
    .catch (err => {
        console.log('Todo mal')
        console.log(err)
    })