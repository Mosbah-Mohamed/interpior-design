$(document).ready(function () {

    // owl carousel

    $('.header .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        smartSpeed: 450,
        animateOut: 'fadeOut',
        items: 1
    })

    //side menu

    $('.menu').on('click', function () {

        $('.side-menu').addClass('open')

        $('.close').on('click', function () {
            $('.side-menu').removeClass('open')
        })

    })

    //toggle between nav-left and nav-top

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 30) {

            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);

        } else {

            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }

    })

    //counter increment

    const counters = document.querySelectorAll('.about .num');
    const delay = 500;

    counters.forEach(counter => {
        const updateCounter = () => {

            const target = counter.getAttribute('data-target');
            const count = +counter.innerText;
            const Speed = target / delay;

            if (count < target) {

                counter.innerText = Math.floor(count + Speed);
                setTimeout(updateCounter, 1)

            } else {

                counter.innerText = target
            }

        }

        updateCounter();
    })


    //count down timer

    let count = $('.countDown').html();

    $('.countDown').countdown('2022/01/01', function (event) {
        $(this).html(event.strftime(count));
    });

    //owl carousel

    $('.brand .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        animateOut: 'fadeOut',
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    //switch between modes
    var link = $('link[data-color="switch"]'),
        logo = $('.logo img');

    $('.fa-moon').on('click',function(){
        if(link.attr('href')=='css/style-dark.css'){

            link.attr('href','css/style-light.css')
            logo.attr('src','images/logo-dark.png')

        }else{
            link.attr('href','css/style-dark.css')
            logo.attr('src','images/logo.png')
        }
    })  

})