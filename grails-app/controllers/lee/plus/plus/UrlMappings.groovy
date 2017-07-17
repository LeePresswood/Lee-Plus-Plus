package lee.plus.plus

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

//        "/"(view:"/index")
        "/"(controller: "blogPost", action: "getPage"){ currentPage = 1}
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
