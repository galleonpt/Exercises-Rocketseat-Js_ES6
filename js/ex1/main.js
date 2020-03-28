function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    idade >= 18 ? resolve() : reject()
  });
}

function intervalo() {
  checaIdade(1)
    .then(function () {
      console.log("Maior que 18");
    })
    .catch(function () {
      console.log("Menor que 18");
    });
}

setInterval(intervalo, 2000);

/*
var myTry = function (idade) {
  return new Promise(function (resolve, reject) {
    if (idade >= 18)
      resolve();
    else
      reject();
  })
}
*/