var mongoose = require ('mongoose');
var db = mongoose.connection;
mongoose.promise = Promise;

mongoose.connect('mongodb://localhost/thirsty-mongoose');


db.once('open', () => console.log(`connection successful ${db.host}:${db.port}`));
