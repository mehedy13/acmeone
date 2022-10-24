
// Swiper code

const swiper = new Swiper('.swiper', {
  
    direction: 'horizontal',
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });

//   Video popup code

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
    });
  });



// Pricing
const tabs=document.querySelectorAll(".tabs li");

const contents=document.querySelectorAll(".content");


tabs.forEach((tab,index)=>{
  tab.addEventListener("click", ()=>{
    //To remove active class from previous tab
    tabs.forEach((tab)=>tab.classList.remove("active"));
//to show content according to tab selected
    tab.classList.add("active");
    //to hide previous tab content

    contents.forEach((c)=>c.classList.remove("active"));

    contents[index].classList.add("active");
  });
});
//for default loading
tabs[0].click();



// Header Collapse
function toggleSidebar(){
  document.querySelector('.navbar').classList.toggle('active');
  document.querySelector('.brand').classList.toggle('active');
  document.querySelector('.star').classList.toggle('active');
  
}


//Accordion

const accordion=document.getElementsByClassName('content-box');

for(let i=0;i<accordion.length;i++){
accordion[i].addEventListener('click', function(){
  this.classList.toggle('active')
});
}
