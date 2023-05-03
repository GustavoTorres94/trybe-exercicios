let x = 5;
let y = 193;
let z = 402;
console.log(z)

console.log(x - y);
console.log(x + y);
console.log(x * y);
console.log(y / x);
console.log(y % 2);

if (x > y) {
    console.log(`${x} é maior que ${y}!!`)
} else if (y > x) {
    console.log(`${y} é maior que ${x}!!`)
} else {
    console.log('Não entendi!!')
};


if (x > y && x > z) {
    console.log(`${x} é maior que ${y} e ${z}!!`)
} else if (y > x && y > z) {
    console.log(`${y} é maior que ${x} e ${z}!!`)
} else if (z > x && z > y) {
    console.log(`${z} é maior que ${x} e ${y}!!`)
} else {
    console.log('N entendi!!')
}

let comp = -5;

if (comp > 0) {
    console.log(`positivE!!!`)
} else if (comp < -1) {
    console.log(`negative!`)
} else {
    console.log('Não entendi!!')
};

let def1 = 3;
let def2 = 10;
let def3 = 5;

if (def1  % 2 ===0 || def2 % 2 ===0 || def3 % 2 === 0) {
    console.log('true')
} else {
    console.log('false')
}

let produtoVlr = 100
let custoProduto = 80

{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (i = 0; i < numbers.length; i += 1) {
        console.log(numbers[i])
    }
}

{
    let soma = 0;
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (i = 0; i < numbers.length; i += 1) {
        soma += numbers[i] 
        console.log(soma)
    }
}

{
let soma = 0;
let media = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i = 0; i < numbers.length; i += 1) {
media = soma += numbers[i] / numbers.length;  
    } if (media > 20) {
        console.log('Valor maioor que 20!') 
    } else if (media <= 20) {
        console.log('Valor menor ou igual a 20!')
    }
}

{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let maiorNun = numbers[0];
    
    for (i = 1; i < maiorNun.length; i += 1) {       
        if (numbers[i] > maiorNun) {
          maiorNun = numbers[i]
    }
    console.log(maiorNun)
}
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        impar = impar + 1
     } else {
        // console.log('Sem numero impar')
     }
     console.log(impar)
    }

    let arrayVazia = [];
    
    for (let i = 1; i < 26; i++) {
        arrayVazia.push(i)
        dividi = arrayVazia / 2
    }
    console.log(arrayVazia)
    let nunDiv = 0;
    for (let d = 0; d < arrayVazia.length; d++) {
        nunDiv = arrayVazia[d] / 2
        console.log(nunDiv)
    }

    let calc = 1;
   
    for (let t = 10; t > 0; t -= 1) {
        calc *= t
    }
console.log(calc)

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addCli(nCliente) {
  if (typeof nCliente === 'string') {
    clientesTrybeBank.push(nCliente);
    return 'client add '
  } else {
    `Erro ao adicionar novo cliente. ${nCliente} não é do tipo string.`
  } 
}
addCli('Zanfas')
console.log(clientesTrybeBank)

let pala = 'Tribo'
let reverse = '';

for (let i = pala.length - 1; i >= 0; i -= 1) {
    reverse += pala[i]    
}
console.log(reverse)

// Para reverter string basta começar da última posição do item e finalizar no index 0. Como começa da última posição ao inves de incrementar
// é necessário fazer o decremento por conta de cada loop.
// antes de tudo se perguntar sobre cada posição do loop. Qual o tamanho do loop ? Se eu fizer o incremento qual é o resultado? 
// Se eu fizer o decremento, qual é o resultado? ( FATORIAL )
// no começo usar a lógica dos i = i - 1 e vice e versa, depois eu resumo o código!! 
// USAR MAIS A LÓGICA,!!!!!! 
// DECLARAR VARIÀVEIS DO QUE EU PRECISOOO SEMPRE!!!!


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let a = 0; a < array.length; a = a + 1) {
    if (array[a].length > maiorPalavra.length) {
        maiorPalavra = array[a]
    }
    console.log(maiorPalavra)
}


let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let p = 1; p < numbers1.length; p = p + 1) {
    for (let s = 0; s < p; s = s + 1) {
        if (numbers1[p] < numbers1[s]) {
            let position = numbers1[p]
            numbers1[p] = numbers1[s]
            numbers1[s] = position
            console.log(position)
        }
    }
}

//#########################################################################################################################
//###### 1 pronto
function verificaPalindromo(palavra) {
    return palavra === palavra.split('').reverse().join('')   
}
verificaPalindromo('desenvolvimento')

//
//2 SEMI PRONTO ##############
const array1 = [2, 3, 6, 7, 10, 1]
const array2 = [9, 1, 3, 5, 7]


function indiceDoMaior(array) {
    let maiorIndex = 0;
    for (let i = 0; i < array.length; i += 1){
        if (array[i] > maiorIndex) {
          maiorIndex = array[i] 
        }
        
    }
    return console.log(maiorIndex)
}
indiceDoMaior(array2)

indiceDoMaior(array2)
// 3 semi prontoooooo #########

const arrayM1 = [2, 3, 6, 7, 10, 1]
const arrayM2 = [2, 4, 6, 7, 10, 0, -3]

function indiceDoMenor(array) {
    let menorIndex = array[0]
    for (let i = 0; i < array.length; i += 1){
        if (array[i] < menorIndex) {
            console.log(menorIndex = array[i])
        }
    }
}
indiceDoMenor(arrayM2)

// 4 pronto

const lista = ['José' , 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra (arrayDeNomes){
    let palavraMaior = arrayDeNomes[0];
    for (let a = 0; a < arrayDeNomes.length; a += 1) {
        if (arrayDeNomes[a].length > palavraMaior.length) {
            palavraMaior = arrayDeNomes[a]
        }
    return maiorPalavra
    }
}
maiorPalavra(lista)

// 5  TODO ERRADO, tem que refazer !!!

const sequencia1 = [2, 3, 2, 5, 8, 2, 3];
const sequencia2 = [2, 3, -2, 3, -2, 2, 3];

function maisRepetidos(arrayDeNumeros){
   
    for (let i = 0; i < arrayDeNumeros.length; i = i + 1) {
        for (let j = 1; j < i; j = j +1){
            let numeroMaisRepetido = arrayDenumeros[0]    
            if (arrayDeNumeros[i] === arrayDeNumeros[i + 1]) {
                numeroMaisRepetido = numeroMaisRepetido + 1 
            }
        }
    }
}
maisRepetidos(sequencia1)

// 6 ################# ta pronto
function somatorio(num) {
    let calc = 0;
    for (let i = 1; i < num + 1; i += 1) {
    calc += i
   }
   return calc
  }
  somatorio(-1)


// 7 ################# NT = Nem tentei ! 
let palavra = 'trybe'


function verificaFimPalavra (string) {
    let ultimasLetras = []
    if (string.split('').splice(3) < 3) {
        ultimasLetras.push()
    }
}
verificaFimPalavra('trybe')

