(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const addEventSuccessElement = require('./eventSuccess');
const addEventDeleteElement = require('./eventDelete');
module.exports = () => {
	const $form = document.querySelector('form');
	const $acordion = document.querySelector('#accordion');
	const $taskName = document.getElementById('taskName');
	const $taskDes = document.getElementById('taskDes');
	// console.log($acordion)
	function renderTemplate(task) {
		let bg = task.task_status == 'waiting' ? 'bg-secondary' : 'bg-success';
		return `<div class="card">
				    <div class="card-header ${bg}" id="heading-${task.task_id}">
				      <h5 class="mb-0">
				        <button class="btn btn-link text-light" data-toggle="collapse" data-target="#collapse-${task.task_id}" aria-expanded="true" aria-controls="collapse-${task.task_id}">
				          ${task.task_name}
				        </button>
				        <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
						    <button class="btn btn-light text-success check-btn" data-id="${task.task_id}">
						    <i class="far fa-check-circle"></i>
						    </button>
						    <button class="btn btn-light text-danger delete-btn" data-id="${task.task_id}">
				      		<i class="fas fa-trash"></i>
						    </button>
						</div>
				      </h5>
				    </div>
				    <div id="collapse-${task.task_id}" class="collapse" aria-labelledby="heading-${task.task_id}" data-parent="#accordion">
				      <div class="card-body">
				        ${task.task_des}
				      </div>
				    </div>
				  </div>`;
	}
	function renderTask(task) {
		let el = document.createElement('html');
		el.innerHTML = renderTemplate(task);
		const card = el.querySelector('.card');
		const btnSuccess = card.querySelector('.check-btn');
		const btnDelete = card.querySelector('.delete-btn');
		addEventSuccessElement(btnSuccess);
		addEventDeleteElement(btnDelete);
		$acordion.insertBefore(card, $acordion.childNodes[0]);
	}
	$form.addEventListener('submit', async e => {
		e.preventDefault();
		const data = new FormData($form);
		const body = {
			task: data.get('taskName'),
			taskdes: data.get('taskDes'),
			status: "waiting"
			// debugger
		};const req = await fetch('/addTask', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		const res = await req.json();
		// console.log(renderTemplate(res));
		renderTask(res);
		$taskName.value = '';
		$taskDes.value = '';
	});
};

},{"./eventDelete":3,"./eventSuccess":4}],2:[function(require,module,exports){
const addEventelement = require('./eventDelete');
module.exports = () => {
	const $checkbtns = document.querySelectorAll('.delete-btn');
	console.log($checkbtns);
	$checkbtns.forEach(element => {
		addEventelement(element);
	});
};

},{"./eventDelete":3}],3:[function(require,module,exports){
function addEventCard(element) {
	element.addEventListener('click', async () => {
		const body = {
			task_id: element.dataset.id
		};
		// debugger
		const req = await fetch('/deleteTask', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		// debugger
		const res = await req.json();
		element.parentNode.parentNode.parentNode.parentNode.remove();
	});
}

module.exports = addEventCard;

},{}],4:[function(require,module,exports){
function addEventCard(element) {
	element.addEventListener('click', async () => {
		const body = {
			task_id: element.dataset.id
		};
		// debugger
		const req = await fetch('/successTask', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		// debugger
		const res = await req.json();
		element.parentNode.parentNode.parentNode.classList.remove('bg-secondary');
		element.parentNode.parentNode.parentNode.classList.add('bg-success');
		element.remove();
	});
}

module.exports = addEventCard;

},{}],5:[function(require,module,exports){
require('./deleteTask')();
require('./successTask')();
require('./addTask')();

},{"./addTask":1,"./deleteTask":2,"./successTask":6}],6:[function(require,module,exports){
const addEventelement = require('./eventSuccess');
module.exports = () => {
	const $checkbtns = document.querySelectorAll('.check-btn');
	console.log($checkbtns);
	$checkbtns.forEach(element => {
		addEventelement(element);
	});
};

},{"./eventSuccess":4}]},{},[5]);
