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


  
  // $('.item').hover(function(){
  //     this.style.color = "#6b6b71"
  // });
});


