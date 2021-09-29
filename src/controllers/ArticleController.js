"use strict";

import { global } from "../api-url/global";
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
        // console.error(err.response);
        throw err.response;
      });
  },
  getArticle: async (articleId) => {
    return await axios
      .get(global.url + `articles/${articleId}`)
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data.data);
          return res.data.data;
        }
      })
      .catch((err) => {
        // console.error(err.response);
        throw err.response;
      });
  },
  deleteArticle: async (articleId, user) => {
    return await axios
      .delete(this.url + `articles/${articleId}`, {
        headers: {
          Authorization: "Bearer " + user.verification_token,
        },
      })
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        // console.log(err);
        throw err.response;
      });
  },
  editArticle: async (article, user) => {
    return await axios
      .put(
        global.url + "articles/" + article.id,
        {
          title: article.title,
          content: article.content,
          user_id: user.id,
        },
        {
          headers: { Authorization: "Bearer " + user.verification_token },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          return res.data.data;
        }
      })
      .catch((err) => {
        // console.error(err);
        throw err.response;
      });
  },
  uploadFile: async (articleId, user, file) => {
    const formData = new FormData();
    formData.append("image", file, file.name);

    return await axios
      .post(global.url + "articles/upload-image/" + articleId, formData, {
        headers: { Authorization: "Bearer " + user.verification_token },
      })
      .then((res) => {
        if (res.data.data) {
          return res.data.data;
        }
      })
      .catch((err) => {
        throw err.response;
      });
  },
  searchArticles: async (searchData) => {
    return await axios
      .get(global.url + `articles/search/${searchData}`)
      .then((res) => {
        if (res.status == 200) {
          return res.data.data;
        }
      })
      .catch((err) => {
        throw err.response;
      });
  },
  createArticle: async (article, user) => {
    const article_data = new FormData();

    article_data.append("title", article.title);
    article_data.append("content", article.content);
    article_data.append("user_id", user.id);

    return await axios
      .post(global.url + "articles", article_data, {
        headers: { Authorization: "Bearer " + user.verification_token },
      })
      .then((res) => {
        if (res.status == 201) {
          return res.data.data;
        }
      })
      .catch((err) => {
        throw err.response;
      });
  },
  getArticlesOfUser: async (id_user) => {
    return await axios
      .get(global.url + `articles/user/${id_user}`)
      .then((res) => {
        if (res) return res.data.data;
      })
      .catch((err) => {
        throw err.response;
      });
  },
};
