package lee.plus.plus

class UrlMappings {

    static mappings = {
//        "/$controller/$action?/$id?(.$format)?"{
//            constraints {
//                // apply constraints here
//            }
//        }

//        "/"(view:"/index")
        "/"(uri: "/page/1")
        "/page/$currentPage"(controller: "blogPost", action: "getPage")
        
        "/page/$currentPage/post/$postId"(controller: "blogPost", action: "getPost")
        
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
