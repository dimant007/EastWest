/**
 * Created by ditry_000 on 16.04.2015.
 */
(function() {
    $.fn.slider = function(slider) {

        var slidesNumber = $('.b-slideshow-item').size();
        var slideWidth = $('.b-slideshow-item').eq(1).width();
        $('.b-slider-nav li').eq(0).addClass('active');
        var activeSlide = 1;

        $('.b-slider-nav li').click(function () {
            var clickedSlide;
            $('.b-slider-nav li').removeClass('active');
            $(this).addClass('active');
            clickedSlide = $(this).index() + 1;
            $('.b-slideshow-list').animate({
                left: -slideWidth * (clickedSlide - 1) + 'px'
            }, 800);
            activeSlide = $('.b-slider-nav li.active').index() + 1;
        });

        function moveRight() {
            if (activeSlide < slidesNumber) {
                $('.b-slideshow-list').animate({
                    left: '-=0' + slideWidth + 'px'
                }, 800);
                activeSlide++;
                $('.b-slider-nav li').removeClass('active');
                $('.b-slider-nav li').eq(activeSlide - 1).addClass('active');
            } else {
                $('.b-slideshow-list').animate({
                    left: '0px'
                }, 800);
                $('.b-slider-nav li').removeClass('active');
                $('.b-slider-nav li').eq(0).addClass('active');
                activeSlide = $('.b-slider-nav li.active').index() + 1;
            }
        }
        function moveLeft() {
            if (activeSlide > 1) {
                $('.b-slideshow-list').animate({
                    left: '+=0' + slideWidth + 'px'
                }, 800);
                activeSlide--;
                $('.b-slider-nav li').removeClass('active');
                $('.b-slider-nav li').eq(activeSlide - 1).addClass('active');
            } else {
                $('.b-slideshow-list').animate({
                    left: -slideWidth * (slidesNumber - 1) + 'px'
                }, 800);
                $('.b-slider-nav li').removeClass('active');
                $('.b-slider-nav li').eq(-1).addClass('active');
                activeSlide = $('.b-slider-nav li.active').index() + 1;
            }
        }

        var interval = setInterval(moveRight, 5000);

        $('.b-slideshow-area').hover(function () {
            clearInterval(interval);
        }, function () {
            interval = setInterval(moveRight, 5000);
        });


        $('.b-slideshow-right').click(function () {
            moveRight();
        });

        $('.b-slideshow-left').click(function () {
            moveLeft();
        });
    };


})(jQuery);