$(document).ready(function(){
  var dropdownBtns = document.getElementsByClassName("dropdown-btn");

  for (var i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

	$(window).on('scroll',function(){

		if($(this).scrollTop()>5){
		$('.mr-nav').addClass('nav-change');

	}
		else{

			$('.mr-nav').removeClass('nav-change');
		}
	});
  // ---Banner slider------//

  /*
Check out the original dribbble shot
https://dribbble.com/shots/2797559-Mr-bara-Split-Screen
*/





// Follow image

document.querySelectorAll(".artist").forEach(function(artist) {
  var cursor = artist.querySelector('.follow-img');

  artist.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  });
});
 


	// -----Open Search Box-------//
	$('.search-open').on('click',function(){
		$(this).toggleClass('cross');
		$('.search-box').toggleClass('show-search');
	});

	// ------Open Mobile Menu--------//
	$('.menu-btn').on('click',function(){

		$('close-btn').show(1000);
		$('.sidenav-overlay').addClass('show');


	});

	$('.close-btn').on('click',function(){
		$('.sidenav-overlay').removeClass('show');
		$('.menu-btn').show(1000);

	});
	// ------Mobile menu dropdown--------//
	$('.drop-link').on('click',function(){
		$('.dropdown').toggleClass('active');

	});

	// --------Tab-pane------------//
	$('.store-tabs li').click('on',function(){
		
		$('.store-tabs li').removeClass('active');

		$(this).addClass('active');


	});

  // mobile banner

  $('.gallery__slider').slick({
    arrows:false,
    autoplay:true,
    fade:true,
    dots:true,
    cssEase: 'ease-in',
    slidesToShow: 1,
    speed:800,
    slidesToScroll:1,
    draggable:true,
    adaptiveHeight:true,
     responsive: [
    {
      breakpoint:768,
      settings: {
        dots:false
      }
    }
    ]

  });

	// Panel slider

	$('.item-slider').slick({
    arrows: false,
    cssEase: 'ease-in',
    slidesToShow: 4,
    slidesToScroll:1,
    draggable:true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });




 // Painting filters


  var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
});

// change is-checked class on buttons
var $buttonGroup = $('.filters');
$buttonGroup.on( 'click', 'li', function( event ) {
  $buttonGroup.find('.is-checked').removeClass('is-checked');
  var $button = $( event.currentTarget );
  $button.addClass('is-checked');
  var filterValue = $button.attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
  
  //------- Custom Arrows click functionality
  $(document).on('click', '.prevSlide', function(){
    $('.item-slider').slick('slickPrev');
  });
  
  $(document).on('click', '.nextSlide', function(){
    $('.item-slider').slick('slickNext');
  });
  
  //------- Click to filter slides according to user's choice
  

  
});