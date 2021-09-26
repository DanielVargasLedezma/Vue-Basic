class User {
  constructor(
    name = "",
    email = "",
    password = "",
    password_confirm = "",
    verification_token = "",
    id = 0
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.password_confirm = password_confirm;
    this.verification_token = verification_token;
    this.id = id;
  }
}

export default User;
