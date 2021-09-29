class User {
  constructor(
    name = "",
    email = "",
    password = "",
    password_confirm = "",
    verification_token = "",
    id = "",
    created_at = ""
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.password_confirm = password_confirm;
    this.verification_token = verification_token;
    this.id = id;
    this.created_at = created_at;
  }
}

export default User;
