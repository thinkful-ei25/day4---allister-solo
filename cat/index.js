

'use strict';
$(function() {  

  $('.thumbnail img').on('click', function() {
  
    $('.hero img').attr('src', $(this).attr('src'));
    $('.hero img').attr('alt', $(this).attr('alt'));
    console.log(this);
  });

  });

  // Still needs to allow keyboard input

