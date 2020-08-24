$(document).on('turbolinks:load', function(){
  $('.fa-bars').on('click',function(){
      $('.edit_box').removeClass('clear_box');
      return false;
  });
  $('.close_btn').on('click',function(){
      $('.edit_box').addClass('clear_box');
      return false;
  });

  const likeBtn = $('.likebtn')
  const dammy = $('.likebtn_dammy')

  $(dammy).on('mousedown',function(){
    $(likeBtn).click();
  });
  
  // ユーザー編集画面で背景確認ができるように
  $('[name="user[bgi]"]').change(function() {

    let bgi = $(this).val();
    let Img = $('.user_show-header').attr('src');
    let nowImg = 'img[src="' + Img + '"]';

    let image1 = "/assets/show_header1-1f343e79fcb0f14ebe0be58442c142aace42257cbbab3574c0c8bdd047646f9e.jpg"
    let image2 = "/assets/show_header2-467169fe873cadf6067ea988fe52bdad3a4db57e044f9fac8d5cacd58bd5019c.jpg"
    let image3 = "/assets/show_header3-3f8e7d3e3b42a4f385383ff398dd912e8b87fee0ab014c5300d616d2946bc172.jpg"
    let image4 = "/assets/show_header4-910a738e701a3f43f1d9daf4d52872f614be2e7e6eeca0bb4537bfd5c589c2bf.jpg"
    let image5 = "/assets/show_header5-1ba20ddd5408406e2328983f0ad0ddce6053e430c57cadb2e1c8578ff1c8dbf7.jpg"
    let image6 = "/assets/show_header6-4770ed7b07ccd7275be75f982fd047402b46ec83ceac7973af9523684d2d5553.jpg"
    let image7 = "/assets/show_header7-ec78f2435a2aca23231020f805da4925269260e2499bac7060032064aabba79a.jpg"

      if (bgi == "背景1") {
        $(nowImg).attr('src',image1);
      } else if (bgi == "背景2") {
        $(nowImg).attr('src',image2);
      } else if (bgi == "背景3") {
        $(nowImg).attr('src',image3);
      } else if (bgi == "背景4") {
        $(nowImg).attr('src',image4);
      } else if (bgi == "背景5") {
        $(nowImg).attr('src',image5);
      } else if (bgi == "背景6") {
        $(nowImg).attr('src',image6);
      } else if (bgi == "背景7") {
        $(nowImg).attr('src',image7);
      }
  });

  // 画像選択
  $(function(){
    const iconBtn = $('.icon_change-dammy');
    const iconFakeBtn = $('.icon_change');
    const sendBtn = $('.change_btn');
    const sendFakeBtn = $('.change_btn-fake');

    $(iconFakeBtn).on('mousedown',function(){
      $(iconBtn).click();
    });
    $(sendFakeBtn).on('mousedown',function(){
      $(sendBtn).click();
    });
  });

  $('.icon_change-dammy').change(function(e){
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
        $(".usershow_icon").attr("src", e.target.result);
        $(".usershow_icon").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);
  });

  // 文字数カウント
  $('.introduction_change').keyup(function(){
    let count = $(this).val().length;
    

    if(count > 350){
      $('.count').text(count+'/350 文字');
      $('.count').css('color','red');
      $('.count').text(count+'/350 文字 オーバーしてます');
    }
    else if(count <= 350){
      $('.count').text(count+'/350 文字');
      $('.count').css('color','grey');
    }
  });


  $
});