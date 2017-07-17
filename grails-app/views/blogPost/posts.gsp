<!doctype html>
<html>
    <head>
        %{--<meta name="layout" content="main"/>--}%
        <title>Lee++</title>

        <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
    </head>
    <body>
        <p>Total Pages: ${totalPages}</p>

        <p>Current Page: ${currentPage}</p>

        <p>Posts: ${posts}</p>

        <h1>Posts: </h1>
        <g:each in="${posts}">
            <p>ID: ${it.id}</p>
            <p>Title: <g:link controller="blogPost" action="getPost" id="${it.id}" params="[currentPage: currentPage]">${it.title}</g:link></p>
            <p>Create Date: ${it.dateCreated.format("MMMM d, YYYY 'at' h:mm a")}</p>
            <p>Last Updated: ${it.lastUpdated.format("MMMM d, YYYY 'at' h:mm a")}</p>
            <p>Text: ${it.text}</p>
            <hr />
        </g:each>

        <h1>Navigation: </h1>
        <g:each in="${[1..totalPages]}">
            <p>${it} </p>
        </g:each>

    </body>
</html>
