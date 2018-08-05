var amountFeaturedPosts = $(".featured-posts").children().length * 675;
var trans = "transition: all .5s ease 0s;"
var transn = "transition: none;"

var txt = "transform: translateX(-675px); " + trans + " width: " + amountFeaturedPosts + "px;";
fposts.style.cssText = txt;

left.addEventListener("click", function() {move(-1)});
right.addEventListener("click", function() {move(1)});
document.getElementsByClassName("fpbuttons")[0].addEventListener("click", function() {
  check();
  clearInterval(timerId);
});

function move(coeff) {
  var posts = document.getElementsByClassName("featured-post");
  var n = posts.length;
  for (i=0; i<n; i++) {
    if (posts[i].className.substr(14) == "active") {
      posts[i].className = posts[i].className.substr(0, 13);
      if (posts[i + coeff].className.substr(14) == "cloned") {
        posts[kek(coeff, n)].className += " active";
        break;
      }
      else {
        posts[i + coeff].className += " active";
        break;
      }
    }
  }
  var wth = 675;
  var transX = parseInt(fposts.style.transform.slice(11, -3));
  var newTransX = transX - coeff * wth;
  var txt = "transform: translateX(" + newTransX.toString() + "px); " + trans + " width: " + amountFeaturedPosts + "px;";
  fposts.style.cssText = txt;
}

function check() {

  if (parseInt(fposts.style.transform.slice(11, -3)) == 0) {var forKek = -1}
    else if (parseInt(fposts.style.transform.slice(11, -3)) == -675*(document.getElementsByClassName("featured-post").length - 1)) {var forKek = 1}
      else  {return};
    var posts = document.getElementsByClassName("featured-post");
    var n = posts.length;
    var newTransX = -675*kek(forKek, n);
    setTimeout(function() {
      fposts.style.transition = "none";
      fposts.style.transform = "translateX(" + newTransX.toString() + "px)";
    }, 500)
  }

function kek(x, n) {
  return 0.5 * ((3 - n) * x + n - 1)
}

var timerId = setInterval (function() {
  move(1);
  check()
}, 3000);