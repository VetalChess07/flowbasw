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
// let tabsBtn = document.querySelectorAll("chat__tab")


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
 });

 let liveChatBtn = document.getElementById("chat__btn--live-chat");
 let attendeesChatBtn = document.getElementById("chat__btn--attendees");
 console.log(liveChatBtn);
 console.log(attendeesChatBtn);


let chatAttendees = document.querySelector('.attendees');
console.log(chatAttendees);

 let chat = document.querySelector('.chat__messenger');
 console.log(chat);

liveChatBtn.addEventListener("click", () =>{
  chatAttendees.classList.remove('active');
  chat.classList.add('active');
  chat.classList.remove('noactive');
})
attendeesChatBtn.addEventListener("click", () =>{
  chatAttendees.classList.add('active');
  chat.classList.remove('active');
  chat.classList.add('noactive');
})

 
let newUserChat = document.querySelector('.chat__messenger--item--user');

let userChat = document.querySelector('.chat__messenger--item');



function handleElementClickUser() {
 newUserChat.scrollIntoView( { block: "center", behavior: "smooth"});

};
function chatScroll() {
chat.scrollIntoView( { block: "center", behavior: "smooth"});
 chat.scrollTop = chat.scrollHeight;

 };
chatScroll();

let chatPushBtn =  document.querySelector('.chat__submit--btn').addEventListener('click', myClick);
  function myClick() {
    console.log('fff');
  
    let chatInput = document.querySelector('.chat__input').value;
    document.querySelector(".out__input--user").innerHTML = chatInput;
    document.querySelector('.chat__input').value = "";

    newUserChat.classList.add("active");   
    handleElementClickUser(); 
     chatDownload = document.querySelector('.chat__messenger--item.chat__download').classList.add('active');
    //  chatDownload.scrollTop = chatDownload.scrollHeight;
    chatScroll();
    };
   

 




