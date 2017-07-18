<!doctype html>
<html>
    <head>
        <meta name="layout" content="layout"/>
    </head>

    <body>
        <div class="row">
            <div class="col-sm-12">
                <g:link uri="/page/${currentPage}">Back</g:link>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <h1><g:link uri="/page/${currentPage}/post/${post.id}">${post.title}</g:link></h1>
            </div>

            <div class="col-sm-12">
                <p>${post.dateCreated.format("MMMM d, YYYY 'at' h:mm a")}</p>
            </div>

            <div class="col-sm-12">
                <p>${post.lastUpdated.format("MMMM d, YYYY 'at' h:mm a")}</p>
            </div>

            <div class="col-sm-12">
                <p>${post.text}</p>
            </div>
        </div>
    </body>
</html>
