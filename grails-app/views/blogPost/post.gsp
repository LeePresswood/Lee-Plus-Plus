<!doctype html>
<html>
    <head>
        <meta name="layout" content="layout"/>
    </head>

    <body>
        <div class="row dark-background">
            <div class="col-sm-12">
                <g:link uri="/page/${currentPage}">Back</g:link>
            </div>
        </div>

        <div class="row dark-background">
            <div class="col-sm-12">
                <h3><g:link uri="/page/${currentPage}/post/${post.id}">${post.title}</g:link></h3>
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
