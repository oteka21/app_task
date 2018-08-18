function addEventCard(element){
	element.addEventListener('click', async ()=>{
			const body = {
				task_id: element.dataset.id
			};
			// debugger
			const req = await fetch('/successTask',{
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
		})
}

module.exports = addEventCard;