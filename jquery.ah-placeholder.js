/*
 * jQuery ah-placeholder plugin 1.0
 *
 * https://github.com/ahomu/jquery.ah-placeholder
 * http://havelog.ayumusato.com/develop/javascript/e189-jquery-plugin-placeholder.html
 *
 * Copyright (c) 2011 Ayumu Sato ( http://havelog.ayumusato.com )
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
    $.fn.ahPlaceholder = function(options)
    {
        // property
        var defaults = {
                placeholderColor : 'silver',
                necessaryColor : 'hotpink'
            },
            settings = $.extend({}, defaults, options);
        // method
        var init    = function()
            {
                $.data(this, 'placeholder-string', this.title);
//                $.data(this, 'placeholder-color', this.style.color);
                $.data(this, 'placeholder-color', $(this).css("color"));
                var phString    = $.data(this, 'placeholder-string'),
                    $self       = $(this);

                if ( this.value === '' ) {
                    this.value = phString;
                }
                if ( this.value === phString ) {
//                    this.style.color = settings.placeholderColor;
                      $self.css("color", $self.hasClass('necessary') ?
                          settings.necessaryColor  :
                          settings.placeholderColor
                      );
                }
                $self.focus(onFocus);
                $self.blur(onBlur);
                $self.parents().filter('form').submit(onSubmit(this));
            },
            onFocus = function()
            {
                if ( this.value === $.data(this, 'placeholder-string') ) {
                    this.value = '';
//                    this.style.color = $.data(this, 'placeholder-color');
                      $(this).css("color", $.data(this, 'placeholder-color'));
                }
            },
            onBlur  = function()
            {
                if ( this.value === '' ) {
                    this.value = $.data(this, 'placeholder-string');
//                    this.style.color = settings.placeholderColor;
                      $(this).css("color", $(this).hasClass('necessary') ?
                          settings.necessaryColor  :
                          settings.placeholderColor
                      );
                }
            },
            onSubmit= function(elm)
            {
                return function()
                {
                    if ( $(elm).val() === $.data(elm, 'placeholder-string') ) {
                        $(elm).val('');
                    }
                    return true;
                };
            };
        // construct
        this.each(function()
        {
            init.apply(this);
        });

        return this;
    };
})(jQuery);