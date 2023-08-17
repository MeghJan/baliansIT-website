// Scroll to the top of the page
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


//slick slider on homepage first section
  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //slick slider on testimonials section
  $('.testimonials-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
  });


//hamburger menu on mobile devices
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

document.body.classList.add('scroll-x');

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('no-scroll');
    document.body.classList.add('scroll-x');
}

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove('active');
    document.body.classList.toggle('no-scroll');
    document.body.classList.add('scroll-x');
  }
});


//send subscription email with Email.js
(function() {
  emailjs.init("X7P9u8QP0IRDS0_Ep");
})();

let form = document.getElementById('form');

function SendEmail(){
  var params = {
    email: document.getElementById("email").value,
  }

    emailjs.send('service_x0ba1mn', 'template_evq0alq', params)
        .then(function (res) {
          console.log("Success" + res.status);
          
          form.reset();
          toastNotif({
            // toast message
            text: 'Subscription request successfully sent!!',
            // background color
            color: 'rgb(91, 200, 63)',
            // timeout in ms
            timeout: 5000,
            // 'valid', 'error', or 'warning'
            icon: 'valid',
            
          });
        });
}