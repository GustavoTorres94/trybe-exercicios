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

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
info['recorrente'] = 'sim' // tem que ter aspas para adicionar a key;
for (let i in info) {
    console.log(info[i])
}  

let info2 = Object.assign({}, info)
console.log(info2)

info2.personagem = 'Tio Patinhas'
info2.origem = "Chirstmas on Bear Mountain, Dell's Four Color Comics #178"
info2.nota = 'O Último MacPatinhas'
info.recorrente = 'Ambos recorrentes!'


console.log(`${info.personagem} e ${info2.personagem}
${info.origem} e ${info2.origem}
${info.nota} e ${info2.origem}
${info.recorrente}`)
// ##############################################################################


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }, 
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
  };

  console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0].titulo}"`)

// #############################################################################################

let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    return console.log(`Olá, ${order.delivery.deliveryPerson}, entrega para: ${order[0]}.`)
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
  }
  
  orderModifier(order);