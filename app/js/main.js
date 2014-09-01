$('.buttonFlex').click(function(){
	$(this).velocity("callout.pulse2");
});

$('#switch').click(function(){
	$(this).velocity("transition.bounceOut");
	$('.hero.active').velocity("fadeIn");
    $('.hero').addClass('active');
});


setTimeout(function(){
	$('#switch').velocity("transition.bounceIn");
}, 100);


setTimeout(function() {
$('#switch').velocity("callout.pulse");
     }, 2500);



$('#swap').click(function(){
	$('.device img').velocity("transition.slideDownBigIn");
    $('.device img').attr("src", "/img/picnic-2.jpg");
    $(this).text(function(i, text){
          return text === "UnPicturfy" ? "Picturfy" : "UnPicturfy";
      })
}); 


$(".imgTog").click(function() {
    $('.swap').find('img').toggleClass("img-hide");
    $('.swap').velocity('transition.slideDownIn');
    $(this).text(function(i, text){
          return text === "Picturfy" ? "UnPicturfy" : "Picturfy";
      })
});

$(".imgTog2").click(function() {
    $('.swap2').find('img').toggleClass("img-hide");
    $('.swap2').velocity('transition.slideDownIn');
    $(this).text(function(i, text){
          return text === "Picturfy" ? "UnPicturfy" : "Picturfy";
      })
});

$(".imgTog3").click(function() {
    $('.swap3').find('img').toggleClass("img-hide");
    $('.swap3').velocity('transition.slideDownIn');
    $(this).text(function(i, text){
          return text === "Picturfy" ? "UnPicturfy" : "Picturfy";
      })
});


