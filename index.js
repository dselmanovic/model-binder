function ModelBinderJS (Model){
    return function(req, res, next){
        var obj=new Model();
        for (var key in obj){
            if ((typeof obj[key])!=='function'){
                if (req.param(key))
                    obj[key]=req.param(key);
            }
        }
        req.requestModel=obj;
        next();
    }
}

module.exports=ModelBinderJS;