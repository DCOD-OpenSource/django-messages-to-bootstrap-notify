// django-messages-to-bootstrap-notify
// dm2bn/static/dm2bn/js/dm2bn.js

"use strict";

function calculateDelay(message) {
    /*
        Calculate message showing delay based on message length and reading symbols per second factor.
    */

    var factor = (typeof messageDelayFactor === "undefined" ? 8: messageDelayFactor),
        delay = (typeof messageDelay === "undefined" ? 3000: messageDelay),
        messageLength = striptags(message).length;

    if (((messageLength / factor) * 1000) > delay) {
        return (messageLength / factor) * 1000;
    } else {
        return delay;
    }
}


function showMessage(message, type, kwargs) {
    /*
        Show one message.
    */
    var delay = calculateDelay(message),
        settings = (typeof messageDefaultSettings === "undefined" ? {allow_dismiss: true, placement: {from: "top", align: "right"}, delay: (typeof messageDelay === "undefined" ? 3000: messageDelay), mouse_over: "pause"}: messageDefaultSettings);

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
    /* show messages */
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
