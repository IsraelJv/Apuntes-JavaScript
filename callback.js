/*Un callback es una función que se va a ejecutar en un cierto tiempo */

/*
setTimeout(() => {
    console.log('Hola mundo');
},3000); //Se va a ejecutar después de 3 seg.
*/

const getUsuarioId = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Israel'
    }

    setTimeout(() => {
        callback(user);
    }, 1500)
}

getUsuarioId(10, (usuario) => {
    const {id, nombre} = usuario;
    console.log( id, nombre.toUpperCase());
});