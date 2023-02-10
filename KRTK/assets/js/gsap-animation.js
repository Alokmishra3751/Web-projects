(function($) {
    "use strict";

    $(document).on('ready', function() {
    
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 20 ){
            $('.navbar').addClass('scrollUp');
        }
        else{
            $('.navbar').removeClass('scrollUp');
        }

    });   


        gsap.registerPlugin(ScrollTrigger);

    //for collapsible header issue on mobile - don't  want it to refresh() on resize
  
    ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
    });

    // Intro Animation
    gsap.timeline({
        scrollTrigger: {
        trigger: ".intro",    
        start: "top top",
        end:"1500s",
        pin: true,
        scrub:1,
        }

        }).fromTo('.intro p',{scale:3},{scale:1, color:'#ccc', top:0 ,duration:10})
        .from('.intro h1',{opacity:0,scaleX:6 , scaleY:6  ,duration:10})
        .to('.intro h1 span',{rotate:180 , duration:.3})
        .from('.icons-container',{opacity:0})
        .from('.card-icon img',{scale:0 , transformOrigin:'center center', stagger:1 , duration:1})
        .from('.intro h4',{y:30, opacity:0 , duration:1},'-=.3')
        .to('.intro',{scale:.95 , duration:5});      

    
    // Landing page 2
    gsap.timeline({
        scrollTrigger: {
        trigger: ".landing-2",    
        start: "top top",
        end:"1500s",
        pin: true,
        scrub:1,
        }
    }).to('.hand',{y:-50 , x:-50 })
    .fromTo('.service-btn button',{backgroundColor:'#077248',duration:.2},{backgroundColor:'#2fcf8f'})
    .to('.hand',{opacity:0})
    .to('.element-wrap',{scale:1, duration:10})
    .from('.ui-svg',{opacity:0 , scale:0.4 , transformOrigin:'center center' , duration:10},'-=5') 
    .to('.service-btn',{top:'60px' , duration:5})
    .from('.para-wrap h5',{y:30 , opacity:0 , stagger:3 , duration:5} , '-=3')
    .to('.para-wrap',{opacity:0, duration:1})
    .from('.big-words h3',{opacity:0 , y:30 , stagger:10 , duration:10},'-=.7')
    .to('.ui-svg',{y:-20 , duration:15})

    }); // end document ready function
})(jQuery); // End jQuery