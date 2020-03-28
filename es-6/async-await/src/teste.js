import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response.data);
    } catch (err) {
      console.warn("Erro na API");
    }
  }
}

Api.getUserInfo("diego3g");

// Funciona
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.warn("Usuário não existe");
  }
}
getUserFromGithub("diego3g");

// Função delay aciona o .then após 1s -> FUNCIONA
const delay = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve("Ok");
    }, 1000)
  );

async function umPorSegundo() {
  const response = await delay();
  console.log(response);
}
umPorSegundo();

const buscaUsuario = async usuario => {
  const response = await axios.get(`https://api.github.com/users/${usuario}`);
  console.log(response.data);
};
buscaUsuario("galleonpt");

class Github {
  static async getRepositories(user) {
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    response.data.forEach(element => {
      console.log(element.url);
    });
  }
}
Github.getRepositories("rocketseat");
