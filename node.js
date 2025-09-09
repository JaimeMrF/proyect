//----> Practica de NODEJS :) <----//
console.log(`--------\nHello NodeJS\n--------\n`);
//---------------------------------//

let username = 'Jaime';

let age = 18;

let hasHobbies = true;

let streak = [10,20,30];

let user = {
    name: 'Jaime',
    lastname: 'Vega'
}

const pi = 3.1415

console.log(`username: ${username}\nage: ${age}\nTiene hobbies: ${hasHobbies}\nRacha: ${streak}\nUsuario: ${JSON.stringify(user, null, 2)}\nPi: ${pi}`);