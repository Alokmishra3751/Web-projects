$(document).ready(function(){

   var input = document.querySelector("#phone");
            window.intlTelInput(input, {
                separateDialCode: true,
                preferredCountries: ["in", "jp", "us", "ru"]
            });


   const form = document.getElementById('saleForm');
const submitBtn = document.getElementById('submitBtn');

   $(submitBtn).on('click',function(){

       e.preventDefault(); // prevent form submission
  
  // show thank you popup
  $('.popup').addClass('show-popup');
  
  // reset form
  form.reset();

   });

  $('.close-btn').on('click', function() {
  // hide thank you popup
  thankYouPopup.style.display = 'none';
});
         




});
