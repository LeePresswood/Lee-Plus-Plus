package lee.plus.plus

class BootStrap {

    def init = { servletContext ->
        if(!BlogPost.list()){
            new BlogPost(title: "Test Post 1", createDate: new Date(), lastUpdateDate: new Date(), text: "Here's some text.").save(flush: true)
            new BlogPost(title: "Test Post 2", createDate: new Date(), lastUpdateDate: new Date(), text: "Here's different text.").save(flush: true)
        }
    }
    def destroy = {
    }
}
