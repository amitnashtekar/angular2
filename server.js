var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/auth/getToken',function(req,res){
    console.log(req.body);
    if (req.body.username == 'test' && req.body.password == 'test') {
        res.status(200)
            .json({access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'});
    } else {
        res.sendStatus(403);
    }
});

app.get('/getItems/',function(req,res){
    console.log('req',req);
    var token=req.headers['authorization'];
    console.log("token",token);
    if(!token){
        res.sendStatus(401);
    }
    else{
        res.status(200)
            .json([ {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
                {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
                {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}]);
    }
});
app.get('/getItemsold/',function(req,res){
    console.log('req',req);
   // var token=req.headers['authorization'];
   // console.log("token",token);

        res.status(200)
            .json( [
                    {
                        "id": 1,
                        "name": "Item 1",
                        "description": "This is a description"
                    },
                    {
                        "id": 2,
                        "name": "Item 2",
                        "description": "This is a description"
                    },
                    {
                        "id": 5,
                        "name": "pppp",
                        "description": "ppppp"

                    }
                ]
            );

});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});