$(function(){
  // 新規登録の画像を選択するファイルボタン
  const realBtn = $('.icon_image-form');
  const fakeBtn = $('.icon_imagebtn');

  $(fakeBtn).on('mousedown',function(){
    $(realBtn).click();
  });
});