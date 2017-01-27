'use strict';

var dropdownMenu;

function DropdownMenu() {
  this.$toggle           = $('.js-dropdown-menu-toggle');
  this.$dropdownMenu     = $('.js-dropdown-menu');

  this.bootstrap = function() {
    if (this.$toggle.length) {
      this.$toggle.each($.proxy(function(i, toggle) {
        $(toggle).hover(
          $.proxy(this.showDropdownMenu, this),
          $.proxy(this.hideDropdownMenu, this)
        );
      }, this));

      this.positionDropdownMenu();
    }
  };

  this.showDropdownMenu = function(event) {
    var id = $(event.currentTarget).attr('data-dropdown-menu-id');
    var $dropdownMenu = this.$dropdownMenu.filter('[data-dropdown-menu-id="' + id + '"]');

    $dropdownMenu.addClass('is-open');
  };

  this.hideDropdownMenu = function(event) {
    var id = $(event.currentTarget).attr('data-dropdown-menu-id');
    var $dropdownMenu = this.$dropdownMenu.filter('[data-dropdown-menu-id="' + id + '"]');

    $dropdownMenu.removeClass('is-open');
  };

  this.positionDropdownMenu = function() {
    this.$dropdownMenu.each(function(i, dropdownMenu) {
      $(dropdownMenu).css('left', ($(dropdownMenu).parent().outerWidth() / 2));
    });
  };
};

$(document).ready(function () {
  dropdownMenu = new DropdownMenu();
  dropdownMenu.bootstrap();
});
