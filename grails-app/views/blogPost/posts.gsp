<!doctype html>
<html>
    <head>
        <meta name="layout" content="layout"/>
    </head>

    <body>
        <g:each in="${posts}">
            <div class="row post">
                <div class="col-sm-12">
                    <h3 class="postTitle"><g:link uri="/page/${currentPage}/post/${it.id}">${it.title}</g:link></h3>
                </div>

                <div class="col-sm-12">
                    <g:if test="${it.dateCreated == it.lastUpdated}">
                        <p class="postDate">${it.dateCreated.format("MMMM d, YYYY")}</p>
                    </g:if>
                    <g:else>
                        <p class="postDate">${it.lastUpdated.format("MMMM d, YYYY")}</p>
                    </g:else>
                </div>

                <div class="col-sm-12">
                    <p class="postText">${it.text}</p>
                </div>
            </div>
        </g:each>

        <div class="row">
            <div class="col-sm-4 col-sm-offset-4">
                <g:each in="${1..totalPages}">
                    <p class="pageSelect <g:if test="${it == currentPage}">pageSelected</g:if>"><g:link uri="/page/${it}">${it}</g:link></p>
                </g:each>
            </div>
        </div>
    </body>
</html>
