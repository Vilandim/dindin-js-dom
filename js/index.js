//O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName('header')

console.log(header[0]);

header[0].style.backgroundColor = '#2E948A'

//No menu do header, está faltando o link do item Cursos que deve redirecionar
//para cursos.html
// let link = document.querySelector('nav').firstElementChild
// console.log(link);
// link.href = "/cursos.html"

//Outra forma 
let link2 = document.querySelector('#menu_opcoes nav a:nth-child(1)')
console.log(link2);
link2.setAttribute('href', '/cursos.html')

//Na etapa de depoimentos, o título deveria ser "O que falam sobre nós"
// let depoimento = document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós"
// console.log(depoimento);

//No banner da home, está faltando centralizar os elementos filhos da section que
//tem o id #introducao.
let introducao = document.querySelector("#introducao")
introducao.style.justifyContent = "space-around"

//Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
let blog = document.querySelectorAll(".titulo h3")[1]
console.log(blog);
blog.innerHTML = "Mais conteúdo para você"

//Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

let titulos = document.querySelectorAll('.titulo')
console.log(titulos);
titulos.forEach(item => {
    item.innerHTML = item.innerHTML.toUpperCase()
})

// o botão "ver todos os posts" deve ter um link que direciona para o arquivo
// blog.html
let botaoPost = document.querySelector('#todos_posts')
botaoPost.href = '/blog.html'

// Adicionar um novo curso na section que contém o id
// investimentos_poupando_independencia
let div = document.querySelector('#investimentos_poupando_independencia')
let novoCurso = document.createElement('div')
novoCurso.id = 'independencia'
novoCurso.innerHTML = '<img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">'
+ "<h2>Independência Financeira</h2>" +
 "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>" 
 + '<a class="comecar_agora" href="./curso.html">começar agora</a>'

 div.appendChild(novoCurso)

//  O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
let forms = document.querySelector('#formulario form')

console.log(forms);
forms.setAttribute('action', 'sucesso.html')

//Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
let telefone = document.createElement('input')
telefone.setAttribute("type", "number")
telefone.setAttribute("placeholder", "numero")
let email = document.querySelector('#formulario form')[1]
email.insertAdjacentElement("afterend", telefone)

//O campo de mensagem está ultrapassando o tamanho do elemento pai.Podemos resolver adicionando o atributo box-sizing: border-box
let mensagem = document.querySelector('textarea')
mensagem.style.boxSizing = 'border-box'


//O botão não está do tamanho adequado, precisa ter uma largura maior;
let botao = document.querySelector("#enviar")
botao.style.width = "100px"

//Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.
let comentarios = document.createElement('section')
let mainContato = document.querySelector('main')

let tituloComentarios = document.createElement('h3')
tituloComentarios.innerHTML = 'Comentários'
tituloComentarios.style.color = '#009688'
tituloComentarios.style.fontSize = '30px'
tituloComentarios.style.marginLeft = '50px'

mainContato.appendChild(tituloComentarios)
mainContato.appendChild(comentarios)
comentarios.innerHTML ='<div class="depoimentos">' + '<img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">' + '<p> ”Sed ut perspiciatis unde omnis iste natus error sivoluptatem accusantium doloremque laudantium, totam rem aperiam.”' +
    '<br>' + 
    '<br>' + 'Wally, 25' + '</p>'   + '</div>' +

'<div class="depoimentos">' +
'<img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">' +
'<p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totarem aperiam.”' + 
    '<br>' +
    '<br>' + 
    'Jaden Smith, 23' +  '</p>' +  '</div>' +

'<div class="depoimentos">' +
'<img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">' +
'<p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”' +
    '<br>' +
    '<br>' +
    'Whoopi Goldberg, 37' +
'</p>' + 
'</div>' +

'<div class="depoimentos">' +
'<img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">' +
'<p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”' + '<br>' +  '<br>' + 'Janes Joplin, 29' + 
'</p>' + '</div>' 

comentarios.style.display = 'flex'
comentarios.style.margin = '30px', '50px'
comentarios.style.gap = '20px'
te