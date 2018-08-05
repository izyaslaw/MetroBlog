var blockWidth = 627;

$(window).resize(function() {
	checksize();
});

function checksize() {
  if (blockWidth > $('.heat-content').outerWidth()) {
    $('.menu').css("display", "none");
    $('.menu-button').css("display", "flex");
  }
  else {
  	$('.menu').css("display", "flex");
  	$('.menu-button').css("display", "none");
  }
}

$('.menu-button').click(function() {
	alert($(window).outerWidth())
})

checksize();