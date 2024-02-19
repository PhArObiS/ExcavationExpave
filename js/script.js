// Google Maps Initialization
function initMap() {
  const loc = { lat: 45.524115, lng: -73.6221836 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 10,
    center: loc,
  });
  new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling
$(".nav-menu a").on("click", function (event) {
  const hash = this.hash;
  if (hash !== "") {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
    // Close the mobile menu after clicking on a link
    $(".nav-menu").removeClass("active");
  }
});

// Nav Opacity on Scroll
let prevScrollpos = window.pageYOffset;
const nav = document.getElementById("nav");
nav.style.transition = "opacity 0.3s";

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  nav.style.opacity = prevScrollpos > currentScrollPos ? "1" : "0.5";
  prevScrollpos = currentScrollPos;
};

// Contact Form Submission
$(document).ready(function () {
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      telephone: $("#phone").val(),
      message: $("#message").val(),
    };
    // Adjust the API endpoint based on your needs
    $.post("https://example.com/api/send-lead", formData)
      .done(() => {
        alert("Email Sent");
        // Optionally, reset the form after successful submission
        $("#contact-form")[0].reset();
      })
      .fail(() => alert("Failed to send email"));
  });
});

// Slick Carousel Initialization with Autoplay
$("#image-slider").slick({
  dots: true,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
  nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
});

// Fix for white images issue
$("#image-slider").on(
  "lazyLoaded",
  function (event, slick, image, imageSource) {
    $(image).closest(".slick-slide").css("background-image", "none");
  }
);


function showSidebar() {
  document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

// Add the following JavaScript code to your existing script.js or create a new one

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      nav.style.opacity = "1";
    } else {
      nav.style.opacity = "0.8"; // Adjust the desired opacity when scrolling down
    }
    prevScrollpos = currentScrollPos;

    // Add or remove 'scrolled' class based on scroll position
    if (currentScrollPos > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
});


// MiniScreenNavButton
// const toggleBtn = document.querySelector(".toggle-btn");
// const navmenu = document.querySelector(".nav-menu");

// toggleBtn.addEventListener("click", () => {
//   navmenu.classList.toggle("active");
// });

document.addEventListener("DOMContentLoaded", function () {
  // Your slide code here
  // JobsPics Slide
  let next = document.querySelector("#next");
  let prev = document.querySelector("#prev");

  next.addEventListener("click", function () {
    let items = document.querySelectorAll(".itemPic");
    document.querySelector(".slide").appendChild(items[0]);
  });

  prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".itemPic");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  });
});

