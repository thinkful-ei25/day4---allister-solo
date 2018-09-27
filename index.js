

'use strict';
$(function() {  

  $('.thumbnail img').click(function() {
  
    $('.hero img').attr('src', $(this).attr('src'));
    console.log(this);
  });

});