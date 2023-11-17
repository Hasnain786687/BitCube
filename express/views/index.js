let hamburger = document.getElementById('hamburger');
let nav_menu_drawer = document.getElementById('nav_menu_drawer');
let body = document.querySelector('body')
let section = document.querySelector('section')

hamburger.addEventListener('click', function(){
    nav_menu_drawer.classList.toggle('slide')
    body.classList.toggle('overflow')
    
})



var menu_bar_top = document.getElementById('menu_bar_top')
var menu_bar_middle = document.getElementById('menu_bar_middle')
var menu_bar_bottom = document.getElementById('menu_bar_bottom');

hamburger.addEventListener('click', function(){
    menu_bar_top.classList.toggle('menu_bar_top_anim')
    menu_bar_middle.classList.toggle('op_hide')
    menu_bar_bottom.classList.toggle('menu_bar_bottom_anim')
})




window.addEventListener('scroll', reveal); function reveal(){ var reveals = document.querySelectorAll('.reveal'); for(var i = 0; i < reveals.length; i++){ var windowheight = window.innerHeight; var revealtop = reveals[i].getBoundingClientRect().top; var revealpoint = 150; if(revealtop < windowheight - revealpoint){ reveals[i].classList.add('active'); } else{ reveals[i].classList.remove('active'); } } } 

window.addEventListener('scroll', reveal_slow); 
function reveal_slow(){ 
    var reveal_slow = document.querySelectorAll('.reveal_slow');
 for(var i = 0; i < reveal_slow.length; i++){ var windowheight = window.innerHeight;
     var revealtop = reveal_slow[i].getBoundingClientRect().top;
      var revealpoint = 150; 
      if(revealtop < windowheight - revealpoint){ reveal_slow[i].classList.add('active_slow');
         } else{ reveal_slow[i].classList.remove('active_slow'); } } } 


window.addEventListener('scroll', reveal_slow_3); 
function reveal_slow_3(){ 
    var reveal_slow_3 = document.querySelectorAll('.reveal_slow_3');
 for(var i = 0; i < reveal_slow_3.length; i++){ var windowheight = window.innerHeight;
     var revealtop = reveal_slow_3[i].getBoundingClientRect().top;
      var revealpoint = 150; 
      if(revealtop < windowheight - revealpoint){ reveal_slow_3[i].classList.add('active_slow_3');
         } else{ reveal_slow_3[i].classList.remove('active_slow_3'); } } } 



window.addEventListener('scroll', reveal_scale); 
function reveal_scale(){ 
    var reveal_scale = document.querySelectorAll('.reveal_scale');
 for(var i = 0; i < reveal_scale.length; i++){ var windowheight = window.innerHeight;
     var revealtop = reveal_scale[i].getBoundingClientRect().top;
      var revealpoint = 150; 
      if(revealtop < windowheight - revealpoint){ reveal_scale[i].classList.add('active_scale');
         } else{ reveal_scale[i].classList.remove('active_scale'); } } } 


window.addEventListener('scroll', reveal_left); 
function reveal_left(){ 
    var reveal_left = document.querySelectorAll('.reveal_left');
 for(var i = 0; i < reveal_left.length; i++){ var windowheight = window.innerHeight;
     var revealtop = reveal_left[i].getBoundingClientRect().top;
      var revealpoint = 150; 
      if(revealtop < windowheight - revealpoint){ reveal_left[i].classList.add('active_left');
         } else{ reveal_left[i].classList.remove('active_left'); } } }


window.addEventListener('scroll', reveal_right); 
function reveal_right(){ 
    var reveal_right = document.querySelectorAll('.reveal_right');
 for(var i = 0; i < reveal_right.length; i++){ var windowheight = window.innerHeight;
     var revealtop = reveal_right[i].getBoundingClientRect().top;
      var revealpoint = 150; 
      if(revealtop < windowheight - revealpoint){ reveal_right[i].classList.add('active_right');
         } else{ reveal_right[i].classList.remove('active_right'); } } }

















         let textArray = [
            "Mobile Apps_",
            "Desktop Apps_",
            "System Integrations_",
            "Ecommerce Stores_",
            "User Interfaces_",
            "User Experiences_",
            "Web Apps_",
          ];
          
          
          
          
          let typing_text_container = document.getElementById("typing_text");
          let typingDelay = 50; // Delay for typing
          let deletingDelay = 2000; // Delay before deleting the text
          let deleteDelay = 20; // Delay for deleting
          let index = 0;
          let textIndex = 0;
          let isDeleting = false;
          
          function type() {
            let currentText = textArray[textIndex];
         
          
            if (isDeleting) {
              typing_text_container.textContent = currentText.substring(0, index - 1);
              index--;
              delay = deleteDelay;
            } else {
              typing_text_container.textContent = currentText.substring(0, index + 1);
              index++;
              delay = typingDelay;
            }
          
            if (index === currentText.length + 1) {
              isDeleting = true;
              delay = deletingDelay;
            }
          
            if (index === 0 && isDeleting) {
              isDeleting = false;
              textIndex = (textIndex + 1) % textArray.length;
              delay = typingDelay;
            }
          
            setTimeout(type, delay);
          }
          
          type();