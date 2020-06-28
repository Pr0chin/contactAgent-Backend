var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const route = require('./routes/route')
const port = 3000;

require('./routes/controller/config/passport');


var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//connect to mondo db
mongoose.connect('mongodb://localhost:27017/contactAgent', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error)
        console.log('sucesss');

    else
        console.log('err', +err);
});
//on connection
// mongoose.connection.on('connected',()=>{
//     console.log('sucessfully connected on 27017');
// })
//on error
// mongoose.connection.on('error',(err)=>{
//     if(err)
//     console.log('err',+err);
// })

//body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', route); //8 line

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//for testing server
app.get('/', (req, res) => {
    res.send('check this out');
})
var server= app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
