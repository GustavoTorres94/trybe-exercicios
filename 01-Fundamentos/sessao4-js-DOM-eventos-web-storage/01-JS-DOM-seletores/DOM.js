/* é a união do HTML com o Javascript. 
 document.getElementById = DOM
 DOM é uma ferramento do JS !! Utilização de Cookie. SelfStorage. LocalStore guarda a informação, mesmo após encerramento do Browser. 
 No dom as paginas da interwebs sao representadas por     nós e objetos

 o que é nós?

 o que é objeto?

 É possível manipular o HTML de duas formas: 
 (1) alterando textos e propriedades de elementos; 
(1) Para alterar o texto de um elemento, é preciso ter acesso a ele.

 (2) criando novos elementos e adicionando-os ao HTML.
 (2) Para adicionar um novo elemento no HTML, é preciso “acoplar” o elemento criado a outro elemento HTML 😉.

 Ferramentas de manipulação DOM:

 document.getElementByID('insira o ID Aqui')  == quando o elemento está associado a um ID <div id='barabam'>
 document.getElementsByClassName('insira a Classe Aqui') == quando estpa associado a uma class <div class="xablau">
 document.getElementByTagName('Insira a TAG aqui')  == vai procurar todos os elementos da tag assiciada <header>???
 document.querySelector('Seletor CSS')  == retorna o primeiro metodo encontrado, não tá muito claro aida
 document.querySelectorAll('Seletor CSS') == vai selecionar todos os elementos CSS correspondentes, (leo usou esse, mas nõa lembro)

 Para recordar 🧠: Um seletor CSS é a primeira informação que faz parte de uma declaração CSS. É um padrão de elementos HTML, como tags,
 ids e classes, que informam ao navegador os elementos que vão receber as aplicações das regras determinadas pelas propriedades
 e pelos valores de estilização.



 da pra fazer importação externa, igual ao que é feito ao CSS
 o script vai no final do body, para poder carregar todos os Elementos HTMl primeiro!

 o que é o DOCUMENT.?
 é o que guarda todas as infos na pagina HTML


###################################################### document.getElementById('ID') ###########################################
Não vai imprimir nenhuma informação fora do console
para exibir deve ser usado o console.log ()

document.seletor('').innerHTML === Seleciona apenas as partes que estão dentro das tags html, exercicio de ler apenas o conteudo, mas vai trazer
                                    todas as modificações e tags que vem no texto 

document.seletor('').innerText === traz os textos com as tags filtradas !!


###################################################### document.getElementsByClassName('Class') ################################

Podem ser aplicadas mais de uma vez em elementos diferentes. 

HTMLcollection = muito parecido com uma array e pode ser acessado por seu index do valor

document.getElemntsByClassName('class') == vai me retornar o HTML collection daquela class especificada

document.getElemntsByClassName('class')[index] = para poder acessar um =??Ou mais??= index daquela HTML collection, para que eu possa modificar

document.getElemntsByClassName('class')[index].innerText = ""  === para alterar a propriedade de texto

document.getElemntsByClassName('class')[index].style. = para acessar as funções de estilo daquele elemento

Para percorrer todos os indices da HYMLCollection é só salvar em uma variável e fazer um loop for,,, sim, até aqui tem for,,, 

let teste = document.getElemntsByClassName('class');
for (let i = = 0; i < teste.length; i++) {
    código do que quer ser feito em cada elemento.
}

pode transformar o HTML Collection em array, assim posso usar todos os comandos de uma array comum
1) primeiro preciso declarar o documents em uma variabel
2) depois uso esse comando: Array.from(variávelQueCrieiNoPasso1)
3) profit

Segundo mode de transformar o HTMLCollection em Array

const sss = document.getElementsByClassName('xablau')
1) faço um spread dessa variable 
2) Arraysss = [...sss]
3) Xablau


########################################################### document.getElementsByTagName('') ####################################

também retorna o HTMLCOLLECTION !! 

o que tem plural pode retornar esse lista???

Mesma lógica do document.getElementsByClassName('class')


############################################################# document.querySelector('Algo') #######################################
retorna um elemento apenas e o primeiro elemento encontrado pelo seletor CSS.

trabalha apenas com seletores CSS

mais flexível 

seletor de ID é #
seletor de class é #
pode ser usado para acessar os indices dentro do # ou . 
ex.:

#idid img{} :       #### dentro de tal id 


############################################################ document.querySelectorAll('algo') ########################################

funciona quase da mesma maneira  que o querrySelector só que retorna uma array com os elementos.
retorna todos os elementos

trabalha nos mesmos moldes do seletores de CSS

retorna um NODELIST, nao um HTMLCollection
Também pode ser transformada em uma Array 


############################################################# document.parentNode('') ##################################################

conseguimos acesssar o elemento pai de um elemento atravas do .parentNode
document.querySelector('aa').parentNode.parentNode

De olho na dica 👀: A propriedade parentNode está presente em todos os elementos HTML.
Note que ela é uma propriedade, não uma função. Por isso, não é executada com parênteses.

previousSibling.: retorna para o elemento irmão anterior, caso tenha. ANTERIOR

nextSibling: avança pra o primeiro elemento da sequencia, caso haja. POSTERIOR pega  o proximo nó, idependente se for elemento(tag) ou não (puro)

firstChild : Encontra o primeiro elemento filho associado

lastChild : encontra o último elemnto filho associado

parentElement: Retorna o elemento-pai. Nesse caso, se o nó-pai não for um elemento HTML, essa propriedade retornará null.

childNodes: Retorna um NodeList com todos os nós filhos.

children: Retorna um HTMLCollection com todos os elementos filhos.

firstElementChild: Retorna o primeiro elemento filho.

lastElementChild: Retorna o último elemento filho.

nextElementSibling: Retorna o próximo elemento. ignora os textos puros e vai para a tag

previousElementSibling: Retorna o elemento anterior.


#################################################################### CRIANDO ELEMENTOS NO HTML !! #############################################


Boa pratica é usar variável pra quase tudo 


createElement('tag')

para criar, pode ser criado qualquer tag que deseharmos, só resta estudar pra saber como !!
o createElement não adiciona nada ao HTML

para adicionar o  elemento criado devemos usar o comando 

appendChild(ELEMENTOFILHO)

é adicionado o elemento filho. então devemos colocar o elemento pai em uma varaável e adicionar o elemento filho como se estivesse recebendo

cuidado pra não substituir!!


 */
