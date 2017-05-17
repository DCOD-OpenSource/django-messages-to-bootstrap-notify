// django-messages-to-bootstrap-notify
// dm2bn/static/dm2bn/js/dm2bn.js

"use strict";

function calculateDelay(message) {
    /*
        Calculate message showing delay based on message length and reading symbols per second factor.
        @param {string} message. Message to calculate delay for.
        @return {number} message. Showing delay (in milliseconds).
    */

    var factor = (typeof messageDelayFactor === "undefined" ? 8: messageDelayFactor),
        delay = (typeof messageDelay === "undefined" ? 3000: messageDelay * 1000),
        messageLength = striptags(message).length;

    if (((messageLength / factor) * 1000) > delay) {
        return (messageLength / factor) * 1000;
    } else {
        return delay;
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
        settings = (typeof messageDefaultSettings === "undefined" ? {
            allow_dismiss: true,
            placement: {
                from: "top",
                align: "right"
            },
            delay: (typeof messageDelay === "undefined" ? 3000: messageDelay * 1000),
            mouse_over: "pause"
        }: messageDefaultSettings);

    // update settings
    settings.type = type;
    _.extend(settings, kwargs);
    // calculate message showing time
    if (delay > settings.delay) {
        settings.delay = delay;
    }

    $.notify({  // show message
        message: message,
        icon: (typeof messageIcon === "undefined" ? "": messageIcon)
    }, settings);
}


function showMessages(messages) {
    /*
        Show messages.
        @param {Array} messages. Messages to show.
    */

    var delay = 0;

    _.each(messages, function (message) {
        // use cumulative delay
        if ((typeof messagesCumulativeDelay === "undefined" ? true: messagesCumulativeDelay)) {
            delay += calculateDelay(message.message);
        } else {
            delay = calculateDelay(message.message);
        }
        showMessage(message.message, message.type, {
            delay: delay
        });
    });
}
