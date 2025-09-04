const myhttp = require("http");

const fs = require("fs").promises;

const requestListener = function( myrequest, myresponse ) {
        console.log( myrequest.url );

    
        if ( myrequest.url === '/' ) {
            fs.readFile(__dirname + "/page.html")
            .then(
                contents => {
                    myresponse.setHeader("Content-Type", "text/html; charset=UTF-8;");

                    myresponse.writeHead(200);

                    myresponse.end(contents);

                }
            );
        
        } else { 
            fs.readFile(__dirname + "/data.json")
                .then(
                    contents => {
                    myresponse.setHeader("Content-Type", "application/json; charset=UTF-8;");

                    myresponse.writeHead(200);

                    myresponse.end(contents);

                }

            );
        
        }

    };


let myserver = myhttp.createServer(

    requestListener
);



myserver.listen( 8080, "127.0.0.1" );