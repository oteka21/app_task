const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const app = express();

// configuration
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('./src/public/'));


//middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json())

//routes

app.use('/', router);


app.get('*', (req,res)=>{
	res.send('archivo no encontrado');
});

app.listen(3000, ()=>{
	console.log('servidor corriendo en puerto 3000');
});