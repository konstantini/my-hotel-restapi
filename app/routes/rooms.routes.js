module.exports = function(app) {
 
    var controller = require('../controllers/rooms.controller.js');
 
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        next();
    });

    app.post('/api/rooms', controller.create);
 
    app.get('/api/rooms', controller.findAll);
 
    app.get('/api/rooms/:id', controller.findOne);
 
    app.put('/api/rooms/:id', controller.update);
 
    app.delete('/api/rooms/:id', controller.delete);
}