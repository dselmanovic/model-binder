function ModelBinderJS(Model) {
    return function(req, res, next) {
        var obj = new Model();
        var params = req.method == 'POST' ? req.body : req.params;

        for (var key in obj) {
            if ((typeof obj[key]) !== 'function') {
                if (params[key.toString()])
                    obj[key] = params[key.toString()];
            }
        }

        req[Model.name.toString().toLowerCase()] = obj;
        next();
    }
}

module.exports = ModelBinderJS;