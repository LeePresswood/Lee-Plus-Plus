package lee.plus.plus

class BlogPostController {
//    static scaffold = BlogPost

    def getPage(int currentPage) {
        int from = (currentPage - 1) * 10
        int to = from + 9
        
        List posts = BlogPost.listOrderById().reverse()
        int totalPages = posts.size() / 10 + (posts.size() % 10 != 0 ? 1 : 0)
        
        to = Math.min(to, posts.size())

        render(view: "posts", model: [
                totalPages: totalPages,
                currentPage: currentPage,
                posts: posts[from..to]
        ])
    }
    
    def getPost(int currentPage, int postId){
        BlogPost post = BlogPost.findById(postId)
        
//        if(!post)
        //            render view: '/error'
        //        else
        render(view: "post", model: [
                post: post,
                currentPage: currentPage
        ])
    }
}
