run:
	npm run watch
watch:
	npm run watch
build:
	npm run build
deploy:
	make build && git add -A && git commit && git checkout master && git merge dev && git push --all && git checkout dev