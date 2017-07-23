<!doctype html>
<html>
    <head>
        <meta name="layout" content="layout"/>

        <title>${post.title}</title>
    </head>

    <body>
        <div class="row">
            <div class="col-sm-12">
                <g:link uri="/page/${currentPage}">Back</g:link>
            </div>
        </div>

        <div class="row post">
            <div class="col-sm-12">
                <h3 class="postTitle"><g:link uri="/page/${currentPage}/post/${post.id}">${post.title}</g:link></h3>
            </div>

            <div class="col-sm-12">
                <g:if test="${post.dateCreated == post.lastUpdated}">
                    <p class="postDate">${post.dateCreated.format("MMMM d, YYYY")}</p>
                </g:if>
                <g:else>
                    <p class="postDate">Updated on ${post.lastUpdated.format("MMMM d, YYYY")}</p>
                </g:else>
            </div>

            <div class="col-sm-12">
                <p class="postText">${post.text}</p>
            </div>
        </div>
    </body>
</html>
