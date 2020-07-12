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
   var size = $(window).width();
   
   if(size <= 425){
      $('.carousel-commercial-appeals').slick({
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 2,
         slidesToScroll: 2,
         autoplay: true,
         autoplaySpeed: 2000,
      });
   }
 });

 $(document).ready(function(){
   var size = $(window).width();
   
   if(size >=  768){
      $('.carousel-company-brands').slick({
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 5,
         slidesToScroll: 5,
         autoplay: true,
         autoplaySpeed: 2000,
      });
   }else if(size <=  768 && size > 425 ){
      $('.carousel-company-brands').slick({
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 4,
         slidesToScroll: 4,
         autoplay: true,
         autoplaySpeed: 2000,
      });
   }else if(size <=  425){
      $('.carousel-company-brands').slick({
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 2,
         slidesToScroll: 2,
         autoplay: true,
         autoplaySpeed: 2000,
      });
   }

 });