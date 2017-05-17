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

    function calculateDelay(message) {
        /*
            Calculate message showing delay based on message length and reading symbols per second factor.
            @param {string} message. Message to calculate delay for.
            @return {number} message. Showing delay (in milliseconds).
        */

        var messageLength = striptags(message).length;

        if (((messageLength / settings.delayFactor) * 1000) > settings.delay) {
            return (messageLength / settings.delayFactor) * 1000;
        } else {
            return settings.delay;
        }
    }

    function showMessage(message, type, kwargs) {
        /*
            Show message.
            @param {string} message. Message to show.
            @param {string} type. Message type.
            @param {object} kwargs. Additional message settings.
        */

        var delay = calculateDelay(message),
            config = settings.defaultSettings;

        // update settings
        config.type = type;
        _.extend(config, kwargs);
        config.delay = delay;

        $.notify({  // show message
            message: message,
            icon: settings.icon
        }, config);
    }

    $.showMessages = function(messages) {
        /*
            Show messages.
            @param {Array} messages. Messages to show.
        */

        var delay = 0;

        _.each(messages, function (message) {
            // use cumulative delay
            if (settings.cumulativeDelay) {
                delay += calculateDelay(message.message);
            } else {
                delay = calculateDelay(message.message);
            }
            showMessage(message.message, message.type, {
                delay: delay
            });
        });
    }

})(jQuery);
