$(document).ready(function(){

   var input = document.querySelector("#phone");
            window.intlTelInput(input, {
                separateDialCode: true,
                preferredCountries: ["in", "jp", "us", "ru"]
            });




});
