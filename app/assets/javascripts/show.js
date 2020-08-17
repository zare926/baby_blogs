$(document).on('turbolinks:load', function(){
  $('.fa-bars').on('click',function(){
      $('.edit_box').removeClass('clear_box');
      return false;
  });
  $('.close_btn').on('click',function(){
      $('.edit_box').addClass('clear_box');
      return false;
  });
});