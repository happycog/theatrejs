$(document).on('click', '[data-theater-trigger]', function (event) {
  event.preventDefault();

  var el = $(this);
  var key = el.attr('data-theater-trigger');

  var namespace = '';
  var matches = key.match(/^(.*)\[/);
  if (matches[1]) {
    var namespace = matches[1];
  }

  if (el.hasClass('active')) {
    el.activeTrigger('deactivate');
    $('[data-theater-target="'+key+'"]').removeClass('active');
  }
  else {
    if (namespace) {
      $('[data-theater-target^="'+namespace+'["]').removeClass('active');
      $('[data-theater-trigger^="'+namespace+'["]').each(function() {
        $(this).activeTrigger('deactivate');
      });

    }
    el.activeTrigger('activate');
    $('[data-theater-target="'+key+'"]').addClass('active');
  }
});

$.fn.activeTrigger = function(action) {
  if (action == 'activate') {
    this.addClass('active');
    this.addClass(this.attr('data-theater-trigger-add-class'));
    this.removeClass(this.attr('data-theater-trigger-remove-class'));
    this.find('[data-theater-trigger-add-class]').each(function() {
      $(this).addClass($(this).attr('data-theater-trigger-add-class'));
      $(this).removeClass($(this).attr('data-theater-trigger-remove-class'));
    });
  }

  else if (action == 'deactivate') {
    this.removeClass('active');
    this.addClass(this.attr('data-theater-trigger-remove-class'));
    this.removeClass(this.attr('data-theater-trigger-add-class'));
    this.find('[data-theater-trigger-add-class]').each(function() {
      $(this).addClass($(this).attr('data-theater-trigger-remove-class'));
      $(this).removeClass($(this).attr('data-theater-trigger-add-class'));
    });
  }

  return this;
}
