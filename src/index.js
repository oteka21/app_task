const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// configuration
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));

//routes

app.get('/', (req,res)=>{
	res.render('index.ejs');
})



app.get('*', (req,res)=>{
	res.send('archivo no encontrado');
});

app.listen(3000, ()=>{
	console.log('servidor corriendo en puerto 3000');
})