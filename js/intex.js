               /*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

                                               img switch  HERE

                   *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click',(event)=>{
    const p_btn_clicked = event.target;
    const btn_num = p_btn_clicked.dataset.btnNum;
    // p-btn--1
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    p_img.forEach((curElem)=>curElem.classList.add('p-image-not-active'));
    img_active.forEach((curElem)=>curElem.classList.remove('p-image-not-active'));
});

                    // swiper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay:3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

               /*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

                                               Scroll to top button

                   *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
  
  // const scrollElem = document.querySelector('.scroll');
  // const heroSection = document.querySelector('.section-hero');

  // const scrollToTop = () => {
  //     heroSection.scrollIntoView({behavior:"smooth"});
  // }

  // scrollElem.addEventListener('click',scrollToTop);

  /*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

                                               Nav Scroll  button

                   *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
// const portfolioElem = document.querySelector('#nav-portfolio');
// const portfolioDiv = document.querySelector('#section-portfolio');

// portfolioElem.addEventListener('click',()=>{

//   portfolioDiv.scrollIntoView({behavior:'smooth'});
// });



// COUTER ANIMATION JS HERE

const counterNumber = document.querySelectorAll('.counter-number');
const range = 200;

counterNumber.forEach((curElem)=>{

  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const inticial = parseInt(curElem.innerText);
    // console.log(inticial);
    const incimentNumber = Math.trunc(targetNumber/range);
    // console.log(incimentNumber);
    if(inticial<targetNumber){
      curElem.innerText = `${inticial + incimentNumber} +`
      setTimeout(updateNumber , 10);
    }
  }

  updateNumber();
});

// responsive navbar  js here 

const headerElem = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener("click",()=>{
  headerElem.classList.toggle('active');
});

// matchMedia

const jsMedia = (mediasize)=>{

    if(mediasize.matches){
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
      });

    }
    else{
     new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
      });

    }
} 

const mediasize = window.matchMedia("(max-width:500px)");

jsMedia(mediasize);
mediasize.addEventListener('change',jsMedia);


// <script>

  AOS.init({
    offset:250,
  });


// 

const loading = document.getElementById('loadScreen');
function load(){
  loading.style.display='none';
}