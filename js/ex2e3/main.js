function UserData() {
  var ulElement = document.querySelector("ul");

  ulElement.innerHTML = ""; //limpar a tela smp que se muda de user

  var userName = document.querySelector("input").value;
  const link = "https://api.github.com/users/" + userName + "/repos";
  var count = 0;

  do {
    var liElement = document.createElement("li");
    var repoText = document.createTextNode("Carregando...");
    liElement.appendChild(repoText);
    ulElement.appendChild(liElement);
  } while (
    !axios
    .get(link)
    .then(function (response) {
      //o response.data retorna um array
      //o objetivo foi ir a cada index desse array e printar o url direto para o github

      ulElement.innerHTML = ""; //tirar o carregando da tela
      for (repo of response.data) {
        var liElement = document.createElement("li");
        var repoText = document.createTextNode(
          count + 1 + " -> " + response.data[count].html_url
        );

        liElement.appendChild(repoText);
        ulElement.appendChild(liElement);
        count++;
      }
    })
    .catch(function (error) {
      document.querySelector("ul").innerHTML = "Erro!!! -> User inexistente";
    })
  );
}