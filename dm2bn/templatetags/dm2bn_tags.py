# -*- coding: utf-8 -*-

# django-messages-to-bootstrap-notify
# dm2bn/templatetags/dm2bn_tags.py

from __future__ import unicode_literals
from json import dumps

from django import template
from django.utils.safestring import mark_safe

from dm2bn.settings import (
    MESSAGES_CUMULATIVE_DELAY,
    MESSAGE_DELAY,
    MESSAGE_DELAY_FACTOR,
    MESSAGE_ICON,
    MESSAGE_DEFAULT_SETTING,
)


__all__ = [
    "messages2json",
    "dm2bn_settings",
]


register = template.Library()


@register.filter
def messages2json(messages):
    """
    Convert user messages to json.
    :param messages: instance of django messages storage.
    :type messages: django.contrib.settings.MESSAGE_STORAGE.
    :return: django messages converted to JSON.
    :rtype: django.utils.safestring.SafeBytes.
    """

    return mark_safe(dumps([{"type": message.tags, "message": message.message, } for message in messages if message] if messages else []))


@register.inclusion_tag("dm2bn/templatetags/dm2bn_settings.html")
def dm2bn_settings():
    """
    Configure django messages to bootstrap-notify.
    :return: context for template.
    :rtype: dict.
    """

    return {
        "MESSAGES_CUMULATIVE_DELAY": mark_safe(dumps(MESSAGES_CUMULATIVE_DELAY)),
        "MESSAGE_DELAY": MESSAGE_DELAY,
        "MESSAGE_DELAY_FACTOR": MESSAGE_DELAY_FACTOR,
        "MESSAGE_ICON": mark_safe(dumps(MESSAGE_ICON)),
        "MESSAGE_DEFAULT_SETTING": mark_safe(dumps(MESSAGE_DEFAULT_SETTING)),
    }
