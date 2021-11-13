module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ts,json,log,lock,tsx,eot,svg,ttf,woff,woff2,png,jpg,css,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'src/sw.js'
};