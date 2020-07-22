const cache = require("../data/cache");

function controllerCars(req, resp) {
  const placa = req.body.placa;
  const renavam = req.body.renavam;

  cache.clientGet(placa, renavam,resp);
}

module.exports = {
  controllerCars: controllerCars,
};
    


