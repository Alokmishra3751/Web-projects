$(function(){

   AOS.init({
  useClassNames: true,
  initClassName: false,
  once:true,
  animatedClassName: 'animate__animated',
    });
  
  $('.section-title'). attr('data-aos', 'animate__fadeIn');


  

  AOS.refreshHard();

});




