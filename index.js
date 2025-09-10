const myhttp = require("http");

const fs = require("fs").promises;

const requestListener = function( myreq, myresp ) {
        console.log( myreq.url );

    
        if ( myrequest.url === '/' ) {
            fs.readFile(__dirname + "/page_1.html")
            .then(
                contents => {
                    myresp.setHeader("Content-Type", "text/html; charset=UTF-8;");

                    myresp.writeHead(200);

                    myresp.end(contents);

                }
            );
        
        } else { 
            fs.readFile(__dirname + "/my_data.json")
                .then(
                    contents => {
                    myresp.setHeader("Content-Type", "application/json; charset=UTF-8;");

                    myresp.writeHead(200);

                    myresp.end(contents);

                }

            );
        
        }

    };


let myserver = myhttp.createServer(

    requestListener
);



myserver.listen( 8080, "127.0.0.1" );