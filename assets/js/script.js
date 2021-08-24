//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Scroll TOP
$(document).ready(function () {
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    //Quantidade Y que o botão de scroll vai aparecer
    if (topPos > 500) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  //Velocidade a animação
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });
});

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-iuri-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
//Sobre mim delay
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir. <br><br> 1 ano de experiência";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML. <br><br> 1 ano de experiência";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. <br><br> 1 ano de experiência";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe. <br><br> 1 mês de experiência";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Sass (o pré-processador) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass. <br><br> 8 meses de experiência";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. <br><br> 3 meses de experiência";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React. <br><br> 3 meses de experiência";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript. <br><br> 3 meses de experiência";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `Estou convencido de que juntos alcançaremos coisas incríveis.💜<br><br>*passe o mouse no card para ler sobre*`;
  });
}

/*
//Validação captcha do contato
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o nome "google" com uma letra para enviar!')
    }
}*/
