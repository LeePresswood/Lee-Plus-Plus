package lee.plus.plus

class BootStrap{
    
    def init = { servletContext ->
        if(!BlogPost.list()){
            150.times{new BlogPost(title: "Test Post $it", text: "Here's different text.").save(flush: true)}
        }
    }
    def destroy = {}
}
