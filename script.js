$(function(){
  $('#contact_show').click(function(){
    $('#contact_modal').fadeIn();
  });

  $('.contact__form').click(function (e) {
    // オーバーレイの内側の要素をクリックした場合でも、親要素のイベントの伝播を防ぐ
    e.stopPropagation();
  });

  $('#contact_modal').click(function(){
    $('#contact_modal').fadeOut();
  });

});
