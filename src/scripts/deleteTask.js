const addEventelement = require('./eventDelete');
module.exports = ()=>{
	const $checkbtns = document.querySelectorAll('.delete-btn');
	console.log($checkbtns)
	$checkbtns.forEach((element)=>{
		addEventelement(element);
	});
}