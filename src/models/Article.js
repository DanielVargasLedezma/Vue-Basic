class Article {
    constructor(title, content, date, image, user_id){
        this.title = title;
        this.content = content;
        this.date = null;
        this.image = image;
        this.user_id = user_id;
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