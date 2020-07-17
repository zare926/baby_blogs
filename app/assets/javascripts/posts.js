$(document).on('turbolinks:load', function(){
  
  // headerが一番上までスクロールされたら固定処理
  let header = $('.main_header'),
      offset = header.offset();

  const title = $('.main_header-titlelogo');
  const icon = $('.user_icon');
  
	$(window).scroll(function () {
 		 if($(window).scrollTop() > offset.top) {

      $(header).addClass("main_header-s");
      title.addClass("main_header-titlelogotop");

      icon.addClass('user_icontop');

 		 } else {
      $(header).removeClass("main_header-s");
      title.removeClass("main_header-titlelogotop");
      
      icon.removeClass('user_icontop');
 		 }
  });

  // 検索のsubmitを押すための処理
  const search = $('.fa-search');
  const btn = $('.bsearch_btn');

  $(search).on('mousedown',function(){
    $(btn).click();
  });


  // ロゴフェードイン
  $(function(){
    const logo = $('.top_logo')
    $(logo).css({opacity:'0'});
    setTimeout(function(){
        $(logo).stop().animate({opacity:'1'},2000);
    },4000);
  });

  // トップ画面フェードイン
  $(function(){
    const topImage = $('.top_logoarea');
    $(topImage).css({opacity:'0'});
    setTimeout(function(){
        $(topImage).stop().animate({opacity:'1'},6000);
    },2500);
  });

  // 記事のサムネフェード
  $(function(){
    const main = $('.main')
    $(main).css({opacity:'0'});
    setTimeout(function(){
        $(main).stop().animate({opacity:'1'},1000);
    },2200);
  });

  // ローディング
  $(function(){
    const load = $('.loading');
    $(load).css({opacity:'1'});
    setTimeout(function(){
        $(load).stop().animate({opacity:'0'},1000);
    },1500);
  });
});



