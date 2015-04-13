DEFAULT:
	make test

test:
	./node_modules/.bin/mocha --timeout 20000 $(ARGS) test/

.PHONY: \
	DEFAULT \
	test \