.. django-messages-to-bootstrap-notify
.. README.rst

A django-messages-to-bootstrap-notify documentation
===================================================

    *django-messages-to-bootstrap-notify is a django reusable application to show django messages using bootstrap-notify*

.. contents::

Installation
------------
* Obtain your copy of source code from the git repository: ``git clone https://github.com/DCOD-OpenSource/django-messages-to-bootstrap-notify.git``. Or download the latest release from https://github.com/DCOD-OpenSource/django-messages-to-bootstrap-notify/tags/.
* Run ``python ./setup.py install`` from the repository source tree or the unpacked archive. Or use pip: ``pip install django-messages-to-bootstrap-notify``.

Configuration
-------------
Add ``"django.contrib.messages"`` and ``"dm2bn"`` to ``settings.INSTALLED_APPS``.

.. code-block:: python

    INSTALLED_APPS += (
        "django.contrib.messages",
        "dm2bn",
    )

Add ``"django.contrib.messages.middleware.MessageMiddleware"`` to ``settings.MIDDLEWARE``.

.. code-block:: python

    MIDDLEWARE += (
        "django.contrib.messages.middleware.MessageMiddleware",
    )

Add ``"django.contrib.messages.context_processors.messages"`` to ``settings.TEMPLATE_CONTEXT_PROCESSORS``.

.. code-block:: python

    TEMPLATE_CONTEXT_PROCESSORS += (
        "django.contrib.messages.context_processors.messages",
    )

And configure messages storage.

.. code-block:: python

    MESSAGE_STORAGE = "django.contrib.messages.storage.fallback.FallbackStorage"

Load ``"dm2bn_tags"`` to your base template, load vendor static by including ``dm2bn/includes/dm2bn_static.html`` template, place bootstrap-notify settings in template by calling ``{% dm2bn_settings %}`` and call ``showMessages`` function.

For example:

.. code-block:: django

    {% load dm2bn_tags %}

    {% include "dm2bn/includes/dm2bn_static.html" %}
    {% dm2bn_settings %}
    <script type="text/javascript">
        $(function () {
            // show messages
            $.showMessages({{ messages|messages2json }});
        });
    </script>

If you already use some part of vendor static, manual add missing requirements to you template.

Requirements:

 - `jquery <https://jquery.com/>`_
 - `bootstrap <https://getbootstrap.com/>`_
 - `Font Awesome <http://fontawesome.io/>`_
 - `bootstrap-notify <https://github.com/mouse0270/bootstrap-notify/>`_
 - `striptags.js <https://github.com/ericnorris/striptags/>`_
 - `underscore.js <http://underscorejs.org/>`_
 - `bootstrap-notify-simple-wrapper <https://github.com/DCOD-OpenSource/bootstrap-notify-simple-wrapper/>`_

Attention
---------
For pretty looking error messages add ``"danger"`` to ``extra_tags`` in ``messages.error`` calls.

For example:

.. code-block:: python

    messages.error(request, "Something happened wrong :(", "danger")

Settings
--------
``DM2BN_MESSAGES_CUMULATIVE_DELAY``
    Use cumulative delay to showing a message. Defaults to: ``True``.

``DM2BN_MESSAGE_DELAY``
    A message showing delay (in seconds). Defaults to: ``3``.

``DM2BN_MESSAGE_DELAY_FACTOR``
    A message showing delay factor (in chars per second). Defaults to: ``8``.

``DM2BN_MESSAGE_ICON``
    Message icon css classes. Defaults to: ``"fa fa-exclamation-circle"``.

``DM2BN_MESSAGE_DEFAULT_SETTING``
    A message showing default settings. See `documentation <http://bootstrap-notify.remabledesigns.com/#documentation-settings>`_. Defaults to:

.. code-block:: python

    {
        "allow_dismiss": True,
        "placement": {
            "from": "top",
            "align": "right",
        },
        "delay": 3,
        "mouse_over": "pause",
    }

Licensing
---------
django-messages-to-bootstrap-notify uses the MIT license. Please check the MIT-LICENSE file for more details.

django-messages-to-bootstrap-notify includes several third party libraries which come under their respective licenses. See their licensing information in the ``dm2bn/static/dm2rbn/vendor/`` directory.

Contacts
--------
**Project Website**: https://github.com/DCOD-OpenSource/django-messages-to-bootstrap-notify/

**Author**: Alexei Andrushievich <vint21h@vint21h.pp.ua>

For other authors list see AUTHORS file.
