let social = document.querySelector('.social');
let socialList = social.querySelector('.social__content-left');
let p = socialList.querySelector('p');

let promo = document.querySelector('.promo');
let promoTitle = promo.querySelector('.promo__title');
let promoDescription = promo.querySelector('.promo__description');

socialList.onclick = function(e){
  social.classList.toggle('shifted');
	if(!social.classList.contains('shifted')){
 		p.innerText = "↑ Social List ↑";
    social.style = "none";
    promo.style = "none";
    promoTitle.innerText = "English Courses";
    promoDescription.style = "none";
    promoDescription.innerText = 'Our range of English courses have been designed to cater for students with a wide range of learning goals.';
	}
	else {
   	p.innerText = "↓ Social List ↓";
    social.style.right = "0";
    promo.style = "right: 20%; bottom: 20%; max-width: 420px; max-height: 220px";
		promoTitle.innerText = "Find us in social net :";
    promoDescription.style.lineHeight = "2em";
    promoDescription.innerText = 'Bitrix24 Instagram Facebook Mail.ru';
  }
}