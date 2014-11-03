/**
  *
  * theatre.js 1.0.0 (https://github.com/happycog/theatrejs)
  * By Happy Cog (http://happycog.com)
  *
  * */
(function($){
  function handler(e){
    var trigger = $(e.target),
        key = trigger.data('theatre-trigger'),
        activeTriggerClass = trigger.data('theatre-active-trigger-class') || 'theatre-active-trigger',
        activeTargetClass = trigger.data('theatre-active-target-class') || 'theatre-active-target',
        target = $('[data-theatre-target="' + key + '"]'),
        eventPrefix = 'theatre.' + key + '.';

    var beforeToggle = $.Event(eventPrefix + 'beforeToggle');
    $(document).trigger(beforeToggle);

    if (target.length && !beforeToggle.isDefaultPrevented()) {
      trigger.toggleClass(activeTriggerClass);
      target.toggleClass(activeTargetClass);
      target.trigger(eventPrefix + 'afterToggle');
    }

    e.preventDefault();
  }

  $(document).on('click', 'a[data-theatre-trigger], button[data-theatre-trigger]', handler);
  $(document).on('submit', 'form[data-theatre-trigger]', handler);
  $(document).on('change', 'select[data-theatre-trigger]', handler);
})(jQuery);
