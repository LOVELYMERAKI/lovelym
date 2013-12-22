$(document).ready(function() {
  var buttons = new Array('#p1', '#p2', '#p3');
  console.log(buttons);
  $('.navi-1').click(function() {
    if (!$('#p2').hasClass('hidden') || !$('#p3').hasClass('hidden')){
      $('#p2').slideUp('slow');
      $('#p3').slideUp('slow');
      $('#p2').addClass('hidden');
      $('#p3').addClass('hidden');
    }
    if (!$('#p2').hasClass('hidden')){
      $('#p2').slideUp('slow');
      $('#p2').addClass('hidden');
    }
    if ($('#p1').hasClass('hidden')){
      $('#p1').slideDown('slow');
      $('#p1').removeClass('hidden');
    } else {
      $('#p1').slideUp('slow');
      $('#p1').addClass('hidden');
    }
  });
  $('.navi-2').click(function() {
    if (!$('#p1').hasClass('hidden') || !$('#p3').hasClass('hidden')){
      $('#p1').slideUp('slow');
      $('#p3').slideUp('slow');
      $('#p1').addClass('hidden');
      $('#p3').addClass('hidden');
    }
    if ($('#p2').hasClass('hidden')){
      $('#p2').slideDown('slow');
      $('#p2').removeClass('hidden');
    } else {
      $('#p2').slideUp('slow');
      $('#p2').addClass('hidden');
    }
  });
  $('.navi-3').click(function() {
    if (!$('#p2').hasClass('hidden') || !$('#p1').hasClass('hidden')){
      $('#p2').slideUp('slow');
      $('#p1').slideUp('slow');
      $('#p2').addClass('hidden');
      $('#p1').addClass('hidden');
    }
    if ($('#p3').hasClass('hidden')){
      $('#p3').slideDown('slow');
      $('#p3').removeClass('hidden');
    } else {
      $('#p3').slideUp('slow');
      $('#p3').addClass('hidden');
    }
  });
});
