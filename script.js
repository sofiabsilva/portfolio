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
    
