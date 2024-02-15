// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
// Disable right-click


/* fbstories */
var $sliderMain = $('.single-item');
var $status = $('.pagingInfo');
var $progressBarContainer = $('.progressBarContainer');

$sliderMain.slick({
  arrows: false,
  touchMove: false,
  swipe: false,
  dots: true
});

$('.slick-dots li').each(function(index, element){
  $progressBarContainer.append('<div><span data-slick-index="'+index+'" class="progressBar"></span></div>');
  console.log(index);
});

$sliderMain.click(function() {
  $sliderMain.slick('slickGoTo', parseInt($('.single-item').slick('slickCurrentSlide'))+1);
});

// ticking machine
var percentTime;
var tick;
var time = 1;
var progressBarIndex = 0;
var isPause;

$('.progressBarContainer .progressBar').each(function(index) {
  var progress = "<div class='inProgress inProgress" + index + "'></div>";
  $(this).html(progress);
});

function startProgressbar() {
  resetProgressbar();
  percentTime = 0;
  isPause = false;
  tick = setInterval(interval, 10);
}

function interval() {
  if (($('.single-item .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
    progressBarIndex = $('.single-item .slick-track div[aria-hidden="false"]').data("slickIndex");
    startProgressbar();
  } else {
    percentTime += 1 / (time + 5);
    $('.inProgress' + progressBarIndex).css({
      width: percentTime + "%"
    });
    if (percentTime >= 100) {
      $('.single-item').slick('slickNext');
      progressBarIndex++;
      if (progressBarIndex > 2) {
        progressBarIndex = 0;
      }
      startProgressbar();
    }
  }
}

function resetProgressbar() {
  $('.inProgress').css({
    width: 0 + '%'
  });
  clearInterval(tick);
}

startProgressbar();
// End ticking machine

$('.progressBarContainer div').click(function () {
  clearInterval(tick);
  var goToThisIndex = $(this).find("span").data("slickIndex");
  $('.single-item').slick('slickGoTo', goToThisIndex, false);
  startProgressbar();
});
/* fbstories */