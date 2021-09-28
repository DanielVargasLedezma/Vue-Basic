class Article {
    constructor(title = "", content = "", date = "", image = "", user_id = "", id = ""){
        this.title = title;
        this.content = content;
        this.date = date;
        this.image = image;
        this.user_id = user_id;
        this.id = id;
    }
}
// title: String,
//   content: String,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   image: String,

export default Article;