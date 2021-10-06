let body = document.querySelector('body');
let theme = document.querySelector('.theme__button');
let headerLinks = body.querySelectorAll('.header__link');
let promo = body.querySelector('.promo');
let mainContent = body.querySelector('.main-contents');
let contents = mainContent.querySelectorAll('.content');
let bookmark = mainContent.querySelector('.improve-english');
let footer = body.querySelector('.footer');
let contactUs = footer.querySelector('.footer__contact-us');
let footerAbout = footer.querySelector('.footer__about-us');
let footerLinks = footer.querySelectorAll('.footer__link');
let number = footer.querySelector('.number');

//red rgba(168,2,4,255)
//yellow rgba(229,179,2,255)
//white rgba(238,241,246,255)
//gray rgba(54,59,63,255)

	theme.onclick = function(e){
  	theme.classList.toggle('dark');
    theme.style = "transform: rotate(180deg)"
    if(!theme.classList.contains('dark'))	{
    	theme.style = "null";
      body.style = "null";
      
      for(let headerLink of headerLinks){
        headerLink.style = "null";
        let sublinks = headerLink.querySelectorAll('.header__sublink');
        for(let sublink of sublinks){
            sublink.style.color = "none";
        }
        
        contactUs.style = "none";
      }
      
      promo.style = "null";
      bookmark.style = "null";
      footerAbout.style = "null";
      for(let footerLink of footerLinks){
      	footerLink.style = "null";
      }
      for(let content of contents){
      	content.style = "null";
      }
      number.style = "null";
    }
    else{

        body.style.backgroundColor = "rgba(54,59,63,255)";
        body.style.color = "rgba(238,241,246,255)";
    
      for(let headerLink of headerLinks){
        headerLink.style.color = "rgba(229,179,2,255)";
        let sublinks = headerLink.querySelectorAll('.header__sublink');
        for(let sublink of sublinks){
            sublink.style.color = "rgba(54,59,63,255)";
        }
        
      }

        promo.style.backgroundColor= "rgba(229, 179, 2, 0.5)";
        bookmark.style.backgroundColor = "rgba(54,59,63,255)";
        footerAbout.style.backgroundColor = "rgba(238, 241, 246, 0.2)";
      
      for(let footerLink of footerLinks){
      	footerLink.style.color = "rgba(229,179,2,255)";
      }
    	
      contactUs.style = "color: rgba(238,241,246,255); border-bottom: 5px groove rgba(229, 179, 2, 0.5);";
      
      for(let content of contents){
      	content.style.borderTop = "3px solid rgba(229,179,2,0.25)";
      }
      
      number.style.color = "rgba(229,179,2,255);";
    }
  }