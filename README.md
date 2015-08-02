ModelBinderJS
========

NodeJS/ExpressJS middleware module for automated binding of request parameters to specified Model function

Usage
=====

Create your model in separate JS file (ex. person.js):
```javascript
function Person(){
    this.name='default name';
    this.email='default email';
    this.sayName=function(){
        console.log(this.name);
    };
}

module.exports=Person;
```

Then in your app just register binder middleware on actions where you need it:
```javascript
var binder=require('model-binder');

app.get('/testmodel', binder(require('./person')), function(req, res){
    console.log(req.Person);
    req.requestModel.sayName();
    return res.send(req.requestModel);
});
```

For POST requests, you only have to set body-parser in  your express application or in your post method directly. You can choose json, formurlencoded or both.
```javascript
var bodyParser = require('body-parser');
var binder = require('model-binder');
var jsonParser = bodyParser.json();

app.post('/testmodel', jsonParser, binder(require('./person')), function(req, res) {
	console.log(req.person);
});
```
