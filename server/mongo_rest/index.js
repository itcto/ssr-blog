/**
 * Created by unsad on 2017/5/10.
 */
const generateRoutes = require('./routes');
const generateActions = require('./actions');

module.exports = function generateRest(app, router, model, prefix = '', permission) {
  let actions = generateActions(model);
  generateRoutes(app, router, model.modelName, actions, prefix, permission);
};