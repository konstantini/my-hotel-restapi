var items = [
    {
        id: 1,
        number: 101,
        type: { id: 1, type: 'Double bed room', capacity: 2, description: 'Double bed room description'}
    },
    {
        id: 2,
        number: 102,
        type: { id: 2, type: 'Two beds room', capacity: 2, description: 'Two beds room description'}
    },
    {
        id: 3,
        number: 103,
        type: { id: 3, type: 'Three beds room', capacity: 3, description: 'Three beds room description'}
    }
]

exports.create = function(req, res) {
    var newObject = req.body;
    var id = genId();
    newObject.id = id;
    items.push(newObject);
    console.log("--->After Post, items:\n" + JSON.stringify(items, null, 4));res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.end(JSON.stringify(newObject, null, 4));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(items, null, 4));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.end(JSON.stringify(items, null, 4));  
};

exports.findOne = function(req, res) {
    var roomType = items.find(x => x.id == req.params.id);
    console.log("--->Find one: \n" + JSON.stringify(roomType, null, 4));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.end(JSON.stringify(roomType, null, 4));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updated = req.body; 
    var index = items.findIndex(x => x.id == updated.id);
    if(index < 0) {
        res.status(404).end()
    } else {
        items[index] = updated;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        res.status(200).end(JSON.stringify(items[index], null, 4));
    }
};

exports.delete = function(req, res) {
    var index = items.findIndex(x => x.id == req.params.id);
    if (index > -1) {
        items.splice(index, 1);
      }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.status(200).end();
};

function genId() {
    return items.reduce((max, p) => p.id > max ? p.id : max, items[0].id) + 1;
}