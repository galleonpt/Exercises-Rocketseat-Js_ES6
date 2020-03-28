const usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
  },
  {
    nome: 'Gabriel',
    idade: 15,
    empresa: 'Rocketseat'
  },
  {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
  },
];

const map = usuarios.map(function (item) {
  return (item.idade)
})
console.log(map)

const filter = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat'
})
console.log(filter)

const find = usuarios.find(function (item) {
  return item.empresa === 'Google'
})
console.log(find)

const maior50 = usuarios.filter(function (item) {
  item.idade *= 2;
  return item.idade <= 50
})
console.log(maior50)