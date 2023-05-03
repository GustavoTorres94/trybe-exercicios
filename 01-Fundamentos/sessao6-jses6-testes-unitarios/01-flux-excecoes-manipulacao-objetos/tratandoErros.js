//####################################  ############################### TRATANDO ERROS

/* é a função para testar os proprios códigos nosssos e possui 4 expressões reservadas ( TRY, CATCH, THROW, Finally)
TRY: é um bloco de códigos {} que eu julgo que pode haver um erro, devo colar dentro do Try;
CATCH: sempres associado ao try, casool código que eu coloquei em TRy realmente dÊ um erro, ele joga esse erro em catch <estrutura: catch () {}> 
THROW:  foi criada uma função para jogar o erro que o Catch pegou e que o Try Identificou aqui. o Throw é onde o erro pode ser descrito com uma mensagem de texto
        ou afins, que pode ser personalizada por mim
Finally: è como se fosse o ELSE ou o RETURN, dependendo do resultado de TRY ele retorna a estrutura de erro toda ou passa direto para o FInally. Pode ser
        colocada também a mensagem personalizada.
*/

function tratarErrorELancar(erro) {
    throw new Error('...')
}

function imprimirNomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('FInal!! MEnte!!')
    }
}

const obj = { nome: 'Geraldino'}
imprimirNomeGritado(obj)

// Throw serve para lançar uma exceção encontrado no console.

// a palavra new cria uma cópia de algo nativo do JS 
// Error é um objeto nativo do JS, Qaudno chamo com o new (new Error) gerá uma cópia e eo erro que foi encontrado é jogado lá

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma, caso os parâmetros sejam números
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada por meio da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));

// O bloco try representa o fluxo de quando o código é executado com sucesso.
// Ele tenta fazer a soma de dois valores e verifica, por meio da função verifyIsNumber, se os parâmetros passados são números.
// Se eles forem números, o bloco try realizará a soma.
// Se um dos valores não for um número, o código lançará um erro com o throw, que é capturado pelo bloco catch no fluxo de exceção.
// O catch recebe um parâmetro chamado error e, dessa forma, retorna-se à chave error.message.
// É possível usar qualquer nome, mas error é mais descritivo.
// A propriedade message é nativa do objeto Error e contém a mensagem de erro definida por você ao lançar o erro com o throw.