// alert("Testing...");

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("hero-content");
  var z = document.getElementsByClassName("mySlides-desk");
  if (n > x.length && n > y.length && n > z.length) 
    {
      slideIndex = 1
    }
  if (n < 1) 
    {
      slideIndex = x.length
      slideIndex = y.length
      slideIndex = z.length
    }
    
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";    
    z[i].style.display = "none";    
  }

  x[slideIndex-1].style.display = "block";  
  y[slideIndex-1].style.display = "block";  
  z[slideIndex-1].style.display = "block";  
}

// burger menu
var burgerMenu = document.querySelector(".burger-menu");
var lineOne = document.querySelector('.line1');
var lineThree = document.querySelector('.line3');
var nav = document.querySelector("nav ul");
var navList = document.querySelectorAll("nav ul li")
var page = document.querySelector('body');

  burgerMenu.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
      // navList.forEach((link, index) => {
      //     if(link.style.animation) {
      //         link.style.animation = '';
      //     }else {
      //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      //     }
          
      // });
      page.classList.toggle('toggle');
      burgerMenu.classList.toggle('toggle');
      burgerMenu.classList.toggle('line1-active');
      burgerMenu.classList.toggle('line3-active');
  });

  function off() {
    document.querySelector('.overlay').style.display = "none";
    
  }
  

