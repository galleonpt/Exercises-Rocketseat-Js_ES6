const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); //3

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const user2 = {
  ...usuario,
  nome: "Gabriel"
};
console.log(user2);

const user3 = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: "Lontra"
  }
};
console.log(user3);
