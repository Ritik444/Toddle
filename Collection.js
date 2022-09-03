
// side bar
$(document).ready(function() {
    $('.menu-btn').click(function () {
        $('.side_bar').addClass('active');
      });
      
    $('.close-btn').click(function() {
        $('.side_bar').removeClass('active');
    });
  });



  // menu on click 

  $("#menu-1").click(function(){
    $(".sub-products").css("grid-template-columns", "repeat(4, 1fr)");
  });

  $("#menu-2").click(function(){
    $(".sub-products").css("grid-template-columns", "repeat(2, 1fr)");
  });

  $("#menu-3").click(function(){
    $(".sub-products").css("grid-template-columns", "repeat(3, 1fr)");
  });