function ModelBinderJS (Model){
    return function(req, res, next){
        var obj=new Model();
        for (var key in obj){
            if (((typeof obj[key])!=='function') && (req.body)){
                for (var param in req.body){
                    if (key.toLowerCase()==param.toLowerCase()){
                        obj[key]=req.body[param];
                    }
                }
            }
        }
        req.requestModel=obj;
        next();
    }
}

module.exports=ModelBinderJS;