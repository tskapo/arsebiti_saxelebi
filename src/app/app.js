"use strict";
import fs from 'fs';
import path from 'path';
let dir = path.dirname(__dirname);
let fn = 'გზაზე ერთი კაცი მიდიოდა';
let fullFn = "/Users/vk/Box Sync/georgian/src/ტექსტი/გზაზე ერთი კაცი მიდიოდა";
fs.readFile(fullFn, 'utf8', extract);


function extract (err, data) {
	if (err) {
		console.log(err);
		return
	}
	let words = {};
	var wordsSet = new Set();
	const str = clean(data);
	const arr = str.split(" ");
	arr.forEach(word => {
		if (word.endsWith("ი")) {
			let root = word.slice(0, -1);
			words[root] = words[root] || {};
			words[root][word] = words[root][word] || {count : 0};
			++words[root][word].count;
			wordsSet.add(word);
		}
	});
	console.log("End");
}

function clean (data) {
	let str = data
		.replace(/\n/g, " ")
		.replace(/\./g, " ")
		.replace(/,/g, " ")
		.replace(/—/g, " ")
		.replace(/\?/g, " ")
		.replace(/!/g, " ")
		.replace(/;/g, " ")
		.replace(/\(/g, " ")
		.replace(/\)/g, " ")
		.replace(/  /g, " ")
	return str;
}