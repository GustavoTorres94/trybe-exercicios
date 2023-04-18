/*                                                       WEB SOTRAGE

##################################################### Come cookie é bom !!! ########################################################################

cookie, normalmente acaba com o navegador. Salva determinada informação sobre o user

estrutura

document.cookie = 'key1=valor1'

pode conter mais de uma info em um mesmo cookie

document.cookie = 'key1=valor1'; 'key2=valor2'; 

desde que separdo por ponto e virgula,
para deixar o cookie por mais tempo é necessário atribuir uma data de validade em inglês; comando expires

document.cookie = 'key1=valor1'; 'key2=valor2'; expires = sat, 14 may 2024;

para dizer que o cookie é pertecente a page em questão  é necessário usar o path: 

document.cookie = 'key1=valor1'; 'key2=valor2'; expires = sat, 14 may 2024; path=/';


pode alterar o valor do cookie normalmente reatribuindo ele pelo path 
document.cookie = 'key1=newValue'

para deletar cookies deixa o key com value vazio e defina uma data expires que já passou 

################################################################# web sotorage ######################################################################

possui dois tipos .. localStorage  &&  sessionStorage ::

Aqui vou elencar as igualdades e abaixo será elencado as diferenças de um para o outro: 

Ambos usam os mesmos métodos e as mesmas propriedades.
As diferenças entre eles estão em quanto tempo os dados são armazenados e
se todas as abas podem acessar os dados que estão sendo armazenados.

ambos são entradas de key : 'value'

################################################################### localStorage ::

estrutura:

localStorage.comando('key', 'value')

1) salva arquivos sem data de expires. os dados não serão removidos a não ser que o usuário remova os dados (limpe os cookies frequentemente!)

2) alguns comandos:
- localStorage.length :: mostra o tamanho, como este não tem nada então o retorno é o valor: 0
- localStorage.setItem('firstname', 'Adam'); cria e salva key e value, sendo key = 'firstname' e value = 'Adam'
- localStorage.setItem('lastname', 'Smith'); key = 'lastname' e value = 'Smith'
- localStorage.getItem('lastname'); // prucura e retorna o valor 'Smith'
- localStorage.removeItem('lastname'); remove a entrada referente a key = 'lastname'
- localStorage.clear(); // limpa todas as entradas salvas em localStorage

3) por default salva todos os dados em STRING! (parseInt para transformar em number || JSON.parse() para também transformar em number)

4) caso seja um obejct const obj = {key: value}, para salvar no localStorage, temos que colocar o obj dentro da funcition JSON.stringfy(object) e
    para acessar como objext é so usar o JSON.parse() e transforma o elemento para o typeof de origem
 ?? sera que serve para array e afins ??

    

################################################################## sessionStorage ::

1) salva os dados apenas para a sessão atual. se fechar o Browser as infos vão de cookie sem expires. 

2) alguns comandos:
- sessionStorage.length :: mostra o tamanho, como este não tem nada então o retorno é o valor: 0
- sessionStorage.setItem('firstname', 'Adam'); cria e salva key e value, sendo key = 'firstname' e value = 'Adam'
- sessionStorage.setItem('lastname', 'Smith'); key = 'lastname' e value = 'Smith'
- sessionStorage.getItem('lastname'); // prucura e retorna o valor 'Smith'
- sessionStorage.removeItem('lastname'); remove a entrada referente a key = 'lastname'
- sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage


*/