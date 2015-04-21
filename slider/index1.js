/**
 * Created by ditry_000 on 16.04.2015.
 */
(function() {
    $.fn.slider = function() {

        var item = $('.b-slideshow-item');
        var carouselItem = $('.b-slider-nav li');
        var slidesNumber = $(item).size();
        var slideWidth = $(item).eq(1).width();
        $(carouselItem).eq(0).addClass('active');
        var activeSlide = 1;

        $(carouselItem).click(function () {
            var clickedSlide;
            $('.b-slider-nav li').removeClass('active');
            $(this).addClass('active');
            clickedSlide = $(this).index() + 1;
            $('.b-slideshow-list').animate({
                left: -slideWidth * (clickedSlide - 1) + 'px'
            }, 800);
            activeSlide = $('.b-slider-nav li.active').index() + 1;
        });

        var sliding = {

            right: function() {
                if (activeSlide < slidesNumber) {
                    $('.b-slideshow-list').animate({
                        left: '-=0' + slideWidth + 'px'
                    }, 800);
                    activeSlide++;
                    $(carouselItem).removeClass('active');
                    $(carouselItem).eq(activeSlide - 1).addClass('active');
                } else {
                    $('.b-slideshow-list').animate({
                        left: '0px'
                    }, 800);
                    $(carouselItem).removeClass('active');
                    $(carouselItem).eq(0).addClass('active');
                    activeSlide = $('.b-slider-nav li.active').index() + 1;
                }
            },

            left: function() {
                if (activeSlide > 1) {
                    $('.b-slideshow-list').animate({
                        left: '+=0' + slideWidth + 'px'
                    }, 800);
                    activeSlide--;
                    $(carouselItem).removeClass('active');
                    $(carouselItem).eq(activeSlide - 1).addClass('active');
                } else {
                    $('.b-slideshow-list').animate({
                        left: -slideWidth * (slidesNumber - 1) + 'px'
                    }, 800);
                    $(carouselItem).removeClass('active');
                    $(carouselItem).eq(-1).addClass('active');
                    activeSlide = $('.b-slider-nav li.active').index() + 1;
                }
            }
        };

        var interval = setInterval(sliding.right, 6000);

        $('.b-slideshow-area').hover(function () {
            clearInterval(interval);
        }, function () {
            interval = setInterval(sliding.right, 6000);
        });

        $('.b-slideshow-right').click(function () {
            sliding.right();
        });

        $('.b-slideshow-left').click(function () {
            sliding.left();
        });
    };

})(jQuery);