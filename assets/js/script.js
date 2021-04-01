//Menu
class MobileNavbar{
            constructor(mobileMenu, navList, navLinks){
                this.mobileMenu = document.querySelector(mobileMenu);
                this.navList = document.querySelector(navList);
                this.navLinks = document.querySelectorAll(navLinks);
                this.activeClass = 'active';

                this.handleClick = this.handleClick.bind(this);
            }

            animateLinks(){
                this.navLinks.forEach((link, index) => {
                
                    link.style.animation
                        ? (link.style.animation = "")
                        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
                });
            }

            handleClick(){
                this.navList.classList.toggle(this.activeClass);
                this.mobileMenu.classList.toggle(this.activeClass);
                this.animateLinks();
            }

            addClickEvent(){
                this.mobileMenu.addEventListener('click', this.handleClick);
            }

            init(){
                if(this.mobileMenu){
                    this.addClickEvent();
                }
                return this;
            }
        }

        const mobileNavbar = new MobileNavbar(
            '.mobile-menu',
            '.nav-list',
            '.nav-list li',
        );
        mobileNavbar.init();

//Scroll top
$(document).ready(function () {
    var scrollTop = $('.scrollTop');

    $(window).scroll(function () {
        var topPos = $(this).scrollTop();

        //quantidade Y que o botão de scroll vai aparecer
        if (topPos > 500) {
            $(scrollTop).css('opacity', '1');
        } else {
            $(scrollTop).css('opacity', '0');
        }
    });
    //velocidade a animação
    $(scrollTop).click(function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            1300
        );
        return false;
    });
    //Links dos meus conhecimentos
    const techs = [{
        name: 'htmlecss',
        url: 'https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-html-e-css/'
    }, {
        name: 'js',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/',
    }, {
        name: 'sass',
        url: 'https://sass-lang.com/'
    }, {
        name: 'bootstrap',
        url: 'https://getbootstrap.com/',
    }, {
        name: 'reactjs',
        url: 'https://pt-br.reactjs.org/',
    }, {
        name: 'figma',
        url: 'https://www.figma.com/'
    }]

    techs.forEach(tech => {
        $('.' + tech.name).on('click', () => {
            window.open(tech.url)
        })
    });

});


/*
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o nome "google" com uma letra para enviar!')
    }
}*/
