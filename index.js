const express = require('express');

const service = express()

let kes;

const request = require('request')

service.set('port', (process.env.PORT || 5004))


request.get("http://www.apilayer.net/api/live?access_key=1a704484429e51e359a528e2b72d050e&currencies=USD,KES", (error, response, body) => {
 
if(error) {
        return console.dir(error);
    }
   
    var iResult = (JSON.parse(body));

    //response.end(iResult.quotes.USDKES);
    kes = iResult.quotes.USDKES;

    console.log(iResult.quotes.USDKES);
});

service.get('/', (req, res) => res.send('The value of KES vs 1 USD is '+ JSON.stringify(kes)));
// Spin up the server
 service.listen(service.get('port'), function() {

 	     console.log('running on port', service.get('port'));
     });