const persona = {
    nombre: 'Israel',
    apellido: 'Jaime',
    edad: 23,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.edad }`;
    }
}
const { nombre, apellido, edad } = persona; //Para objetos se utilizan {}
console.log(nombre, apellido, edad); //Israel Jaime 23


const frutas = ['Papaya','Mango','Limón'];
const [,fruta2,fruta3] = frutas; //Para arreglos se utilizan [] y una , para saltar un elemento.
console.log(fruta2,fruta3); //Mango Limón