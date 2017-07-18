package lee.plus.plus

class BlogPostController {
//    static scaffold = BlogPost

    def getPage(int currentPage) {
        int from = (currentPage - 1) * 10
        int to = from + 9
        
        List posts = BlogPost.listOrderById().reverse()
        int totalPages = posts.size() / 10 + (posts.size() % 10 != 0 ? 1 : 0)

        render(view: "posts", model: [
                totalPages: totalPages,
                currentPage: currentPage,
                posts: posts[from..to]
        ])
    }
    
    def getPost(){
        BlogPost post = BlogPost.findById(params.id)
        
        if(!post)
            render view: '/error'
        else
            render(view: "post", model: [
                    post: post,
                    currentPage: params.currentPage ?: 1
            ])
    }
}
