function menuToggler(buttonToggler){
   var menuToggler = document.getElementById("menu-toggle")
   menuToggler.classList.toggle("active")
}

// $('.carousel').slick({
//    dots: true,
//    infinite: true,
//    speed: 500,
//    slidesToShow: 4,
//    slidesToScroll: 4,
//  });

$(document).ready(function(){
   $('.carousel').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
   });
});

$(document).ready(function(){
   $('.carousel-commercial-appeals').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
   });
 });