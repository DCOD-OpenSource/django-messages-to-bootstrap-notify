# django-messages-to-bootstrap-notify
# Makefile

docs:
	rst2html README.rst > index.html && zip docs.zip index.html

clear:
	rm -rf index.html docs.zip build dist django_messages_to_bootstrap_notify.egg-info

build:
	./setup.py bdist_wheel sdist

register:
	./setup.py bdist_wheel sdist register

upload:
	./setup.py bdist_wheel sdist upload

minify-js:
	curl -s  -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code --data-urlencode "js_code@./dm2bn/static/dm2bn/js/dm2bn.js" http://closure-compiler.appspot.com/compile > ./dm2bn/static/dm2bn/js/dm2bn.min.js
