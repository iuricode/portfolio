//Aqui em cima você pode fazer uma validação para seu captcha da forma que quiser, caso ele já tenha sido preenchido você ativaria a função do ajax, se não, subiria o alert que usou
const captchaCampo = document.querySelector('#campo').value;
const captchaLetra = 'g';

//transforma a entrada em minúscula para não diferenciar o 'G' do 'g'
// if(captchaCampo.toLowerCase() != captchaLetra){
//     console.log('errado')
// }
// else{
//      //Função a ser nomeada posteriormente
//     requisicaoAjax();
// }

//Enviar formulário AJAX

// Seleciona o formulário
const formulario = document.querySelector('#contato');

//Função do jQuery e Ajax para fazer a requisição


jQuery(document).ready(function(){          //Inicia a leitura do DOM
    //Adiciona o evento 'onsubmit' ao formulário e previne o evento de envio padrão do botão 'submit'
    jQuery(formulario).submit(function(e){  
        e.preventDefault();

        //Aqui o JS (jQuery) irá capturar os valores dos inputs preenchidos no formulário. Criamos uma variável para cada input a fim de saber exatamente os valores passados para o form [por isso a adição das tags name]
        var email = $('[name="email"]').val();
        var nome  = $('[name="nome"]').val();
        var mensagem   = $('[name="mensagem"]').val();

        //Criamos uma URL para especificar ao ajax o que queremos que seja capturado
        var urlDados = 
        "&email=" + email 
        + "&nome=" + nome 
        + "&mensagem=" + mensagem;

        //Inicia a função ajax
        jQuery.ajax({
            async: true,    //opção para requisição assíncrona
            type: "POST",   //método utilizado para enviar os dados do formulário na requisição
            url: "email/sendEmail.php",   //arquivo cujos dados serão enviados
            dataType: "html",   //qual o tipo de dado que será enviado [aqui pode ser JSON, XML, CSV etc](mas html sempre é a melhor opção pois fica mais fácil de manipular com strings puras)
            data: urlDados,     //qual será a resposta esperada pelo servidor
            success: function(data)     //função caso ocorra tudo certo (passamos como parâmetro a URL que queremos)
            {
                //Exibir no alert a resposta da requisição
                alert(`Requisição enviada! Resposta do servidor: \n ${data}`);
            },
            error: function()
            {
                //Exibir no alert a resposta da requisição
                alert('Erro ao enviar requisição');
            }
        });
        //Reinicia a requisição
        return false;
    });
});
