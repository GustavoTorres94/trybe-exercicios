let person = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

person['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(`A jogadora ${person.name} ${person.lastName} tem ${person.age} anos de idade.`)
console.table(person)

console.log(`A jogadora ${person.name} ${person.lastName} foi eleita a melhor do mundo por 6 vezes”.`)

// ############################################################## FOR IN EM OBJECT E ARRAY #########################################################

let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaDeCatupiry: true
}

for (let key in pizzas) { // Mesma estrutura do for normal. o in vai trazer no caso o que eu quero dentro do OBJECT

}

// A DIFERENÇA DO FOR.. IN E FOR.. OF é que o for... in percorre o índice/index do objeto(mas também pode exibir o valor dele)
// e o for... of  percorre o valor do objeto iteráveis, POREM o for... of não pode ser usado em todos os objetos *?* 

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let i in names) {
    console.log(i)
  }
  
  // #########################################################################