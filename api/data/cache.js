const cars = require("./cars");
//var redis = require("redis");
//var client = redis.createClient();
const controller = require("../controllers/controllers");

// const redis = require('redis-promisify')
// const client = redis.createClient({
//   port: 6379,
//   host: '127.0.0.1'
// });

// FUNCTION ASYNC

const asyncRedis = require("async-redis");
const client = asyncRedis.createClient();

async function clientGet(placa, renavam) {
  try {
    const cached = await client.get(`${placa}:${renavam}`);

    if (cached != null) {
      console.log("BATEU NO CACHE");
      return JSON.parse(cached);
    } else {
      console.log("BATEU NO REPOSITORIO");
      const carsRepo = JSON.stringify(cars.getCarFilter(placa, renavam));
      if (carsRepo == null || undefined) {
        return "CARRO NÃO EXISTE";
      }
      client.setex(`${placa}:${renavam}`, 10, carsRepo);
      return JSON.parse(carsRepo);
    }
  } catch (e) {
    return "ERROR";
  }
}

// PROMISSES
function clientPromisses(placa, renavam) {
  const response = client
    .multi()
    .get(`${placa}:${renavam}`)
    .execAsync()
    .then((Cached) => {
      if (Cached[0] != null) {
        // const cachedJson = JSON.parse(Cached);
        console.log(Cached);
        console.log("BATEU NO CACHE");

        return JSON.parse(Cached);
      } else {
        console.log("BATEU NO REPOSITORY");

        const carsJSON = JSON.stringify(cars.getCarFilter(placa, renavam));
        if (carsJSON == null || undefined) {
          return "CARRO NÃO EXISTE";
        }

        return client
          .setAsync(`${placa}:${renavam}`, carsJSON)
          .then((Cached) => {
            return JSON.parse(carsJSON);
          });
      }
    });

  return response;
}

// CALLBACK
function clientCallback(placa, renavam, callback) {
  client.get(`${placa}:${renavam}`).then(),
    function (err, Cached) {
      if (Cached) {
        const cachedJson = JSON.parse(Cached);
        console.log("BATEU NO CACHE");

        callback.send(cachedJson);
      } else {
        console.log("BATEU NO REPOSITORY");

        const carsJSON = JSON.stringify(cars.getCarFilter(placa, renavam));
        if (carsJSON == null || undefined) {
          callback.send(JSON.stringify("CARRO NÃO EXISTE"));
        }

        client.setex(`${placa}:${renavam}`, 10, carsJSON);

        callback.send(JSON.stringify(carsJSON));
      }
    };
}

module.exports = {
  clientGet: clientGet,
  clientPromisses: clientPromisses,
  clientCallback: clientCallback,
};
