$(function(){

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
});


