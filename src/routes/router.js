const express = require('express');
const router = express.Router();
const con = require('../db-connection/connection');

con.connect((err)=>{
	if (err) throw err;
	console.log('conectado correctamente a la base de datos');
})

router.get('/', (req,res)=>{
	con.query('select * from tasks where task_status<>"deleted" order by task_id desc',(err,tasks)=>{
		if (err) throw err;
		res.render('index.ejs', {
			title: 'Tareas',
			tasks: tasks
		});
	});
});

router.post('/addTask', (req,res)=>{
	const body = req.body;
	con.query(`insert into tasks (task_name,task_des,task_status) values ('${body.task}','${body.taskdes}','${body.status}')`,(err)=>{
		if (err) throw err;
		console.log('tarea guardada correctamente');
	});
	con.query('select * from tasks order by task_id desc limit 1', (err,data)=>{
		if (err) throw err;
		res.send(data[0]);
	})
});

router.post('/successTask', (req,res)=>{
	const body = req.body;
	console.log(body);
	con.query(`update tasks set task_status = "success" where task_id = ${body.task_id}`,(err)=>{
		if (err) throw err;
		res.send({ message : 'cambiado correctamente' });
	})
});

router.post('/deleteTask', (req,res)=>{
	const body = req.body;
	console.log(body);
	con.query(`update tasks set task_status = "deleted" where task_id = ${body.task_id}`,(err)=>{
		if (err) throw err;
		res.send({ message : 'eliminada correctamente correctamente' });
	})
});
module.exports = router;