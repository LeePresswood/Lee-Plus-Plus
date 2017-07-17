package lee.plus.plus

class BootStrap{
    
    def init = { servletContext ->
        if(!BlogPost.list()){
            new BlogPost(title: "Test Post 9", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 1", text: "Here's some text.").save(flush: true)
            new BlogPost(title: "Test Post 7", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 3", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 13", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 10", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 2", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 4", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 14", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 6", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 5", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 12", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 8", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 11", text: "Here's different text.").save(flush: true)
        }
    }
    def destroy = {}
}
