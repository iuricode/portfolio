//Animação menu responsivo
$('.btn-menu, .btn-close, .menu ul li a').on('click', function () {
    $('.menu').slideToggle('slow');
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

//Dark Mode
var darkMode;

if (localStorage.getItem('dark-mode')) {
    // if dark mode is not in storage, set variable to 'light'
    darkMode = 'light';
} else {
    // if dark mode is in storage, set variable with that value
    darkMode = localStorage.getItem('dark-mode');
}

// set new localStorage value
localStorage.getItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
    // if the above is 'dark' then apply .dark to the body
    $('body').addClass('dark');
    // hide the 'dark' button
    $('.dark-button').hide();
    // show the 'light' button
    $('.light-button').show();
}

// Toggle dark UI
$('.dark-button').on('click', function () {
    $('.dark-button').hide();
    $('.light-button').show();
    $('body').addClass('dark');
    // set stored value to 'dark'
    localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function () {
    $('.light-button').hide();
    $('.dark-button').show();
    $('body').removeClass('dark');
    // set stored value to 'light'
    localStorage.setItem('dark-mode', 'light');
});
