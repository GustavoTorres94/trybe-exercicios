/*

forEach: executa uma ação determinada por você para cada item do array e não possui retorno;
find: encontra o primeiro elemento que satisfaça alguma condição;
some: retorna true se algum elemento satisfaz alguma condição, caso contrário retorna false;
every: retorna true se todos os elementos corresponderem a uma condição, caso contrário retorna false.


Hofs - High Order Functions - First Class Citziens 

funções que aceitam outras functions como parametro e/ou retornam outras functions

############################### forEach
*/

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

/*
############################### find

Vai perocorrer a Array e encontrar o primeiro item que se encaixe naquilo que estou procurando
o retorno é o valor procurado
retorna somente o primeiro



*/
const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18

// exer find 

const numbers = [19, 21, 30, 3, 45, 22, 15];

numbers.find(e => e % 3 === 0 && e % 5 === 0)

// exer find 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

names.find(e => console.log(e.length == 5));

// exer find 3

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
musicas.find(e => {
    if (e.id === '31031687') {
        console.log(`xablau ${e.id}!!`)
    }
})

// exer find 4