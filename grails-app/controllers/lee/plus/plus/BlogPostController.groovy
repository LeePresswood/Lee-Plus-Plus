package lee.plus.plus

class BlogPostController {
    static scaffold = BlogPost

    def hi() {
        render(view: "posts", model: [
                posts: BlogPost.list()
        ])
    }
}
