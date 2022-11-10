const nombre = 'Eduard';
const apellido = 'Eduawrds'
const estudiante = `${nombre} ${apellido}`;
const estudianteMayus = estudiante.toLocaleUpperCase();
const estudianteMinus = estudiante.toLocaleLowerCase();
const numLetras = estudiante.length();
const primNom = nombre[0];
const ultiNom = apellido[-1];
let espacioEstudiante = estudiante.join();
const estudianteNombre = estudiante.includes(nombre);
/*
//sin errores
const nombre = "Eduard"
const apellido = "Eduawrds"
const estudiante = `${nombre} ${apellido}`
const estudianteMayus = estudiante.toLocaleUpperCase()
const estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMayus+estudianteMinus)
const numLetras = estudiante.length()
const primNom = nombre[0]
const ultiNom = apellido[-1]
console.log(numLetras)
console.log(primNom)
console.log(ultiNom)
let espacioEstudiante = estudiante.join()
const estudianteNombre = estudiante.includes(nombre)
console.log(espacioEstudiante)
console.log(estudianteNombre)
*/