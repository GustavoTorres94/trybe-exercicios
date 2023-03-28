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
