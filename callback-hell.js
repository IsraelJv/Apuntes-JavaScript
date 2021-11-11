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

// ctrl + }  = comentar código

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id )?.nombre; //e es cada uno de los objetos del arreglo.
    if( empleado )
        callback (null, empleado); //Se pone null para decir que no hay error cuando se ejecuta el código.
    else
        callback (`Empleado con id ${ id } no existe`);
}

const getSalario = ( id , callback ) => {
    const salario = salarios.find( s => s.id === id)?.salario; //Si existe salario entonces salario.salario
    //donde el primer salario es el objeto {id:1,salario:1500}
    //el segundo salario es al atributo del objeto 1500
    if( salario ) //Si no es undefined o si existe.
        callback (null, salario);
    else
        callback (`El salario con id ${ id } no se encuentra`);
}


getEmpleado( 5 , ( err, empleado ) => {
    if( err ) //null es considerado como false en js y por eso no entra en este bloque de código.
        return console.log( err );
    
    getSalario( 3, (err, salario) => {
        if( err )
            return console.log( err );
        console.log(`El empleado ${ empleado } tiene un salario de ${ salario }`);
    })
})

