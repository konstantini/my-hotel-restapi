module.exports = function(app) {
 
    var roomTypes = require('../controllers/room-types.controller.js');
 
    app.post('/api/room-types', roomTypes.create);
 
    app.get('/api/room-types', roomTypes.findAll);
 
    app.get('/api/room-types/:id', roomTypes.findOne);
 
    app.put('/api/room-types/:id', roomTypes.update);
 
    app.delete('/api/room-types/:id', roomTypes.delete);
}