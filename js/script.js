let headerLi = document.querySelector(".header__list-js");
let headerCheck = document.querySelector(".header__link-js");
let headerLinkPopUp = document.querySelector(".header__link-popup-js");
let burgerBtn = document.querySelector(".burger__btn");
let burgerLineFirst = document.querySelector(".burger__line-first");
let burgerLineCenter = document.querySelector(".burger__line-center");
let burgerLineLast = document.querySelector(".burger__line-last");
let burgerContent = document.querySelector(".burger__content");
let body = document.body;


let burgerContentClose = document.querySelector(".burger__content--close");



headerLi.addEventListener('click', (e) => {
  headerLi.classList.toggle("active");
  headerCheck.classList.toggle("active");
  headerLinkPopUp.classList.toggle("active");
})
burgerBtn.addEventListener('click', (e) => {
  burgerLineFirst.classList.toggle("open");
  burgerLineCenter.classList.toggle("open");
  burgerLineLast.classList.toggle("open");
  burgerContent.classList.toggle("open");
  burgerContentClose.classList.toggle("open");
  body.classList.toggle("noscroll");
})
burgerContentClose.addEventListener('click', (e) => {
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
let newUserChat = document.querySelector('.chat__messenger--item--user');
let userChat = [...document.querySelectorAll('.chat__messenger--item')];
console.log(userChat)
// let userChat = document.querySelectorAll('.chat__messenger--item');


liveChatBtn.addEventListener("click", () => {
  chatAttendees.classList.remove('active');
  chat.classList.add('active');
  chat.classList.remove('noactive');
})
attendeesChatBtn.addEventListener("click", () => {
  chatAttendees.classList.add('active');
  chat.classList.remove('active');
  chat.classList.add('noactive');
  userChat.forEach((userChat) => { 
  
  
  });
})





function handleElementClickUser() {
  newUserChat.scrollIntoView({ block: "center", behavior: "smooth" });

};
function chatScroll() {
  chat.scrollIntoView({ block: "center", behavior: "smooth" });
  chat.scrollTop = chat.scrollHeight;

};
chatScroll();

let chatPushBtn = document.querySelector('.chat__submit--btn').addEventListener('click', myClick);
function myClick() {
  if (myClick.isRun) {
    return false;
  }
  console.log('fff');

  let chatInput = document.querySelector('.chat__input').value;
  document.querySelector(".out__input--user").innerHTML = chatInput;
  document.querySelector('.chat__input').value = "???????????????? ??????????";
  document.querySelector('.chat__input').setAttribute("readonly", "readonly");

  newUserChat.classList.add("active");
  handleElementClickUser();
  chatDownload = document.querySelector('.chat__messenger--item.chat__download').classList.add('active');

  chatScroll();
  myClick.isRun = true;

};
  const btnOff = document.querySelector('.open-popup');
         // btnOn = document.querySelector('.popup'),
         body = document.body;

      let disableScroll = function () {
         let pagePosition = window.scrollY;
         document.body.classList.add('active');
         document.body.dataset.position = pagePosition;
         document.body.style.top = -pagePosition + 'px';
      }

      let enableScroll = function () {
         let pagePosition = parseInt(document.body.dataset.position, 10);
         document.body.style.top = 'auto';
         document.body.classList.remove('active');
         window.scroll({ top: pagePosition, left: 0 });
         document.body.removeAttribute('active');
      }

      // btnOff.addEventListener('click', (e) => {
      //    disableScroll();
      //    e.currentTarget.style.pointerEvents = 'none';
      //    btnOn.style.pointerEvents = 'auto';
      // });

      // btnOn.addEventListener('click', (e) => {
      //    enableScroll();
      //    e.currentTarget.style.pointerEvents = 'none';
      //    btnOff.style.pointerEvents = 'auto';
      // });

      let popupBg = document.querySelector('.popup__attendees-bg'); // ?????? ?????????? ????????
      let popup = document.querySelector('.popup__attendees'); // ???????? ????????
      let openPopupButtons = document.querySelectorAll('.attendees__item'); // ???????????? ?????? ???????????? ????????
      let closePopupButton = document.querySelector('.close-popup');

      console.log(body);




      openPopupButtons.forEach((button) => { // ???????????????????? ?????? ????????????
         button.addEventListener('click', (e) => { // ?????? ???????????? ???????????? ???????????????????? ?????????????? ???? ????????
            e.preventDefault(); // ?????????????????????????? ?????????????????? ?????????????????? ????????????????
            popupBg.classList.add('active'); // ?????????????????? ?????????? 'active' ?????? ????????
            popup.classList.add('active'); // ?? ?????? ???????????? ????????
            body.classList.add('active')
         })
      });

     

      document.addEventListener('click', (e) => { // ???????????? ???????????????????? ???? ???????? ????????????????
         if (e.target === popupBg) { // ???????? ???????? ?????????? - ??????, ????:
            popupBg.classList.remove('active'); // ?????????????? ???????????????? ?????????? ?? ????????
            popup.classList.remove('active'); // ?? ?? ????????
            body.classList.remove('active');
         }
      });

      const cards = document.querySelectorAll(".attendees__item");
      cards.forEach((card) => {
         card.addEventListener("click", (e) => {
            let targetEl = e.target;
            let targetCardText = card.querySelector(".attendees__item--text");
            let targetCardImage = card.querySelector(".avatar__user");
            document.querySelector(".popup__text-username").textContent = targetCardText.textContent;
            document.querySelector(".popup__image").src = targetCardImage.src;
         });
      });
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      breakpoints: {
       
        840: {
          slidesPerView: 2,
          spaceBetween: 40,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
       
    },
 
      
      
      });

      let swiperRunning = new Swiper('.swiper__running', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 40,
        autoplay: {
          delay: 2500,
        },

        
       });
       let swiperRunningDoun = new Swiper('.swiper__running--doun', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 40,
        autoplay: {
          delay: 2000,
        },
       });
       let airpaleSvg = document.querySelector(".airplane__svg--path") ;
       const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {

  input.addEventListener("input", () => {
    if (Array.from(inputs).every((v) => v.value) == true) {
      document.querySelector(".form__button").classList.add("_active");
     airpaleSvg.classList.add("active");
    } else {
      airpaleSvg.classList.add("active");
    }
  });
});