/*
 * When viewport is less than 600px wide, a responsive menu pops up by clicking on hamburger icon
 */

var menu = document.querySelector('.menu');
var responsiveNav = document.querySelector("#drawer");

  menu.addEventListener('click', function(){
    if (responsiveNav.className === "navbar") {
      responsiveNav.className +=" responsive";
      console.log("works")
      }
    else {
      responsiveNav.className = "navbar";
      }
    });
    

// To display e-mail hidden from bots, from https://stackoverflow.com/a/23195351
var user = 'sofiabsilva.dev',
    domain = 'gmail.com',
    element = document.getElementById('mail');
    if (element) {
      element.innerHTML = '<i class="fas fa-envelope"></i> ' + user + '@' + domain;
      element.href = 'mailto:' + user + '@' + domain;
    }
