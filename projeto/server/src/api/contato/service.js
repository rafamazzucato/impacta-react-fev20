const model = require('./model');

model.methods(['get', 'post', 'delete']);
model.updateOptions({ new : true, runValidators : true});

module.exports = model;