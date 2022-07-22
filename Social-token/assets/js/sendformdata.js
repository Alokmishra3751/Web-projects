
function sendFormData(){
 


let email = document.getElementById("user_email")
let name = document.getElementById("user_name")
let message = document.getElementById("user_message")

if(email.value !='' && name.value !='' && message.value != ''){
  $('#form-warn').hide();
  $('#submitBtn').addClass('hide');
  $('.tick-box').addClass('wheel');

  const data = { 

  name: name.value,
  email: email.value,
  description: message.value
  };



fetch('https://seriamigo.com/contact_us', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log(data);
  if(data.responseCode == 1){
    $('.tick-box').removeClass('wheel').addClass('break');

    name.value=''
    email.value=''
    message.value=''

  }
  else{
    $('#submitBtn').removeClass('hide');
    $('.tick-box').removeClass('wheel');    
  }
})
.catch((error) => {
  console.error('Error:', error);
});

}
  
else{
  $('#form-warn').show();
}


}




