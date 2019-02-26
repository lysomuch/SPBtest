$(function() {

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');

    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');

    }
  });
  // #back-to-topを消す
    $('#back-to-top').hide();

    // スクロールが十分されたら#back-to-topを表示、スクロールが戻ったら非表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // #back-to-topがクリックされたら上に戻る
    $('#back-to-top a').click(function() {
        $('body').animate({
            scrollTop:0
        }, 500);
        return true;
    });
});
