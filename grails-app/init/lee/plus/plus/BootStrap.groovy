package lee.plus.plus

class BootStrap {

    def init = { servletContext ->
        if(!BlogPost.list()){
            new BlogPost(title: "Test Post 1", dateCreated: new Date().minus(1), text: "Here's some text.").save(flush: true)
            new BlogPost(title: "Test Post 2", dateCreated: new Date().minus(2), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 3", dateCreated: new Date().minus(3), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 4", dateCreated: new Date().minus(4), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 5", dateCreated: new Date().minus(1), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 6", dateCreated: new Date().minus(5), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 7", dateCreated: new Date().minus(6), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 8", dateCreated: new Date(), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 9", dateCreated: new Date().minus(8), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 10", dateCreated: new Date().minus(1), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 11", dateCreated: new Date().minus(2), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 12", dateCreated: new Date().minus(2), text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 13", text: "Here's different text.").save(flush: true)
            new BlogPost(title: "Test Post 14", dateCreated: new Date(), text: "Here's different text.").save(flush: true)
        }
    }
    def destroy = {
    }
}
