//jshint esversion:6
 $('.mid-2').scrollTop(1000);
 $('.mid-4').scrollTop(1000);
 // ('.mid-scroll').delay(1).css('scroll-behavior', 'smooth');
 console.log($('.mid-scroll').css('height'));
 const remainingHeight = parseInt($('.mid-scroll').css('height')) + 117;
 const remainingHeightMinus = remainingHeight - 100 ;
 var catWasSelected = 0;

$('.bottom-h1').click(function(){
  removeSelected();
  $(this).parent().addClass('selected-h1');
});

$('.x').click(function(){
  removeSelected();
  if(parseInt($('.bottom').css('height')) != 117){
    $('.bottom').animate({height: '117px'}, 500);
    $('.mid-div').css('display','block');
    $('.products').animate({height: 0},400);
    setTimeout(function(){
      $('.products').css('display','none');
    }, 400);
  }
  $('#home-button').addClass('selected-h1');
  $('.bottom-categories').delay(1).slideUp("slow", function(){
  });
  $('.bottom-menu').delay(1).slideDown("slow", function(){
  });
  catWasSelected = 0;
});

$('.cat').click(function(event){
  var categorySelected = event.target.id;
  if(catWasSelected == 0){
    $('.mid-div').css('display','none');
    $('.bottom').animate({height: remainingHeight + 'px'},300);
    slideCatUp(categorySelected);
    catWasSelected++;
  } else {
    $('.selectedCat').animate({height: 0}, {
      duration: 500,
      complete: function() {
        $('.selectedCat').removeClass('selectedCat');
        slideCatUp(categorySelected);
      }
    });
  }
});

function openCategories(){
  $('.bottom-menu').delay(1).slideUp("slow", function(){
  });
  $('.bottom-categories').delay(1).slideDown("slow", function(){
  });
}


function removeSelected() {
  $('.bottom-h1-div').removeClass('selected-h1');
}

function slideCatUp(x) {
  $('.'+x).animate({height: remainingHeightMinus + 'px'},500);
  setTimeout(function(){
    $('.'+x).css('display','inline-block');
  }, 100);
  $('.'+x).addClass('selectedCat');
}

function openUserMenu() {
  $('.user-menu').css('display','inline-block');
  $('.user-menu').animate({width: '300px'});
}

function closeUserMenu() {
  $('.user-menu').animate({width: '0px'}, {
    complete: function() {
      $('.user-menu').css('display','none');
    }
  });
}

  // $(".mid-1").animate({ scrollTop: 1470 }, {
  //   duration: 10000,
  //   complete: function() {
  //     $('.mid-1').scrollTop(0);
  //   }
  // });

  // function scrollHandler () {
  //     var test = $(".mid-1");
  //   // how far the user has scrolled so far on the page
  //   const scrolled = test.innerHeight + test.scrollY;
  //   // height of the document
  //   const documentHeight = test.offsetHeight;
  //   // the amount of distance in pixels needed from the bottom of the page before the page scrolls to the top
  //   const offset = 100;
  //   if (offset + scrolled >= documentHeight)
  //
  //     window.scrollTo(0,0);
  // }
  //
  // test.addEventListener('scroll', scrollHandler);
