var bg1 = document.querySelector('#bg1');
var bg2 = document.querySelector('#bg2');
var bg3 = document.querySelector('#bg3');
var bg4 = document.querySelector('#bg4');
var bg5 = document.querySelector('#bg5');
var bg6 = document.querySelector('#bg6');
var bg7 = document.querySelector('#bg7');
var bg8 = document.querySelector('#bg8');
var home = document.querySelector('#home');
var about = document.querySelector('#about');
var education = document.querySelector('#education');
var services = document.querySelector('#services');
var work = document.querySelector('#work');
var skills = document.querySelector('#skills');
var experience = document.querySelector('#experience');
var contact = document.querySelector('#contact');

bg1.addEventListener('mouseover',function(){
    home.innerHTML = '<u><b>HOME</b></u>';
})

bg1.addEventListener('mouseout',function(){
    home.innerHTML = 'HOME';
})

bg2.addEventListener('mouseover',function(){
    about.innerHTML = '<u><b>ABOUT</b></u>';
})

bg2.addEventListener('mouseout',function(){
    about.innerHTML = 'ABOUT';
})

bg3.addEventListener('mouseover',function(){
    education.innerHTML = '<u><b>EDUCATION</b></u>';
})

bg3.addEventListener('mouseout',function(){
    education.innerHTML = 'EDUCATION';
})

bg4.addEventListener('mouseover',function(){
    services.innerHTML = '<u><b>SERVICES</b></u>';
})

bg4.addEventListener('mouseout',function(){
    services.innerHTML = 'SERVICES';
})

bg5.addEventListener('mouseover',function(){
    work.innerHTML = '<u><b>WORK</b></u>';
})

bg5.addEventListener('mouseout',function(){
    work.innerHTML = 'WORK';
})

bg6.addEventListener('mouseover',function(){
    skills.innerHTML = '<u><b>SKILLS</b></u>';
})

bg6.addEventListener('mouseout',function(){
    skills.innerHTML = 'SKILLS';
})

bg7.addEventListener('mouseover',function(){
    experience.innerHTML = '<u><b>EXPERIENCE</b></u>';
})

bg7.addEventListener('mouseout',function(){
    experience.innerHTML = 'EXPERIENCE';
})

bg8.addEventListener('mouseover',function(){
    contact.innerHTML = '<u><b>CONTACT</b></u>';
})

bg8.addEventListener('mouseout',function(){
    contact.innerHTML = 'CONTACT';
})