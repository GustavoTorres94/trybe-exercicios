//1
const girafa = true;
const elefante = true;
const macaco = false;

const compareTrue = (a, b) => a === true && b === true;
compareTrue(girafa, elefante);

//2
const splitSentence = (a1) => a1.split(' ');
splitSentence('go Trybe');

//3
const lista = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const lista2 = ['foguete', 'não', 'tem', 'ré'];
const lista3 = ['captain', 'my', 'captain'];

const concatName = (i) => {
  let primeiro = i[0];
  let ultimo = i[i.length - 1];
  return `${ultimo}, ${primeiro}`;
};

//4
const wins = 3;
const ties = 1;
const footballPoints = (vitorias, empates) => wins * vitorias + ties * empates;
footballPoints(14, 8)

// 5 
const arr = [9, 1, 2, 3, 9, 5, 7];
const arr2 = [0, 4, 4, 4, 9, 2, 1];
const arr3 = [0, 0, 0];

const highestCount = (array, value) => {
  let count = 0;
  array.forEach((i) => (i === value && count++));
  return count;
};
highestCount(arr, 9);

// 6 
const calcTriangleArea = (base, height) => (base * height) / 2;
calcTriangleArea(6, 3);

const calcRectangleArea = (base, height) => base * height;
calcRectangleArea(4, 2);

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return (`O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`);
  } if (form === 'retângulo') {
    return (`O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`);
  } return (`Não foi possível fazer o cálculo, insira uma forma geométrica válida`);
};
calcAllAreas(10, 50, 'retângulo');

// 7
const catAndMouse = (mouse, cat1, cat2) => {
  let g1p = Math.abs(cat1 - mouse);
  let g2p = cat2 - mouse;
  if (g2p < g1p) {
    return (`cat2`);
  } if (g1p < g2p) {
    return (`cat1`);
  } return (`os gatos trombam e o rato foge`);
};

catAndMouse(1, 6, 12);

// 8
const verr = [2, 15, 7, 9, 45];
const verr2 = [7, 9];
const verr3 = [9, 25];
const fizzBuzz = (vetor) => {
  let result = [];
  vetor.forEach((e) => {
    if (e % 3 === 0 && e % 5 === 0) {
      result.push('fizzBuzz');
    } else if (e % 3 === 0) {
      result.push('fizz');
    } else if (e % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  });
  return result;
};
fizzBuzz(verr3);

// 9
const texto = 'hello';
const texto2 = 'How are you today?';
const texto3 = 'This is an encoding test.';
const texto4 = 'go Trybe!';

const convert = (letra) => {
  switch(letra) {
  case 'a': return '1'; break;
  case 'e': return '2'; break;
  case 'i': return '3'; break;
  case 'o': return '4'; break;
  case 'u': return '5'; break;
  default: return letra;
 };
};
const encode = (str) => str.split('').map(letra => convert(letra)).join('');

encode(texto2);

const txt = 'h3 th2r2!';

const deconvert = (letra) => {
  switch(letra) {
  case '1': return 'a'; break;
  case '2': return 'e'; break;
  case '3': return 'i'; break;
  case '4': return 'o'; break;
  case '5': return 'u'; break;
  default: return letra;
 };
};
const decode = (str1) => str1.split('').map(letra => deconvert(letra)).join('');

decode(txt);

// 11
const foneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

const generatePhoneNumber = (arrayPhone) => {
if (arrayPhone.length > 11) {
  return `Array com tamanho incorreto.`
} if (a) {
  // aaaaaaaaaaaaaaaaaaa
}
};

const verifyNumber = (arrayPhone) => {
  arrayPhone.forEach(e => e >= 0 && e <= 9 ? arrayPhone : `não é possível gerar um número de telefone com esses valores'`);  
};
verifyNumber(foneNumber)

const numberCount = (arrayPhone) => {
  let checkNumber = 0;
  for (let a = 0; a < arrayPhone.length; a += 1) {
    for (let b = 0; b < 1; b += 1) {
      if(arrayPhone[a] === arrayPhone[b]) {
        checkNumber += 1;
      }
      if (checkNumber > 2) {
        return `não é possível gerar um número de telefone com esses valores'`
      }
    }
  }
  return arrayPhone; 
};
numberCount(foneNumber)

// 12
const triangleCheck = (lineA, lineB, lineC) => lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC);
triangleCheck(2, 2, 6);

// 13
let u = '1 cachaça, 5 cervejas e 1 copo de vinho';

const hydrate = (s) => {
  let nS = s.split(' ').filter(e => !isNaN(e)).map(v => parseFloat(v)).reduce((a, vl) => a + vl);
  return `${nS} copos de água`;
};
hydrate(u);
