$(function () {
  //グローバルナビゲーション
  $(".btn-gnavi").on("click", function () {
    var rightVal = 0;
    if ($(this).hasClass("open")) {
      rightVal = -300;
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
    $(".menu-gnavi").stop().animate(
      {
        right: rightVal,
      },
      300
    );
  });

  $('a[href^="#').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
    })
});
