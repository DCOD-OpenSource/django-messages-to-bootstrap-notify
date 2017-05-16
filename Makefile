# django-messages-to-bootstrap-notify
# Makefile

docs:
	rst2html README.rst > index.html && zip docs.zip index.html

clear:
	rm -rf index.html docs.zip build dist # django_messages_to_bootstrap_notify.egg-info

build:
	./setup.py bdist_wheel sdist

upload:
	./setup.py bdist_wheel sdist upload
