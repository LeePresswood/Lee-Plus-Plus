<!doctype html>
<html>
    <head>
        %{--<meta name="layout" content="main"/>--}%
        <title>Lee++</title>

        <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
    </head>
    <body>
        <g:link  uri="/${currentPage}">Back</g:link>
        <br/>
        <p>ID: ${post.id}</p>
        <p>Title: <g:link controller="blogPost" action="getPost" id="${post.id}" params="[currentPage: currentPage]">${post.title}</g:link></p>
        <p>Create Date: ${post.dateCreated.format("MMMM d, YYYY 'at' h:mm a")}</p>
        <p>Last Updated: ${post.lastUpdated.format("MMMM d, YYYY 'at' h:mm a")}</p>
        <p>Text: ${post.text}</p>
        <hr />
    </body>
</html>
