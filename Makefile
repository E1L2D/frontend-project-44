install: # generates the entire dependency tree from package-lock.json
	npm ci

brain-games: # launch the 'brain-games'
	node bin/brain-games.js

publish: # publish a package
	npm publish --dry-run
