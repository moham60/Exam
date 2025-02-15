let aboutOfsset = $("#about").offset().top;
console.log(aboutOfsset);
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= aboutOfsset) {
    $(".navbar").css({ "background-color": "black" });
  } else {
    $(".navbar").css("background-color", "transparent");
  }
});

$(".main-header").slideDown(3000);
AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => observer.observe(img));
});
