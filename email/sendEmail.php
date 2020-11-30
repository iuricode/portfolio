<?php

//Captura variáveis com ajax pelo método POST
$email = $_POST['email'];
$nome = $_POST['nome'];
$mensagem = $_POST['mensagem'];

//Define para quem vai o email
$to = "afa00.papa@gmail.com";

//Configuração de cabeçalho
$headers =  "Content-Type:text/html; charset=UTF-8\n";  //Tipagem de conteúdo
$headers .= "From:  iuricode.com <contato@iuricode.com>\n";  //E-mail que aparecerá no provedor que o receber
$headers .= "X-Sender:  <contato@iuricode.com>\n"; //Teoricamente o e-mail com o mesmo domínio do seu site (mas não é necessário)
$headers .= "X-Mailer: PHP  v".phpversion()."\n";  //Versão do PHP para o browser receber e o servidor interpretar
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";   //O ip do servidor [mas isto é automático]
$headers .= "Return-Path:  <contato@iuricode.com>\n"; //Caso a mensagem volte ela voltará no nome de 'contato@iuricode.com' dando pra configurar uma msg padrão depois
$headers .= "MIME-Version: 1.0\n";  //Versão da tipagem MIME

//Conteúdo e-mail
$subject = "E-mail portfólio - Iuricode"; //Assunto que aparecerá na sua caixa de e-mail
$templateHTML = '<table style="margin-top: 3em; margin-bottom: 3em; font-family: "Times New Roman", Times, serif;" align="left" border="0" cellpadding="0" cellspacing="0" width="600" height="auto">
<tr>
 <td style="padding: .75em">
  <span style="font-size: 1.25em; font-weight: bold; text-transform: uppercase;">Nome:</span>
  <span style="margin-left: .5em; font-size: 1.25em">'.$nome.'</span>
 </td>
</tr>
<tr>
 <td style="padding: .75em">
  <span style="font-size: 1.25em; font-weight: bold; text-transform: uppercase;">Email:</span>
  <span style="margin-left: .5em; font-size: 1.25em">'.$email.'</span>
 </td>
</tr>
<tr>
 <td style="padding: .75em">
    <span style="font-size: 1.25em; font-weight: bold; text-transform: uppercase;">Mensagem:</span><br>
    <span style="display:block; padding-top: .75em; font-size: 1.25em">'.$mensagem.'</span>
 </td>
</tr>
</table>';
$body = $templateHTML; //Só um templatezinho muito bobo que fiz para conseguir visualizar a mensagem de forma organizada 

mail($to, $subject, $body, $headers); //Função que enviará todas as informações do site para o seu e-mail
?>
