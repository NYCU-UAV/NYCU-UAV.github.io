$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        slidesNavigation: true,
        scrollOverflow: false,
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        menu: '#gradient'
    });
    self.setInterval(function () {
        fullpage_api.moveSlideRight();
    }, 9000);
    $('#home').click(function () {
        fullpage_api.moveSectionDown();
    });
    $('#arrow_down').click(function () {
        fullpage_api.moveSectionDown();
    });
    $('#arrow_up').click(function () {
        fullpage_api.moveSectionUp();
    });
});

function init() {
    $('#gradient').css({
        height: '100vh',
        transform: 'translateY(100vh)',
        opacity: 0,
    });
    $('#text').css({
        opacity: 0,
    });
    $('#logo_circle').css({
        width: '25vw',
        margin: '5vh 37.5vw',
    });
    $('#timeline').css({
        transform: 'translateY(-100vh)',
    });
}

function pg2() {
    $('#gradient').removeClass('fixed-top');
    $('#gradient').css({
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'transform 2s, opacity 2s'
    });
    $('#text').css({
        opacity: 1,
        transition: 'opacity 8s'
    });
    $('#gradient nav p').not('#gradient nav p:first').css({
        opacity: 0,
        transition: 'opacity 0s'
    });
}

function pg3() {
    $('#gradient').addClass('fixed-top');
    $('#gradient').css({
        height: '13vh',
        background: 'linear-gradient(white, #0F2540)',
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'height 2s, opacity 2s'
    });
    $('#logo_circle').css({
        width: '10vh',
        margin: '1.5vh 1.5vh',
        opacity: 1,
        transition: 'width 2s, height 2s, margin 2s, opacity 2s'
    });
    $('#gradient nav p').not('#gradient nav p:first').css({
        opacity: 1,
        transition: 'opacity 3s'
    });
}

function nav(page) {
    $('#gradient nav p a img[src="./img/nav_active.png"]').attr('src', './img/nav.png');
    $('#gradient nav p[class="act"]').removeClass('act');
    if (page <= 4) {
        $('#gradient nav p[data-menuanchor="3"]').addClass('act');
        $('#gradient nav p[data-menuanchor="3"] a img').attr('src', './img/nav_active.png');
    } else if (page <= 9) {
        $('#gradient nav p[data-menuanchor="5"]').addClass('act');
        $('#gradient nav p[data-menuanchor="5"] a img').attr('src', './img/nav_active.png');
    } else if (page <= 10) {
        $('#gradient nav p[data-menuanchor="10"]').addClass('act');
        $('#gradient nav p[data-menuanchor="10"] a img').attr('src', './img/nav_active.png');
    } else if (page <= 11) {
        $('#gradient nav p[data-menuanchor="11"]').addClass('act');
        $('#gradient nav p[data-menuanchor="11"] a img').attr('src', './img/nav_active.png');
    } else if (page <= 12) {
        $('#gradient nav p[data-menuanchor="12"]').addClass('act');
        $('#gradient nav p[data-menuanchor="12"] a img').attr('src', './img/nav_active.png');
    }
}

function timeline(page) {
    $('#timeline').css({
        transform: 'translateY(0)',
        transition: 'transform 3s'
    });

    $('#timeline a img[src="./img/timeline_dot_active.png"]').attr('src', './img/timeline_dot.png');
    $('#timeline a img').not('#timeline_arrow').css({
        width: '2vw',
    });

    $('#timeline a p').css('font-size', 'large');

    $('#t20' + (page + 14).toString()).attr('src', './img/timeline_dot_active.png');
    $('#t20' + (page + 14).toString()).css({
        width: '3vw',
        transition: 'width 1s'
    });

    $('#y20' + (page + 14).toString()).css('font-size', 'x-large');
}

function main() {
    init();
    page = window.location.href.split('#')[1] - '0';
    if (page == 2) {
        pg2();
    } else if (page >= 3) {
        pg3();
        nav(page);
        if (page >= 5 && page <= 9) {
            timeline(page);
        }
    }
}

$(window).on('load', function () {
    main();
});

$(window).on('hashchange', function () {
    main();
});