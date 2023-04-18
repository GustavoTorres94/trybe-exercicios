/*
############################################################ eventListener ############################################################
eventos : São o que de fato dão dinamismo na page

pode ser disparado pelo carregamento da page ou ação desenvolvida por mim!

DOM on-event handlers :
alert : popup que dispara quando a page é carregada, ao fim da execução do próprio dom
window.onload : comando para chamar os alertas em forma de pop up

Dom in-line event handlers: Causados pelo usuario 

onclock, onmouseover, mouseout


############################################################## addeventListener ##########################################################

Anote aí 📝: Você pode passar um parâmetro para a sua função que permite acessar diversos atributos do evento, como o target,
o elemento-alvo em que o evento ocorre.
Por exemplo, caso você queira capturar o valor digitado em um input, você pode usar: event.target.value.


após o getelement ou query

.addEventListener('param1', 'param2') => 
---> param1 = o local da ação, vamos dizer assim, onde voce quer que seja disparado o param 2

---> param2 = uma function que vai ser disparada assim que o param1 detectar o evento. 

addEvenListener(eventoDeOrigem) tem 2 ""retornos""
eventoDeOrigem.target = onde foi capturado o evento
eventoDeOrigem.tpe = o tipo de evento utilizado para captura!


## pode ser declarado vários eventos para o mesmo elemento!! ##


*/