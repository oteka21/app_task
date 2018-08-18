const addEventelement = require('./eventSuccess');
module.exports = ()=>{
	const $checkbtns = document.querySelectorAll('.check-btn');
	console.log($checkbtns)
	$checkbtns.forEach((element)=>{
		addEventelement(element);
	});
}