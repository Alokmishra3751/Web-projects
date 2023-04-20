$(document).ready(function(){

  const swiper = new Swiper('.js-slider', {
  // direction: 'vertical',
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    renderBullet: (index, className) => {
      return '<span class="' + className + '"><svg class="circle" width="19" height="19" viewBox="0 0 19 19"><circle cx="9.5" cy="9.5" r="9"></svg></span>';
      /*
       * <svg>のwidth,height,viewBox計算方法【円の半径 × 2 + 線幅】
       * <circle>のcx,cyは<svg>のwidthの半分の値
       * <circle>のrは円の半径
       */
    },
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  speed: 2000,
  autoplay: {
    delay: 3000
  },
});
swiper.on('slideChange', function () {
  this.params.autoplay.delay = 3000;
});

// Fetch countries




});
