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

  $(function(){
    const scrollBtn = $('.top_scroll')
    $(scrollBtn).css({opacity:'0'});
    setTimeout(function(){
        $(scrollBtn).stop().animate({opacity:'1'},1000);
    },2200);
  });

  // ローディング
  $(function(){
    const load = $('.loading');
    $(load).css({opacity:'1'});
    setTimeout(function(){
        $(load).stop().animate({opacity:'0'},400);
    },1000);
  });



  // 投稿ページの画像選択ボタン
  $(function(){
    const realBtn = $('.image_form');
    const fakeBtn = $('.image_form-btn');

    $(fakeBtn).on('mousedown',function(){
      $(realBtn).click();
    });
  });

  // 投稿ページ、投稿ボタン
  $(function(){
    const realBtn = $('.post_submit');
    const fakeBtn = $('.post_submit-dammy');

    $(fakeBtn).on('mousedown',function(){
      $(realBtn).click();
    });
  });

  const noteIconColor = $('.note-recent-color');

  noteIconColor.css('background-color','bisque')
});

$(document).on('turbolinks:load', function(){
  $('.image_form').change(function(e){
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
        $(".image_area").attr("src", e.target.result);
        $(".image_area").attr("title", file.name);
        $(".image_field-info").text('');
      };
    })(file);
    reader.readAsDataURL(file);
  });
});

// scroll後fadein
$(function(){
  function animation(){
    $('.fadein').each(function(){
      //ターゲットの位置を取得
      let target = $(this).offset().top;
      //スクロール量を取得
      let scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      let windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function (){
    animation();
  });
});

// scrollボタン表示
$(document).on('turbolinks:load', function(){
  let pagetop = $('.top_scroll');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 1000) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 750);
     return false;
  });
});

// ページが一番下までスクロールされた時に、スクロールボタン移動
$(window).on('scroll', function () {
  var doch = $(document).innerHeight(); //ページ全体の高さ
  var winh = $(window).innerHeight(); //ウィンドウの高さ
  var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
  if (bottom <= $(window).scrollTop()) {
  //一番下までスクロールした時に実行
    $('.top_scroll').css({'left':'90%','bottom':'320px','transition':'.5s'});
  }
  else {
    $('.top_scroll').css({'left':'50%','bottom':'25px'});
  }
});