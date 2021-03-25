const personajes = [
    { id: 1, nanme: 'vito', lastName: 'corleone', age: 65 },
    { id: 2, nanme: 'michael', lastName: 'corleone', age: 45 },
    { id: 3, nanme: 'franchesco', lastName: 'pintagello', age: 75 },
    { id: 4, nanme: 'tom', lastName: 'hagen', age: 55 },
    { id: 5, nanme: 'vincent', lastName: 'mancini', age: 40 },
    { id: 6, nanme: 'sonny', lastName: 'corleone', age: 48 },
    { id: 7, nanme: 'carlo', lastName: 'rizzi', age: 43 },
    { id: 8, nanme: 'conni', lastName: 'corleone', age: 35 },
    { id: 9, nanme: 'peter', lastName: 'clemenza', age: 76 },
    { id: 10, nanme: 'don', lastName: 'ciccio', age: 80 },
];
//Nombre y Apellido
console.log('nombre y apellido')
const corleones = personajes.map((corle) => corle.nanme + ' ' + corle.lastName)
console.log(corleones)

//familia mancini
console.log('familia mancini')
const mancini = personajes.filter((manci) =>{
    return manci.lastName === 'mancini';
})
console.log(mancini)

// const nombrePersonajes = personajes.map((personaje) => personaje.id + ' ' + personaje.nanme + ' ' + personaje.age)

//Nombre y Apellido
console.log('nombre y apellido')
const nombrePersonajes = personajes.map((personaje) => ({
    nombre: personaje.nanme,
    apellido: personaje.lastName
}))

console.log(nombrePersonajes);

//metodo destructuring
console.log('destructuring')
const destructuringNombre = personajes.map(({lastName, age}) => ({
    lastName,
    age
}))
console.log(destructuringNombre)

//ordenado por edad
console.log('edad mayor')
const mayor = personajes.sort((a,b) => a.age - b.age);
console.log(mayor)

//edad Mayor 
const compareEdad = (acumulador, personaje) => {
    if(acumulador > personaje.age) {
        return acumulador;
    } else {
        return personaje.age;
    }
}
const edadMayor = personajes.reduce(compareEdad);
console.log(edadMayor);

personajes.forEach((personaje) => console.log(personaje.nanme))

// contar numero de apariciones de los apellidos
console.log('veces que aparece el apellido')
let miembroFamilia = {};
personajes.forEach((person) => {
    if (miembroFamilia[person.lastName]){
        miembroFamilia[person.lastName]++;
    } else {
        miembroFamilia[person.lastName] = 1;
    }
})
console.log(miembroFamilia);

console.log('veces que aparecen las edades')
let edades = {};
personajes.forEach((edad) => {
    if (edades[edad.age]) {
        edades[edad.age]++
    } else {
        edades[edad.age] = 1;
    }
})
console.log(edades)

//suma de edades
console.log('suma de las edades')
const totalEdades = personajes.reduce((suma, total) => (suma + total.age), 0)
console.log(totalEdades)


//nuevo dato
console.log('nuevo dato agredago')
const nuevoDato = 
    { id: 11, nanme: 'fredo', lastName: 'corleone', age: 65 };

personajes.push(nuevoDato);
console.log(personajes)

//edades Mayores
console.log('edades mayores de 50')
const mayorEdades = personajes.filter(perso => perso.age >= 50);
const nameEdades = mayorEdades.map((edad) => edad.nanme )
console.log(nameEdades)
console.log(mayorEdades)

//suma de ids
console.log('suma de ids')
const sumIds = personajes.reduce((acc, total) => acc + total.id, 0)
console.log(sumIds)