const cars = [
  {
    placa: "ABC",
    renavam: "123456",
    debitos: [
      {
        valor: 200,
        descricao: "multa A",
      },
      {
        valor: 500,
        descricao: "multa B",
      },
    ],
  },
  {
    placa: "DEF",
    renavam: "564783",
    debitos: [
      {
        valor: 200,
        descricao: "multa A",
      },
      {
        valor: 500,
        descricao: "multa B",
      },
    ],
  },
  {
    placa: "HEB",
    renavam: "54g67",
    debitos: [
      {
        valor: 200,
        descricao: "multa A",
      },
      {
        valor: 500,
        descricao: "multa B",
      },
    ],
  },
  {
    placa: "AAA",
    renavam: "54321",
    debitos: [
      {
        valor: 200,
        descricao: "multa A",
      },
      {
        valor: 500,
        descricao: "multa B",
      },
    ],
  }
];

// FILTER

const getCarFilter = (placa, renavam) => {
  return cars.filter(
    (car) => car.placa === placa && car.renavam === renavam
  )[0];
};

// FOR
const getCarFor = (placa, renavam) => {
  for (let index = 0; index < cars.length; index++) {
    if (placa === cars[index].placa && renavam === cars[index].renavam) {
      return cars[index];
    }
  }
};

// FOR EACH

const getCarForEach = (placa, renavam) => {
  result = [];
  cars.forEach((car) => {
    if (car.placa === placa && car.renavam === renavam) {
      result.push(car)[0];
    }
  });
  return result;
};


module.exports = {
  cars: cars,
  getCarFilter: getCarFilter,
  getCarFor: getCarFor,
  getCarForEach: getCarForEach
};
