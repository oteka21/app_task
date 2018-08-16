module.exports = ()=>{
	const $form = document.querySelector('form');
	// console.log($form);
	console.log($form);
	$form.addEventListener('submit', async (e)=>{
	e.preventDefault();
	const data = new FormData($form);
	const body = {
		task: data.get('taskName'),
		taskdes: data.get('taskDes'),
		estatus: "waiting"
	}
	console.log(body);
		const req = await fetch('/addTask', {
		method: 'POST',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    	},
    	body: JSON.stringify(body)
		});
		const res = await req.jsoon();
	});
}