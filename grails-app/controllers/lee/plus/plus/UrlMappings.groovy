package lee.plus.plus

class UrlMappings {

    static mappings = {
//        "/$controller/$action?/$id?(.$format)?"{
//            constraints {
//                // apply constraints here
//            }
//        }

//        "/"(view:"/index")
        "/"(uri: "/1")
        "/$currentPage"(controller: "blogPost", action: "getPage")
        
        "/posts/$id"(controller: "blogPost", action: "getPost")
        
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
