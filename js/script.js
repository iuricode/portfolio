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
});

