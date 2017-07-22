<!doctype html>
<html>
    <head>
        <meta name="layout" content="layout"/>
    </head>

    <body>
        <div class="row min-height-page dark-background">
            <g:each in="${posts}">
                <div class="col-sm-12">
                    <div class="row">
                        <h1><g:link uri="/page/${currentPage}/post/${it.id}">${it.title}</g:link></h1>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="row">
                        <p>${it.dateCreated.format("MMMM d, YYYY 'at' h:mm a")}</p>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="row">
                        <p>${it.lastUpdated.format("MMMM d, YYYY 'at' h:mm a")}</p>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="row">
                        <p>${it.text}</p>
                    </div>
                </div>
            </g:each>

            <g:each in="${1..totalPages}">
                <div class="col-sm-1"><g:link uri="/page/${it}">${it}</g:link></div>
            </g:each>
        </div>
    </body>
</html>
