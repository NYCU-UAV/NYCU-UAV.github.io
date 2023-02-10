$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        slidesNavigation: true,
        scrollOverflow: false,
        anchors: ['enter_page', 'home_page', 'team_intro-1', 'team_intro-2', 'project-1', 'project-2', 'project-3', 'project-4', 'UAV-log', 'activities', 'support_us-1', 'support_us-2'],
        menu: '#gradient'
    });
    self.setInterval(function () {
        if (window.location.href.split('#')[1].split('/')[0] == 'enter_page') {
            fullpage_api.moveSlideRight();
        }
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
    $('.carousel').carousel({
        interval: false,
    });
});

function init() {
    $('.info').html("");
    $('.info').css({
        opacity: 0,
        transition: 'opacity 2s'
    });
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

function pgf() {
    $('#gradient').css({
        height: '100vh',
        transition: 'height 2s'
    });
    $('.info').html('<div class="row"><div class="col-3 offset-2" ><img src="./img/logo_circle.png"></div><div class="col-4 offset-1"><div class="text-center" id="slogan">航向天空不能沒有您!<br>支持&贊助我們!</div><div id="link"><img src="./img/mail_icon.png"><a href="mailto:nycuuav@gmail.com">nycuuav@gmail.com</a></div><div id="link"><img src="./img/fb_icon.png"><a href="https://www.facebook.com/NYCUUAVTeam">NYCU UAV</a></div><div id="link"><img src="./img/ig_icon.png"><a href="https://www.instagram.com/nycu_uav/">nycu_uav</a></div></div></div><div class="row text-center" id="address"><img class="col-1 offset-1" src="./img/address_icon.svg"><a href="https://goo.gl/maps/fpL6BARQz45qnjKW6" class="col-9">Address:新竹市東區大學路1001號國立陽明交通大學工程五館331B室</a></div>');
    $('.info').css({
        opacity: 1,
        transition: 'opacity 5s'
    });
}

function nav(page) {
    $('#gradient nav p a img[src="./img/nav_active.png"]').attr('src', './img/nav.png');
    $('#gradient nav p[class~="act"]').removeClass('act');
    if (page.split('-')[0] == 'team_intro') {
        $('#gradient nav p[data-menuanchor="team_intro-1"]').addClass('act');
        $('#gradient nav p[data-menuanchor="team_intro-1"] a img').attr('src', './img/nav_active.png');
    } else if (page.split('-')[0] == 'project') {
        $('#gradient nav p[data-menuanchor="project-1"]').addClass('act');
        $('#gradient nav p[data-menuanchor="project-1"] a img').attr('src', './img/nav_active.png');
    } else if (page.split('/')[0] == 'UAV-log') {
        $('#gradient nav p[data-menuanchor="UAV-log"]').addClass('act');
        $('#gradient nav p[data-menuanchor="UAV-log"] a img').attr('src', './img/nav_active.png');
    } else if (page == 'activities') {
        $('#gradient nav p[data-menuanchor="activities"]').addClass('act');
        $('#gradient nav p[data-menuanchor="activities"] a img').attr('src', './img/nav_active.png');
    } else if (page.split('-')[0] == 'support_us') {
        $('#gradient nav p[data-menuanchor="support_us-1"]').addClass('act');
        $('#gradient nav p[data-menuanchor="support_us-1"] a img').attr('src', './img/nav_active.png');
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

    $('#t' + page.toString() + '+img').attr('src', './img/timeline_dot_active.png');
    $('#t' + page.toString() + '+img').css({
        width: '3vw',
        transition: 'width 1s'
    });

    $('#t' + page.toString()).css('font-size', 'x-large');
}

function main() {
    init();
    page = window.location.href.split('#')[1];
    if (page == 'home_page') {
        pg2();
    } else if (page.split('/')[0] != 'enter_page') {
        pg3();
        nav(page);
        if (page.split('-')[0] == 'project') {
            timeline(page.split('-')[1]);
        } else if (page == 'support_us-2') {
            pgf();
        }
    }
}

$(window).on('load', function () {
    main();
});

$(window).on('hashchange', function () {
    main();
});