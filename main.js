var enviar = document.getElementById("enviar");


botao.addEventListener("click", function(){

    console,log("Botão clicado!");
}
)

var email = "exemplo@dominio.com";

//Expressão regular para validar edereçoes de email.

var regexEmail = '/%¨*_-^~!@#$.´`'

if (regexEmail.test(email)){
    console.log('O email é válido.')
} else {



    console.log('O email é inválido ou não está correto')
}