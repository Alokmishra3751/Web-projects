$(function(){

   AOS.init({
  useClassNames: true,
  initClassName: false,
  once:true,
  animatedClassName: 'animate__animated',
    });
  
  $('.section-title'). attr('data-aos', 'animate__fadeIn');

  $('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 500);
  }
  });

  

  AOS.refreshHard();

});




