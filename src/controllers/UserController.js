"use strict";

import { global } from "../api-url/global";
import axios from "axios";
import swal from "sweetalert";

export default {
  login: async (user) => {
    const formData = new FormData();

    formData.append("email", user.email);
    formData.append("password", user.password);

    return await axios
      .post(global.url + "login", formData)
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data);

          swal(
            "Sesion iniciada!",
            "Las credenciales digitadas son válidas",
            "success"
          );

          return res.data;
        }
      })
      .catch((err) => {
        // console.error(err.response);

        var error = "";

        if (err.response.data.errorMessage) {
          error = err.response.data.errorMessage;
        }

        swal("Registro fallido!", `${error}`, "error");

        throw err.response;
      });
  },
  logout: async (user) => {
    return await axios
      .post(
        global.url + "logout/" + user.id,
        { hello: "word" },
        {
          headers: {
            Authorization: "Bearer " + user.verification_token,
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data);

          swal("Sesion cerrada!", "Se ha cerrado sesión con éxito", "success");

          return res.status;
        }
      })
      .catch((err) => {
        // console.error(err.response);

        throw err.response;
      });
  },
  register: async (user) => {
    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("password_confirmation", user.password_confirm);

    return await axios
      .post(global.url + "users", formData)
      .then((res) => {
        if (res.status == 201) {
          swal(
            "Usuario registrado!",
            "El usuario se ha registrado con éxito",
            "success"
          );

          return res.status;
        }
      })
      .catch((err) => {
        // console.error(err.response);

        var error1 = "";
        var error2 = "";
        var error3 = "";

        if (err.response.data.errors.name) {
          error1 = err.response.data.errors.name;
        }
        if (err.response.data.errors.email) {
          error2 = err.response.data.errors.email;
        }
        if (err.response.data.errors.password) {
          error3 = err.response.data.errors.password;
        }

        swal(
          "Registro fallido!",
          `${error1} \n ${error2} \n ${error3}`,
          "error"
        );

        throw err.response;
      });
  },
  showUser: async (user_id, user) => {
    return await axios
      .get(global.url + `users/${user_id}`, {
        headers: { Authorization: "Bearer " + user.verification_token },
      })
      .then((res) => {
        if (res.status == 200) return res.data.data;
      })
      .catch((err) => {
        throw err.response;
      });
  },
};
