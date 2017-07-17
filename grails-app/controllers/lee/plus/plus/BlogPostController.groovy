package lee.plus.plus

class BlogPostController {
//    static scaffold = BlogPost

    def getPage() {
        List posts = BlogPost.listOrderById().reverse()
        int totalPages = posts.size() / 10 + (posts.size() % 10 != 0 ? 1 : 0)
        
        int from = (params.currentPage - 1) * 10
        int to = (params.currentPage - 1) * 10 + 9
        
        render(view: "posts", model: [
                totalPages: totalPages,
                currentPage: params.currentPage,
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
