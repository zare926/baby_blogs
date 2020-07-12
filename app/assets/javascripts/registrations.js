$(function(){
  // 新規登録の画像を選択するファイルボタン
  const realBtn = $('.icon_image-form');
  const fakeBtn = $('.icon_imagebtn');

  $(fakeBtn).on('mousedown',function(){
    $(realBtn).click();
  });

  //Icon画像のプレビュー
  $('.icon_image-form').change(function(e){
    //ファイルオブジェクトを取得する
    let file = e.target.files[0];
    let reader = new FileReader();
 
    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }
 
    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $(".icon_image").attr("src", e.target.result);
        $(".icon_image").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);
  });
});