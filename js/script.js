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

// Navbar Opacity on Scroll
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
navbar.style.transition = "opacity 0.3s";

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  navbar.style.opacity = prevScrollpos > currentScrollPos ? "1" : "0.5";
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

// MiniScreenNavButton
const toggleBtn = document.querySelector(".toggle-btn");
const navmenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});

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
