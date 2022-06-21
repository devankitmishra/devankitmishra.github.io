$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    var typed = new Typed("#type",{
        strings:["Designer","Developer","Programer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
        shuffle: true
    });
    

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let home = document.querySelector('.homes');
let about = document.querySelector('.abouts');
let work = document.querySelector('.work');
let blog = document.querySelector('.blogs');
let contact = document.querySelector('.contacts');

hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});
    times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
home.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
about.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
work.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
blog.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
contact.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
});

function sendEmail(){
    
}


    
   