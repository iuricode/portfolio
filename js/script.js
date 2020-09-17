//Animação menu responsivo
$('.btn-menu').click(function () {
    $('.menu').show();
});

$('.btn-close').click(function () {
    $('.menu').hide();
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
            1000
        );
        return false;
    });
    //Links dos meus conhecimentos
    const techs = [{
        name: 'html5',
        url: 'https://html5.org/'
    }, {
        name: 'css',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    }, {
        name: 'js',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference',
    }, {
        name: 'sass',
        url: 'https://sass-lang.com/'
    }, {
        name: 'bs',
        url: 'https://getbootstrap.com/',
    }, {
        name: 'react',
        url: 'https://pt-br.reactjs.org/',
    }, {
        name: 'materialize',
        url: 'https://materializecss.com/',
    }, {
        name: 'ui',
        url: 'https://figma.com/'
    }]

    techs.forEach(tech => {
        $('.' + tech.name).on('click', () => {
            window.open(tech.url)
        })
    });

});

