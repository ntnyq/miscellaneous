$.SwiperDemo = {
  initHeroSwiper: function() {
    new Swiper('#hero_swiper', {
      autoplay: 10000,
      loop: true,
      speed: 800,
      followFinger: false,
      longSwipesRatio: 0.2,
      roundLengths: true,
      prevButton: '#hero_swiper .swiper-ctrl-prev',
      nextButton: '#hero_swiper .swiper-ctrl-next',
      pagination: '#hero_swiper .swiper-pagination',
      paginationClickable: true,
    })
  },

  initHomeSwiper: function() {
    new Swiper('#home_swiper', {
      speed: 800,
      freeMode: true,
      freeModeMomentumBounceRatio: 3,
      roundLengths: true,
      slidesPerView: 4,
      spaceBetween: 20,
      slidesOffsetBefore: 200,
      slidesOffsetAfter: 200,
      pagination: '#home_swiper_ctrls .swiper-progress',
      paginationType: 'progress',
      prevButton: '#home_swiper_ctrls .swiper-ctrl-prev',
      nextButton: '#home_swiper_ctrls .swiper-ctrl-next',
      lazyLoading: true,
      lazyLoadingInPrevNext: true,
      lazyLoadingInPrevNextAmount: 4,
      lazyLoadingOnTransitionStart: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
    })
  },

  init: function() {
    this.initHeroSwiper()
    this.initHomeSwiper()
  },
}

/**
 * DOM Ready
 */
$(function() {
  $.SwiperDemo.init()
})
