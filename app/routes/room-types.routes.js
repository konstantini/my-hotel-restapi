module.exports = function(app) {
 
    var roomTypes = require('../controllers/room-types.controller.js');
 
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        next();
    });

    app.post('/api/room-types', roomTypes.create);
 
    app.get('/api/room-types', roomTypes.findAll);
 
    app.get('/api/room-types/:id', roomTypes.findOne);
 
    app.put('/api/room-types/:id', roomTypes.update);
 
    app.delete('/api/room-types/:id', roomTypes.delete);
}