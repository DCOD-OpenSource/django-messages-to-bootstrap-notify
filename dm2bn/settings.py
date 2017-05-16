# -*- coding: utf-8 -*-

# django-messages-to-bootstrap-notify
# dm2bn/settings.py

from __future__ import unicode_literals

from django.conf import settings


__all__ = [
    "MESSAGES_CUMULATIVE_DELAY",
    "MESSAGE_DELAY",
    "MESSAGE_DELAY_FACTOR",
    "MESSAGE_ICON",
    "MESSAGE_DEFAULT_SETTING",
]


MESSAGES_CUMULATIVE_DELAY = getattr(settings, "DM2BN_MESSAGES_CUMULATIVE_DELAY", True)
MESSAGE_DELAY = getattr(settings, "DM2BN_MESSAGE_DELAY", 3)  # in seconds
MESSAGE_DELAY_FACTOR = getattr(settings, "DM2BN_MESSAGE_DELAY_FACTOR", 8)  # in chars per second
MESSAGE_ICON = getattr(settings, "DM2BN_MESSAGE_ICON", "fa fa-exclamation-circle")  # icon css classes
MESSAGE_DEFAULT_SETTING = getattr(settings, "DM2BN_MESSAGE_DEFAULT_SETTINGS", {  # See "http://bootstrap-notify.remabledesigns.com/#documentation-settings"
    "allow_dismiss": True,
    "placement": {
        "from": "top",
        "align": "right",
    },
    "delay": MESSAGE_DELAY,
    "mouse_over": "pause",
})
