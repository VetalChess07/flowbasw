let headerLi =  document.querySelector(".header__list-js");
let headerCheck =  document.querySelector(".header__link-js");
let headerLinkPopUp =  document.querySelector(".header__link-popup-js");
let burgerBtn = document.querySelector(".burger__btn");
let burgerLineFirst = document.querySelector(".burger__line-first");
let burgerLineCenter = document.querySelector(".burger__line-center");
let burgerLineLast = document.querySelector(".burger__line-last");
let burgerContent = document.querySelector(".burger__content");
let body = document.body;
let burgerContentClose = document.querySelector(".burger__content--close");



headerLi.addEventListener('click', (e)  =>  {   
   headerLi.classList.toggle("active");
   headerCheck.classList.toggle("active");
   headerLinkPopUp.classList.toggle("active");
})
burgerBtn.addEventListener('click',(e) => {
   burgerLineFirst.classList.toggle("open");
   burgerLineCenter.classList.toggle("open");
   burgerLineLast.classList.toggle("open"); 
   burgerContent.classList.toggle("open"); 
   burgerContentClose.classList.toggle("open"); 
   body.classList.toggle("noscroll"); 
})
burgerContentClose.addEventListener('click',(e) => {
   burgerLineFirst.classList.toggle("open");
   burgerLineCenter.classList.toggle("open");
   burgerLineLast.classList.toggle("open"); 
   burgerContent.classList.toggle("open"); 
   burgerContentClose.classList.toggle("open"); 
   body.classList.toggle("noscroll"); 
});

const buttons = [...document.querySelectorAll('.chat__btn')];
const chat__svg = [...document.querySelectorAll('.icon__chat-svg')];
buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.chat__btn.active').classList.remove('active');
    
    button.classList.add('active');
   
  })
})
chat__svg.forEach(svg => {
  svg.addEventListener('click', () => {
     document.querySelector('.chat__btn.active').classList.remove('active');
     
     svg.classList.add('active');
  
   })
 }) 


