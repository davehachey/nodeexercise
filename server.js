/*
 *
 *	UIT Live Code (Node Exercise)
 *  Let's get started with developing some backend technology with Node.js!
 *
 *	We'll get started with creating some simple routes using Express.js, and creating our
 *	first custom module. Let's get started!
 *
 *	Task List:
 *
 *	1. Add two new routes, which will go to '/about' and '/contact'
 *	2. Instead of hardcoding your response text in res.write below, instead use the
 *	   provided module in messages.js.
 *
*/

var http = require('http');
var express = require('express');
var messages = require('./messages')

var app = express();

app.get('/', function(req, res) {
	res.write('If you see this, your route is working!');
	res.end();
});

app.get('/about', function(req, res) {
	res.write(messages.about);
	res.end();
});

app.get('/contact', function(req, res) {
	res.write(messages.contact);
	res.end();
});

app.listen(8080);
console.log("Listening on port 8080...");
