.. django-messages-to-bootstrap-notify
.. README.rst

A django-messages-to-bootstrap-notify documentation
===================================================

    *django-messages-to-bootstrap-notify is a django reusable application to show django messages using bootstrap-notify*

.. contents::

Installation
------------
* Obtain your copy of source code from the git repository: ``git clone https://github.com/DCOD-OpenSource/django-messages-to-bootstrap-notify.git``. Or download the latest release from https://github.com/DCOD-OpenSource/django-messages-to-bootstrap-notify/tags/.
* Run ``python ./setup.py install`` from repository source tree or unpacked archive. Or use pip: ``pip install django-messages-to-bootstrap-notify``.

Configuration
-------------
Add ``"dm2bn"`` to ``settings.INSTALLED_APPS``.

.. code-block:: python

    INSTALLED_APPS += (
        "dm2bn",
    )


Settings
--------
``DM2BN_MESSAGES_CUMULATIVE_DELAY``
    Use cumulative delay to showing message. Defaults to: ``True``.

``DM2BN_MESSAGE_DELAY``
    Message showing delay (in seconds). Defaults to: ``3``.

``DM2BN_MESSAGE_DELAY_FACTOR``
    Message showing delay factor (in chars per second). Defaults to: ``8``.

``DM2BN_MESSAGE_ICON``
    Message icon css classes. Defaults to: ``"fa fa-exclamation-circle"``.

``DM2BN_MESSAGE_DEFAULT_SETTING``
    Message showing default settings. See documentation (http://bootstrap-notify.remabledesigns.com/#documentation-settings). Defaults to:

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
