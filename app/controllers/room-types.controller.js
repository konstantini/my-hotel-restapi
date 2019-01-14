var roomTypes = [
    { id: 1, type: 'Double bed room', capacity: 2, description: 'Double bed room description'},
    { id: 2, type: 'Two beds room', capacity: 2, description: 'Two beds room description'},
    { id: 3, type: 'Three beds room', capacity: 3, description: 'Three beds room description'},
]

exports.create = function(req, res) {
    var newObject = req.body;
    var id = genId();
    newObject.id = id;
    roomTypes.push(newObject);
    console.log("--->After Post, roomTypes:\n" + JSON.stringify(roomTypes, null, 4));res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.end(JSON.stringify(newObject, null, 4));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(roomTypes, null, 4));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.end(JSON.stringify(roomTypes, null, 4));  
};

exports.findOne = function(req, res) {
    var roomType = roomTypes.find(x => x.id == req.params.id);
    console.log("--->Find one: \n" + JSON.stringify(roomType, null, 4));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.end(JSON.stringify(roomType, null, 4));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updated = req.body; 
    var index = roomTypes.findIndex(x => x.id == updated.id);
    if(index < 0) {
        res.status(404).end()
    } else {
        roomTypes[index] = updated;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        res.status(200).end(JSON.stringify(roomTypes[index], null, 4));
    }
};

exports.delete = function(req, res) {
    var index = roomTypes.findIndex(x => x.id = req.params.id);
    if (index > -1) {
        roomTypes.splice(index, 1);
      }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.status(200).end();
};

function genId() {
    return roomTypes.reduce((max, p) => p.id > max ? p.id : max, roomTypes[0].id) + 1;
}