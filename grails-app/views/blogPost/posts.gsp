<!doctype html>
<html>
    <head>
        <meta name="layout" content="layout"/>
        <title>Lee++</title>

        <asset:link rel="icon" href="favicon.ico" type="image/x-ico"/>
    </head>

    <body>
        <g:each in="${posts}">
            <div class="row">
                <div class="col-sm-12">
                    <h1><g:link uri="/page/${currentPage}/post/${it.id}">${it.title}</g:link></h1>
                </div>

                <div class="col-sm-12">
                    <p>${it.dateCreated.format("MMMM d, YYYY 'at' h:mm a")}</p>
                </div>

                <div class="col-sm-12">
                    <p>${it.lastUpdated.format("MMMM d, YYYY 'at' h:mm a")}</p>
                </div>

                <div class="col-sm-12">
                    <p>${it.text}</p>
                </div>
            </div>
        </g:each>

        <div class="row">
            <g:each in="${1..totalPages}">
                <div class="col-sm-1"><g:link uri="/page/${it}">${it}</g:link></div>
            </g:each>
        </div>
    </body>
</html>
