"use strict";

import { global } from "../global";
import axios from "axios";

export default {
  getArticles: async (last = "") => {
    return await axios
      .get(global.url + "articles-all/" + last)
      .then((res) => {
        if (res.data) {
          // console.log(res.data.data);
          return res.data.data;
        }
      })
      .catch((err) => {
        console.error(err.response);
      });
  },
};
