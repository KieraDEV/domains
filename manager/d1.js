$(domain).connection(function () { 
     < shub.xyz >

/*Made by Kiera*/
/*All rights reserved*/

/*Main*/


$(connection).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
});

# Set Loc to your Adjustment
