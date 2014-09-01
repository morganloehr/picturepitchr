// $('#switch').click(function()
// {
//   $('#hero').css("background-image", "url(/img/hero/sunset.jpg)"); 
// });


$('#switch').click(function(){
	$(this).velocity("transition.bounceOut");
	$('.hero.active').velocity("fadeIn");
    $('.hero').addClass('active');
});



$('#switch').velocity("transition.bounceIn");

setTimeout(function() {
$('#switch').velocity("callout.pulse");
     }, 2000);



$('#swap').click(function(){
	$(this).velocity("transition.bounceOut");
	$('.device img').velocity("transition.slideDownBigIn");
    $('.device img').attr("src", "/img/picnic-2.jpg");
}); 


$(".imgTog").click(function() {
    $('.swap').find('img').toggle();
});

$(".imgTog3").click(function() {
    $('.swap3').find('img').toggle();
});

$(".imgTog2").click(function() {
    $('.swap2').find('img').toggle();
});


// $(function){
//         $('#switch').click(function(){
//             if($(this).hasClass('active'))
//             {
//                 $(this).removeClass('active');
//             }
//             else
//             {
//                 $(this).addClass('active');
//             }
//         });
//     }