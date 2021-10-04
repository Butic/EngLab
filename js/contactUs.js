let contact = document.querySelector('.footer__contact-us');

contact.onclick = function(e) {
	contact.style = "border-radius: 50%; width: 25%; background-color: #bdcaca;";
  
  setTimeout(function(){
  	contact.style = "none";
  }, 1200);
}