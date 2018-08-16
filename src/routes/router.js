const express = require('express');
const router = express.Router();
const con = require('../db-connection/connection');

con.connect((err)=>{
	if (err) throw err;
	console.log('conectado correctamente a la base de datos');
})

router.get('/', (req,res)=>{
	res.render('index.ejs');
});

router.post('/addTask', (req,res)=>{
	const body = req.body;
	console.log(body);
	res.send({ message: 'listoooo' }) 
});

module.exports = router;