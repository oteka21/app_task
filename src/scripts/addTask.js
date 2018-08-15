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