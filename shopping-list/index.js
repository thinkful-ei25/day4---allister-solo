'use strict';

function addItem() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let itemToAdd = $('.js-shopping-list-entry').val();
    console.log(itemToAdd);
    $('.shopping-list').append(`
      <li>
        <span class="shopping-item">${itemToAdd}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    
  });
}

$(addItem);