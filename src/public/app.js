(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = ()=>{
	const $form = document.querySelector('form');
	// console.log($form);
	$form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const data = new FormData($form);
	const body = {
		task: data.get('taskName'),
		taskdes: data.get('taskDes'),
		estatus: "waiting"
	}
	console.log(body);
	});
}
},{}],2:[function(require,module,exports){
const addTask = require('./addTask');
addTask();
},{"./addTask":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdGVrYTIxL0RvY3VtZW50cy9wcm95ZWN0b3MvYXBwLXRhcmVhcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL290ZWthMjEvRG9jdW1lbnRzL3Byb3llY3Rvcy9hcHAtdGFyZWFzL3NyYy9zY3JpcHRzL2FkZFRhc2suanMiLCIvVXNlcnMvb3Rla2EyMS9Eb2N1bWVudHMvcHJveWVjdG9zL2FwcC10YXJlYXMvc3JjL3NjcmlwdHMvZmFrZV9lYTQ3NmFlNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9ICgpPT57XG5cdGNvbnN0ICRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXHQvLyBjb25zb2xlLmxvZygkZm9ybSk7XG5cdCRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT57XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybSk7XG5cdGNvbnN0IGJvZHkgPSB7XG5cdFx0dGFzazogZGF0YS5nZXQoJ3Rhc2tOYW1lJyksXG5cdFx0dGFza2RlczogZGF0YS5nZXQoJ3Rhc2tEZXMnKSxcblx0XHRlc3RhdHVzOiBcIndhaXRpbmdcIlxuXHR9XG5cdGNvbnNvbGUubG9nKGJvZHkpO1xuXHR9KTtcbn0iLCJjb25zdCBhZGRUYXNrID0gcmVxdWlyZSgnLi9hZGRUYXNrJyk7XG5hZGRUYXNrKCk7Il19
