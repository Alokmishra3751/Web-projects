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

        }).fromTo('.intro p',{scale:4},{scale:1, top:0 , left:'20%',duration:15})
        // .to('.intro p',{ top:0 , left:'20%' , duration:5},'-=5')
        .from('.intro h1',{opacity:0,scaleX:6 , scaleY:6  ,duration:20})
        .from('.intro h6',{opacity:0 , y:30 , stagger:3 , duration:20})
        .to('.intro-wrapper',{scale:0.5 , transformOrigin:'left left', duration:15})
        .from('.intro-para',{y:40 , opacity:0 , stagger:20 , duration:10})
        .to('.intro-para',{y:-40 , duration:15});



    }); // end document ready function
})(jQuery); // End jQuery