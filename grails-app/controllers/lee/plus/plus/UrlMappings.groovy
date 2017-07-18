package lee.plus.plus

class UrlMappings {

    static mappings = {
//        "/$controller/$action?/$id?(.$format)?"{
//            constraints {
//                // apply constraints here
//            }
//        }

//        "/"(view:"/index")
        "/"(uri: "/pages/1")
        "/pages/$currentPage"(controller: "blogPost", action: "getPage")
        
        "/pages/$currentPage/posts/$postId"(controller: "blogPost", action: "getPost")
        
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
