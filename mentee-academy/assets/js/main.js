'use strict';
$(document).ready(function(){


    AOS.init({
    startEvent:'load',
    useClassNames: true,
    initClassName: false,
    once:true,
    animatedClassName: 'animate__animated',
    });

   $(window).on('scroll',function(){
        if($(this).scrollTop() > 20){
            $('.navbar').addClass('bg-change');
        }
        else{
            $('.navbar').removeClass('bg-change');
        }
   });  

   $('.exams img'). attr('data-aos' , 'animate__zoomIn');  

	$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });

   AOS.refreshHard();  
 });  