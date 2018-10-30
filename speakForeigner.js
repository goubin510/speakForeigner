var unirest = require('unirest');

var args = process.argv.slice(3);
var lang = process.argv[2];

if(lang[0] != '/') {
	unirest.post('https://translate.yandex.net/api/v1.5/tr.json/translate')
	.headers({'Content-Type': 'application/x-www-form-urlencoded'})
	.send({
		"key": "trnsl.1.1.20180914T140756Z.a55d35713de03908.1f9c068178f2b593ebe3bb02afb62f272e287cde",
		"lang": "en-" + lang,
		"text": args.join(' ')
	})
	.end(function (response) {
		console.log(lang + " : " + response.body.text[0]);

		unirest.post('https://translate.yandex.net/api/v1.5/tr.json/translate')
		.headers({'Content-Type': 'application/x-www-form-urlencoded'})
		.send({
			"key": "trnsl.1.1.20180914T140756Z.a55d35713de03908.1f9c068178f2b593ebe3bb02afb62f272e287cde",
			"lang": lang + "-en",
			"text": response.body.text[0]
		})
		.end(function (response) {
		 	console.log("en : " + response.body.text[0]);
		});
	});
}else {
	lang = lang.slice(1);

	unirest.post('https://translate.yandex.net/api/v1.5/tr.json/translate')
	.headers({'Content-Type': 'application/x-www-form-urlencoded'})
	.send({
		"key": "trnsl.1.1.20180914T140756Z.a55d35713de03908.1f9c068178f2b593ebe3bb02afb62f272e287cde",
		"lang": lang + "-en",
		"text": args.join(' ')
	})
	.end(function (response) {
	 	console.log("en : " + response.body.text[0]);
	});
}