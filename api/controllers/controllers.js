const cache = require("../data/cache");

async function controllerCars(req, resp) {
  const placa = req.body.placa;
  const renavam = req.body.renavam;

  // cache.clientGet(placa,renavam).then((carsGet)=>{
  //   resp.send(carsGet);
  // })

  // }
  try{
  const value = await cache.clientGet(placa, renavam);
  return resp.send(value);
  }catch(e){
    return "ERROR"
  }
}

module.exports = {
  controllerCars: controllerCars,
};
    


