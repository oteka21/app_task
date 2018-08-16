(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = () => {
	const $form = document.querySelector('form');
	// console.log($form);
	console.log($form);
	$form.addEventListener('submit', async e => {
		e.preventDefault();
		const data = new FormData($form);
		const body = {
			task: data.get('taskName'),
			taskdes: data.get('taskDes'),
			estatus: "waiting"
		};
		console.log(body);
		const req = await fetch('/addTask', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		const res = await req.json();
	});
};

},{}],2:[function(require,module,exports){
require('./addTask')();

},{"./addTask":1}]},{},[2]);
