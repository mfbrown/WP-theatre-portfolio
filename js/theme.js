
jQuery(document).foundation();
jQuery(".responsive-title").fitText(5, { minFontSize: '10px', maxFontSize: '18px' });
jQuery(".responsive-subtitle").fitText(5, { minFontSize: '6px', maxFontSize: '16px' } );

$(function(){
  var $viewportWidth = $(window).width();
  if ($viewportWidth < 1024 && $viewportWidth > 640 ){
    $('.gallery-icon > a').each(function(){
      this.href = this.href.replace('.jpg', '-medium.jpg');
    });
  } else if ($viewportWidth < 640){
    $('.gallery-icon > a').each(function(){
      this.href = this.href.replace('.jpg', '-small.jpg');
    });
  }

  //Get the size of the window before we resize it.   
  var $vwBeforeResize = $(window).width();
  $(window).resize(function(){
    $vwAfterResize = $(window).width();
    //First check for a large screen
    if ($vwBeforeResize > 1024 && $vwAfterResize > 640){
      $('.gallery-icon > a').each(function(){
        this.href = this.href.replace('.jpg', '-medium.jpg');
      });
    } else if($vwBeforeResize > 1024 && $vwAfterResize < 640){
        $('.gallery-icon > a').each(function(){
        this.href = this.href.replace('.jpg', '-small.jpg');
        });
      }    

    //Then check for a medium screen
    if ($vwBeforeResize > 640 && $vwAfterResize > 1024){
      $('.gallery-icon > a').each(function(){
        this.href = this.href.replace('-medium.jpg', '.jpg');
      });
    } else if($vwBeforeResize > 640 && $vwAfterResize < 640){
        $('.gallery-icon > a').each(function(){
        this.href = this.href.replace('-medium.jpg', '-small.jpg');
        });
      }        

    //Then check for a small screen
    if ($vwBeforeResize < 640 && $vwAfterResize > 1024){
      $('.gallery-icon > a').each(function(){
        this.href = this.href.replace('-small.jpg', '.jpg');
      });
    } else if($vwBeforeResize < 640 && $vwAfterResize > 640){
        $('.gallery-icon > a').each(function(){
        this.href = this.href.replace('-small.jpg', '-medium.jpg');
        });
      }
    $vwBeforeResize = $vwAfterResize;
  });

  // NAVBAR
  $(".nav-button").click(function(){
  $('.header-nav-menu').toggleClass("onscreen");
  $('.navigation').toggleClass("overflow");
  });
  // function windowCheck (){
  //   var $vw = $(window).width();
  //   if($vw <= 480){
  //     $('.navigation-title').text("MFBLD");
  //    } else {
  //     $('.navigation-title').text("Michael Brown Lighting Designer");
  //   }
  // }
});







