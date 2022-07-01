

  ScrollTrigger.matchMedia({
    //desktop
    "(min-width:991px)": function(){

    gsap.timeline({
    scrollTrigger: {
    trigger: "#main-section",
    scroller:'body',
    start: "top top",
    pin: true,
    end:"bottom top",
    scrub:1.5


    }
  })
  .to('.pr-img',2,{x:'-49.9%',y:'-50%',width:'292px' , height:'225px' })  
  .to('.rotateLeft',1,{rotation:20},'-=2')
  .to('.rotateRight',1,{rotation:-20},'-=2')
   
  .to('.rotateLeft, .rotateRight',1,{rotation: 0},'-=1') 
   
  .to('.phone',1,{scale:1 , y:'0%'},'-=1')
  .to('.hulk-left',5,{x:'100%',opacity:.2},'-=.5')
  .to('.hulk-right',5,{x:'-100%',opacity:.2},'-=.5')
  .to('.pr-img, .magic-bg',{display:'none'},'-=5')
  .to('.ui-images img',.2,{opacity:1 , delay:1})
  .to('.circle',1,{scale:1})
  .fromTo('.inner.left .option',1,{scale:0,x:'50%' , y:'50%'},{x:0 ,y:0, scale:1},'-=.5')
  .fromTo('.inner.right .option',1,{scale:0,x:'-50%' , y:'-50%'},{x:0 ,y:0, scale:1},'-=.5');

  gsap.timeline({
  scrollTrigger: {
    trigger: "#saScreens",
    start: "top top",
    end:"+=1000",
    scrub:.5,
    pin: true

  }
  })
  .to('.phone-ii',3,{x:'0'})
  .to('.phone-ii',1,{rotation:0})
  .fromTo('#saScreens .bg-blob',2,{borderRadius:'70% 30% / 40% 50%'},{borderRadius:'0',scale:1},'-=1')
  .to('.right-wrap',1,{opacity:1})
  .to('.scrollText ul',{y:'-355px'});
  
   gsap.to('.user',{
  scrollTrigger: {
    trigger: ".sa-users",
    start: "top +=50%",
    end:"bottom top",
    scrub:2

  },
    y:'-70%'
  });

   gsap.timeline({
    scrollTrigger: {
    trigger: ".sa-darkUi",
    start: "top +=90%",
    bottom:"+=1000",
    scrub:1

  }
  })
   .to('.tk-blob',2,{scale:3})
   .to('.tk-blob svg path',2,{fill:'rgba(0,0,0,0)'},'-=1');
    },




    // Mobile 

    "(max-width:991px)": function(){

       gsap.timeline({
    scrollTrigger: {
    trigger: "#main-section",
    scroller:'body',
    start: "top top",
    pin: true,
    end:"bottom top",
    scrub:1.5


    }
  })
  .to('.pr-img',2,{x:'-49.9%',y:'-50%',width:'390px' , height:'290px' })  
  .to('.rotateLeft',1,{rotation:20},'-=2')
  .to('.rotateRight',1,{rotation:-20},'-=2')
   
  .to('.rotateLeft, .rotateRight',1,{rotation: 0},'-=1') 
   
  .to('.phone',1,{scale:1 , y:'0%'},'-=1')
  .to('.hulk-left',5,{x:'100%',opacity:.2},'-=.5')
  .to('.hulk-right',5,{x:'-100%',opacity:.2},'-=.5')
  .to('.pr-img, .magic-bg',{display:'none'},'-=5')
  .to('.ui-images img',.2,{opacity:1 , delay:1})
  .to('.circle',1,{scale:1})
  .fromTo('.inner.left .option',1,{scale:0,x:'50%' , y:'50%' },{x:0 ,y:0, scale:1},'-=.5')
  .fromTo('.inner.right .option',1,{scale:0,x:'-50%' , y:'-50%'},{x:0 ,y:0, scale:1},'-=.5');



    },
      "(max-width:768px)": function(){

       gsap.timeline({
    scrollTrigger: {
    trigger: "#main-section",
    scroller:'body',
    start: "top top",
    pin: true,
    end:"bottom top",
    scrub:1.5


    }
  })
  .to('.pr-img',2,{x:'-49.9%',y:'-50%',width:'273px' , height:'213px' })  
  .to('.rotateLeft',1,{rotation:20},'-=2')
  .to('.rotateRight',1,{rotation:-20},'-=2')
   
  .to('.rotateLeft, .rotateRight',1,{rotation: 0},'-=1') 
   
  .to('.phone',1,{scale:1 , y:'0%'},'-=1')
  .to('.hulk-left',5,{x:'70%',opacity:.2},'-=.5')
  .to('.hulk-right',5,{x:'-20%',opacity:.2},'-=.5')
  .to('.pr-img, .magic-bg',{display:'none'},'-=5')
  .to('.ui-images img',.2,{opacity:1 , delay:1})
  .to('.circle',1,{scale:1})
  .fromTo('.inner.left .option',1,{scale:0,x:'50%' , y:'50%'},{x:0 ,y:0, scale:1},'-=.5')
  .fromTo('.inner.right .option',1,{scale:0,x:'-50%' , y:'-50%'},{x:0 ,y:0, scale:1},'-=.5');



    }
  });



  
  
  

