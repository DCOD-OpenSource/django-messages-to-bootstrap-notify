// bootstrap-notify-simple-wrapper
// bootstrap-notify-simple-wrapper.js

"use strict";

(function($){

    // fill settings from global variables
    var settings = {
        cumulativeDelay: (typeof messagesCumulativeDelay === "undefined" ? true: messagesCumulativeDelay),
        delay: (typeof messageDelay === "undefined" ? 3000: messageDelay * 1000),
        delayFactor: (typeof messageDelayFactor === "undefined" ? 8: messageDelayFactor),
        icon: (typeof messageIcon === "undefined" ? "fa fa-exclamation-circle": messageIcon),
        defaultSettings: (typeof messageDefaultSettings === "undefined" ? {
            allow_dismiss: true,
            placement: {
                from: "top",
                align: "right"
            },
            delay: (typeof messageDelay === "undefined" ? 3000: messageDelay * 1000),
            mouse_over: "pause"
        }: messageDefaultSettings)

    };

    /**
     * Calculate message showing delay based on message length and reading symbols per second factor.
     *
     * @param {string} message. Message to calculate delay for.
     * @return {number} message. Showing delay (in milliseconds).
     */
    function calculateDelay(message) {

        var messageLength = striptags(message).length;

        if (((messageLength / settings.delayFactor) * 1000) > settings.delay) {
            return (messageLength / settings.delayFactor) * 1000;
        } else {
            return settings.delay;
        }
    }

    /**
     * Show message.
     * @param {string} message. Message to show.
     * @param {string} type. Message type.
     * @param {object} kwargs. Additional message settings.
     */
    function showMessage(message, type, kwargs) {
        var delay = calculateDelay(message),
            config = settings.defaultSettings;

        // update settings
        config.type = type;
        $.extend(config, kwargs);
        config.delay = delay;

        $.notify({  // show message
            message: message,
            icon: settings.icon
        }, config);
    }

    /**
     * Show messages.
     * @param {Array} messages. Messages to show.
     * @param {object} kwargs. Additional messages settings.
     */
    $.showMessages = function(messages, kwargs) {
        var delay = 0;

        $.each(messages, function (i, message) {
            // use cumulative delay
            if (settings.cumulativeDelay) {
                delay += calculateDelay(message.message);
            } else {
                delay = calculateDelay(message.message);
            }
            $.extend(kwargs, {
                delay: delay
            });
            showMessage(message.message, message.type, kwargs);
        });
    }

})(jQuery);
