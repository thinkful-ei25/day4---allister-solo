'use strict'
function fizzbuzzer(input) {
  if (input % 15 === 0) {
    return 'fizzbuzz';
  }
  if (input % 5 === 0) {
    return 'buzz';
  }
  if (input % 3 === 0) {
    return 'fizz';
  }
  return input;
}
function generateResultHTML(fizzbuzzResult) {
  let className = '';
  if (typeof fizzbuzzResult === 'string') {
    className = fizzbuzzResult;
  }
  return `
  <div class="fizz-buzz-item ${className}">
    <span>${fizzbuzzResult}</span>
  </div>
  `;
}

function handleSubmit() {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    event.target.reset();
    const results = [];
    for (let i = 1; i <= countTo; i++) {
      results.push(fizzbuzzer(i));
    }
    $('.js-results').html(results.map(generateResultHTML));
    });
  
  }

  $(handleSubmit);