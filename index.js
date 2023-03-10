function init() {
    $('#info').html("");
    $('#info').css({
        opacity: 0,
    });
    $('#gradient').css({
        height: '100vh',
        transform: 'translateY(100vh)',
        opacity: 0,
    });
    $('#home #text').css({
        opacity: 0,
    });
    $('#gradient #logo_circle').css({
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
    $('#home #text').css({
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
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'height 2s'
    });
    $('#gradient #logo_circle').css({
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
    $('#gradient').addClass('fixed-top');
    $('#gradient').css({
        height: '100vh',
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'height 2s'
    });
    $('#gradient #logo_circle').css({
        width: '10vh',
        margin: '1.5vh 1.5vh',
        opacity: 1,
        transition: 'width 2s, height 2s, margin 2s, opacity 2s'
    });
    $('#gradient nav p').not('#gradient nav p:first').css({
        opacity: 1,
        transition: 'opacity 3s'
    });
    $('#info').load('./info.html');
    $('#info').css({
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
    } else if (page == 'UAV_log') {
        $('#gradient nav p[data-menuanchor="UAV_log"]').addClass('act');
        $('#gradient nav p[data-menuanchor="UAV_log"] a img').attr('src', './img/nav_active.png');
    } else if (page == 'activities') {
        $('#gradient nav p[data-menuanchor="activities"]').addClass('act');
        $('#gradient nav p[data-menuanchor="activities"] a img').attr('src', './img/nav_active.png');
    } else if (page == 'awards') {
        $('#gradient nav p[data-menuanchor="awards"]').addClass('act');
        $('#gradient nav p[data-menuanchor="awards"] a img').attr('src', './img/nav_active.png');
    }
}

function timeline(num) {
    $('#timeline').css({
        transform: 'translateY(0)',
        transition: 'transform 2s'
    });
    if ($('#timeline a img[src="./img/timeline_dot_active.png"]').length > 0) {
        $('#timeline a img[src="./img/timeline_dot_active.png"]').attr('src', './img/timeline_dot.png');
    }
    $('#timeline a img').not('#timeline_arrow').css({
        width: '2vw',
    });

    $('#timeline a p').css('font-size', 'large');

    $('#t' + num + '+img').attr('src', './img/timeline_dot_active.png');
    $('#t' + num + '+img').css({
        width: '3vw',
        transition: 'width 1s'
    });

    $('#t' + num).css('font-size', 'x-large');
}

function main() {
    init();
    page = window.location.href.split('#')[1];
    nav(page);
    if (page == 'home_page') {
        pg2();
    } else if (page == 'support_us') {
        pgf();
    } else if (page.split('/')[0] != 'enter_page') {
        pg3();
        if (page.split('-')[0] == 'project') {
            timeline(page.split('-')[1]);
        }
    }
}

const page_anchors = [['team_intro-1', 'team_intro-2'],
['team_intro-1', 'team_intro-2'],
['team_intro-1', 'team_intro-2'],
['project-1', 'project-2', 'project-3', 'project-4'],
['UAV_log'],
['activities'],
['awards'],
['team_intro-1', 'team_intro-2'],];

const page_hashtag = ['enter_page', 'home_page', 'team_intro', 'project', 'UAV_log', 'activities', 'awards', 'support_us'];

if (!window.location.href.includes('#')) {
    window.location.replace('#enter_page');
}

const page_num = page_hashtag.indexOf(window.location.href.split('#')[1].split('/')[0].split('-')[0]);

$(document).ready(function () {
    for (i = page_anchors[page_num].length - 1; i >= 0; i--) {
        $('#home').after('<div class="section" id="' + i + '">');
        if (page_hashtag[page_num] == 'project') {
            $('#' + i).addClass('project');
        } else if (page_hashtag[page_num] == 'UAV_log') {
            $('#' + i).addClass('log');
        } else if (page_hashtag[page_num] == 'activities') {
            $('#' + i).addClass('gallery');
        }
        $('#' + i).load(page_anchors[page_num][i] + '.html');
    }
    if (page_hashtag[page_num] == 'project') {
        $('#timeline').load('timeline.html');
    }
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        slidesNavigation: true,
        scrollOverflow: false,
        anchors: ['enter_page', 'home_page', ...page_anchors[page_num], 'support_us'],
        menu: '#gradient'
    });
    if (page_anchors[page_num].includes(window.location.href.split('#')[1].split('/')[0])) {
        fullpage_api.silentMoveTo(3);
    }
});

window.onload = function () {
    $('#loading').css('visibility', 'hidden');
    main();
};

$(window).on('hashchange', function () {
    new_page = window.location.href.split('#')[1].split('/')[0];
    if (!(['enter_page', 'home_page', ...page_anchors[page_num], 'support_us'].includes(new_page))) {
        location.reload();
    } else {
        main();
    }
});