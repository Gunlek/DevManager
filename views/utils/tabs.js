let $ = require('jquery');

$(document).ready(function(){

  $('.tab-titles a').click(function(e){
    e.preventDefault();
    let toggle = $(this).attr('data-toggle');

    $('.tabs .tab').css('display', 'none');
    $('.tab[id="'+toggle+'"]').css('display', 'block');

    $('.tab-titles li').css('background-color', '#34495e');
    $('.tab-titles li').attr('selected', null);
    $(this).find('li').css({
      'background-color': '#2c3e50',
      'transition': '0.2s background-color'
    });
    $(this).find('li').attr("selected", 1);
  });

  $('.tab-titles a li').hover(function(e){
    $(this).css({
      'background-color': '#2c3e50',
      'transition': '0.2s background-color'
    });
  });

  $('.tab-titles a li').mouseleave(function(e){
    if($(this).attr('selected') != "selected"){
      $(this).css({
        'background-color': '#34495e',
        'transition': '0.2s background-color'
      });
    }
  });

  $(".tab").ready(function(e){
    if(typeof($(this).attr("hidden")) != undefined)
    {

    }
    else
    {
      $(this).css("display", "none");
    }
  });

});
