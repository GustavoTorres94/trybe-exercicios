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

