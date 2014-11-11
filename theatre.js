/**
  *
  * theatre.js 1.1.0 (https://github.com/happycog/theatrejs)
  * By Happy Cog (http://happycog.com)
  *
  * */
(function($){
  
  /**
   * Toggle Attribute
   * 
   * Allows you to toggle the presence (and/or value) of an attribute
   * on an element. Passing an attribute name only will add or remove
   * the attribute on subsequent calls. Passing a name and a value
   * will check the value and if the new value does not match the
   * existing value it will remove the attribute.
   */
  $.fn.toggleAttr = function(attrName, attrValue) {
    if (attrValue == undefined) { attrValue = ''; }
    return this.each(function() {
      if ($(this).attr(attrName) != undefined && $(this).attr(attrName) !== false) {
        $(this).removeAttr(attrName);
      }
      else {
        $(this).attr(attrName, attrValue);
      }
    });
  };
  
  /**
   * Click Handler
   *
   * On straight clicks the key is checked against and any targets
   * with the same key.
   */
  function clickHandler(e){
    var trigger = $(e.target),
        key = trigger.data('theatre-trigger');

    trigger.toggleAttr('data-theatre-active');
    
    toggleTargetsFor(key);

    e.preventDefault();
  }
  
  /**
   * Value Handler
   * 
   * When an element with a value changes and it evaluates to true
   * the key is matched and the targets are displayed. If the value
   * evaluates to false the targets are hidden.
   */
  function valHandler(e) {
    var trigger = $(e.target),
        key = trigger.data('theatre-trigger');

    if (trigger.val()) {
      trigger.attr('data-theatre-active', '');
    }
    else {
      trigger.removeAttr('data-theatre-active');
    }
    
    toggleTargetsFor(key);
  }
  
  /**
   * Change Handler
   *
   * When a select box changes and the triggers are on the options
   * the selected option will have its targets shown. All
   * unselected options will have their targets hidden.
   */
  function changeHandler(e) {
    $(this).find('option').each(function(index) {
      var trigger = $(this),
          key = trigger.data('theatre-trigger');
      
      if (trigger.is(':selected')) {
        trigger.attr('data-theatre-active', '');
      }
      else {
        trigger.removeAttr('data-theatre-active');
      }

      toggleTargetsFor(key);
    });
    
    e.preventDefault();
  }
  
  /**
   * Toggle Targets
   * 
   * Given a key, go through all the matching targets and determine
   * if all of the specified keys are active. If so, show the
   * target, otherwise hide the target.
   */
  function toggleTargetsFor(key) {
    $('[data-theatre-target~="' + key + '"]').each(function(index) {
      var target = $(this);
      var keys = target.data('theatre-target').split(/\s+/);
      var shown = true;
      for (var i=0; len=keys.length,i<len; i++) {
        if ($('[data-theatre-trigger="'+keys[i]+'"][data-theatre-active]').length == 0) {
          shown = false;
        }
      }
      if (shown) {
        target.attr('data-theatre-active', '');
      }
      else {
        target.removeAttr('data-theatre-active');
      }
    });
  }

  /**
   * Events
   *
   * Add document event listeners for all the supported theatre
   * element types.
   */
  $(document).on('click', 'a[data-theatre-trigger], button[data-theatre-trigger]', clickHandler);
  $(document).on('change', 'select[data-theatre-trigger]', valHandler);
  $(document).on('change', 'select:has(option[data-theatre-trigger])', changeHandler);
})(jQuery);
