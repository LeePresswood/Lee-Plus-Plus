<!doctype html>
<html>
    <head>
        %{--<meta name="layout" content="main"/>--}%
        <title>Lee++</title>

        <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
    </head>
    <body>
        <g:each in ="${posts}">
            <p>Title: ${it.title}</p>
            <p>Create Date: ${it.dateCreated.format("MMMM d, YYYY 'at' h:mm a")}</p>
            <p>Last Updated: ${it.lastUpdated.format("MMMM d, YYYY 'at' h:mm a")}</p>
            <p>Text: ${it.text}</p>
            <hr />
        </g:each>

    </body>
</html>
