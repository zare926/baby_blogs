$(document).on('turbolinks:load', function(){
  $('.fa-bars').on('click',function(){
      $('.edit_box').removeClass('clear_box');
      return false;
  });
  $('.close_btn').on('click',function(){
      $('.edit_box').addClass('clear_box');
      return false;
  });
  
  $('[name=bgi').change(function() {

  let bgi = $(this).val();
  let Img = $('.user_show-header').attr('src');
  let nowImg = 'img[src="' + Img + '"]';
    if (bgi == "背景1") {
      $(nowImg).attr('src','/assets/show_header1.jpg');
    } else if (bgi == "背景2") {
      $(nowImg).attr('src','/assets/show_header2.jpg');
    } else if (bgi == "背景3") {
      $(nowImg).attr('src','/assets/show_header3.jpg');
    } else if (bgi == "背景4") {
      $(nowImg).attr('src','/assets/show_header4.jpg');
    } else if (bgi == "背景5") {
      $(nowImg).attr('src','/assets/show_header5.jpg');
    } else if (bgi == "背景6") {
      $(nowImg).attr('src','/assets/show_header6.jpg');
    } else if (bgi == "背景7") {
      $(nowImg).attr('src','/assets/show_header7.jpg');
    }
    });
});