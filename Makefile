install: # generates the entire dependency tree from package-lock.json
	npm ci

brain-games: # launching the 'brain-games'
	node bin/brain-games.js

publish: # publish a package
	npm publish --dry-run

lint: # launching eslint
	npx eslint .
