//Animação menu responsivo
$('.btn-menu, .btn-close').on('click', function () {
    $('.menu').slideToggle('slow');
});

$('nav ul li').click(function () {
    $('.menu').hide();
});

//Scroll menu
$('nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate(
        {
            scrollTop: targetOffset,
        },
        1000
    );
});

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
        name: 'node',
        url: 'https://nodejs.org/pt-br/',
    }, {
        name: 'typescript',
        url: 'https://www.typescriptlang.org/pt/',
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

//Dark Mode
var darkMode;

if (localStorage.getItem('dark-mode')) {
    darkMode = 'light';
} else {
    darkMode = localStorage.getItem('dark-mode');
}

localStorage.getItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
    $('body').addClass('dark');
    $('.dark-button').hide();
    $('.light-button').show();
}


$('.dark-button').on('click', function () {
    $('.dark-button').hide();
    $('.light-button').show();
    $('body').addClass('dark');
    localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function () {
    $('.light-button').hide();
    $('.dark-button').show();
    $('body').removeClass('dark');
    localStorage.setItem('dark-mode', 'light');
});

//Contato
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o nome "google" com uma letra para enviar!')
    }
}
