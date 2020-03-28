class Usuario {
  constructor(email, pw) {
    this.email = email;
    this.pw = pw;
  }

  isAdmin() {
    if (this.admin === true)
      return true;
    else
      return false;
  }
}

class Admin extends Usuario {
  constructor(email, pw) {
    super(email, pw);
    this.admin = true;
  }
}

const user1 = new Usuario('email@teste.com', 'senha123')
const adm1 = new Admin('email@teste.com', 'senha123')

console.log(user1.isAdmin())
console.log(adm1.isAdmin())