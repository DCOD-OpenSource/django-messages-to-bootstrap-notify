# -*- coding: utf-8 -*-

# django-messages-to-bootstrap-notify
# dm2bn/templatetags/dm2bn_tags.py

from __future__ import unicode_literals
from json import dumps

from django import template
from django.utils.safestring import mark_safe


__all__ = [
    "messages2json",
]


register = template.Library()


@register.filter
def messages2json(messages):
    """
    Convert user messages to json.
    Args:
        messages (django.contrib.settings.MESSAGE_STORAGE): instance of django messages storage.
    Returns:
        django.utils.safestring.SafeBytes: django messages converted to JSON.
    """

    return mark_safe(dumps([{"type": message.tags, "message": message, } for message in messages if message] if messages else []))
