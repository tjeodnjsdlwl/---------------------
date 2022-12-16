// 홈페이지 열자마자
setTimeout(() => {
    $('.page-load').removeClass('open')
}, 1000);


// 마우스 커서
$('body').mousemove(function (e) {
    const w = $('.cursor').width() / 2
    const h = $('.cursor').height() / 2
    const xVal = e.clientX;
    const yVal = e.clientY;

    gsap.to('.cursor', {
        x: xVal - w,
        y: yVal - h
    })
   
})


$('.sc-main').mouseover(function(){
    gsap.to('.cursor .wrap', {
        y:-0
    })
})
$('.sc-work').mouseover(function(){
    gsap.to('.cursor .wrap', {
        y:-150
    })
})
$('#footer').mouseover(function(){
    gsap.to('.cursor .wrap', {
        y:-75
    })
})





// 헤더 스크롤
const showAnim = gsap.from('#header', {
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});



// 메뉴 클릭시 해당 영역 이동
$('.menu-item > a').click(function () {

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



// 메인 캐릭터 움직임
/* function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-48349543-4'); */



// 메인 글씨
// const mainTxt = new SplitType('.sc-main .inner .title', { types: 'words, chars', });
// gsap.from(mainTxt.chars, {
//     delay: 2,
//     opacity: 0,
//     stagger: 0.01,
//     yPercent: 20
// })



// 작업 내역
const workSlide = new Swiper(".work-slide", {
    loop: true,
    speed:1000,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
    },



});


/* gsap.to('.sc-main .inner',{
    ScrollTrigger:{
        trigger: '.sc-main',
        start: "0% 0%",
        end: "100% 0%",
        markers: true,
        scrub:0,
    },
}) */

/* gsap.to('.sc-work',{
    ScrollTrigger:{
        trigger: '.work-slide',
        start: "0% 0%",
        end: "100% 0%",
        markers: true,
        pin: '.work-slide',
        scrub:0,
    },

}) */

/* ScrollTrigger.create({
    trigger: '.sc-main',
    start: "0% 0%",
    end: "100% 0%",
    //markers: true,
}) */

// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".sc-main").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         pin: true,
//         pinSpacing: false
//     });
// });

// ScrollTrigger.create({
//     snap: 1 / 5 // snap whole page to the closest section!
// });


