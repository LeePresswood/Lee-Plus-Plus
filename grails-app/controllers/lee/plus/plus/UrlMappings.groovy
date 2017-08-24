package lee.plus.plus

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "/newIndex"(view:"/newIndex")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
