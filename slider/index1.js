/**
 * Created by ditry_000 on 16.04.2015.
 */
(function() {

    var sliding = {

        init: function() {

            this.item = $('.b-slideshow-item');
            this.carouselItem = $('.b-slider-nav li');
            this.slidesNumber = $(this.item).size();
            this.slideWidth = $(this.item).eq(1).width();
            $(this.carouselItem).eq(0).addClass('active');
            this.activeSlide = 1;
        },

        right: function() {
            if (this.activeSlide < this.slidesNumber) {
                $('.b-slideshow-list').animate({
                    left: '-=0' + this.slideWidth + 'px'
                }, 800);
                this.activeSlide++;
                $(this.carouselItem).removeClass('active');
                $(this.carouselItem).eq(this.activeSlide - 1).addClass('active');
            } else {
                $('.b-slideshow-list').animate({
                    left: '0px'
                }, 800);
                $(this.carouselItem).removeClass('active');
                $(this.carouselItem).eq(0).addClass('active');
                this.activeSlide = $('.b-slider-nav li.active').index() + 1;
            }
        },

        left: function() {
            if (this.activeSlide > 1) {
                $('.b-slideshow-list').animate({
                    left: '+=0' + this.slideWidth + 'px'
                }, 800);
                this.activeSlide--;
                $(this.carouselItem).removeClass('active');
                $(this.carouselItem).eq(this.activeSlide - 1).addClass('active');
            } else {
                $('.b-slideshow-list').animate({
                    left: -this.slideWidth * (this.slidesNumber - 1) + 'px'
                }, 800);
                $(this.carouselItem).removeClass('active');
                $(this.carouselItem).eq(-1).addClass('active');
                this.activeSlide = $('.b-slider-nav li.active').index() + 1;
            }
        },

        start: function() {
            this.interval = setInterval(this.right(), 5000);
        },

        stop: function() {
            clearInterval(this.interval);
        }
    };

    $.fn.slider = function() {

        sliding.init();

        sliding.start();

        $('.b-slideshow-area').hover(sliding.stop(), sliding.start());

        $('.b-slideshow-right').click(function () {
            sliding.right();
        });

        $('.b-slideshow-left').click(function () {
            sliding.left();
        });
    };

})(jQuery);