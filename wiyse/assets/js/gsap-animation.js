(function($) {
    "use strict";

    $(document).on('ready', function() {
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
        end:'bottom center',
        pin: true,
        scrub:1,
        }

        }).from('.intro p',{scale:3 , duration:3})
        .to('.intro p',{ top:0 , left:'20%' , duration:2},'-=3')
        .from('.intro h1',{opacity:0 , duration:.5})
        .from('.intro h1',{scaleX:4 , scaleY:4  ,duration:3} , "-=.4")
        .from('.intro h6',{opacity:0 , y:30 , stagger:.5});


    }); // end document ready function
})(jQuery); // End jQuery