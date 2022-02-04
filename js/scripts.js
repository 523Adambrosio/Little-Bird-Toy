/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function changeImgCar(){
  document.getElementById('prodImg1').src = "block3.jpg";
  document.getElementById('prodImg2').src = "block2.jpg";
  document.getElementById('prodImg3').src = "block4.jpg";
  document.getElementById('imgPopUp').src = "block4.jpg";
  document.getElementById('imgPopUpText').textContent = "Our wooden block is made from the best material in New Jersey. We will be donating half of the profits to charities.  ";
}

function changeImgBoat(){
  document.getElementById('prodImg1').src = "boat1.jpg";
  document.getElementById('prodImg2').src = "boat2.jpg";
  document.getElementById('prodImg3').src = "boat1.jpg";
  document.getElementById('imgPopUp').src = "boat2.jpg";
  document.getElementById('imgPopUpText').textContent = "Our wooden boat is made from the best material in New Jersey. We will be donating a third of our profits to charities.  ";
}

function changeImgPlane(){
  document.getElementById('prodImg1').src = "plane1.jpg";
  document.getElementById('prodImg2').src = "plane2.jpg";
  document.getElementById('prodImg3').src = "plane3.jpg";
  document.getElementById('imgPopUp').src = "plane1.jpg";
  document.getElementById('imgPopUpText').textContent = "Our wooden plane is made from the best material in New Jersey. We will be donating a third of our profits to charities.";
}

function changeImgBlocks(){
  document.getElementById('prodImg1').src = "car1.jpg";
  document.getElementById('prodImg2').src = "car2.jpg";
  document.getElementById('prodImg3').src = "car3.jpg";
  document.getElementById('imgPopUp').src = "car4.jpg";
  document.getElementById('imgPopUpText').textContent = "Our wooden car is made from the best material in New Jersey. We will be donating a third of our profits to charities.";
}
