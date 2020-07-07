$(function(){

  const load = $('.loading');
  load.fadeOut(4000);

  // const loadLogo = $('.loading_logo');
  // loadLogo.fadeOut(1800);


  // headerが一番上までスクロールされたら固定処理
  let header = $('.main_header'),
      offset = header.offset();
  
  const title = $('.main_header-titlelogo')
  
	$(window).scroll(function () {
 		 if($(window).scrollTop() > offset.top) {
      $(".main_header").addClass("main_header-s");
      title.addClass("main_header-titlelogotop");

 		 } else {
      $(".main_header").removeClass("main_header-s");
      title.removeClass("main_header-titlelogotop");
      
 		 }
  });

  const search = $('.fa-search');
  const btn = $('.bsearch_btn');

  $(search).on('mousedown',function(){
    $(btn).click();
  });



  $(function(){
    const logo = $('.top_logo')
    $(logo).css({opacity:'0'});
    setTimeout(function(){
        $(logo).stop().animate({opacity:'1'},2000);
    },3000);
  });

  $(function(){
    const topImage = $('.top_logoarea');
    $(topImage).css({opacity:'0'});
    setTimeout(function(){
        $(topImage).stop().animate({opacity:'1'},1500);
    },2000);
  });

  // ロゴフェードイン
  
});



