$(function(){
  $('.fa-bars').on('click',function(){
      $('.edit_box').removeClass('clear_box');
      $('.edit_box-image').css('display','');
      return false;
  });
  $('.close_btn').on('click',function(){
      $('.edit_box').addClass('clear_box');
      $('.edit_box-image').css('display','none');
      return false;
  });
});