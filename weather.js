var Request = require("request");

let api_key = "210325d1d8c1560b2271cd6b3193fad7";
let city = "Bucharest"

Request.get("http://api.openweathermap.org/data/2.5/weather?q="+city+ "&APPID="+ api_key, (error, response, body) => {
 
if(error) {
        return console.dir(error);
    }
    var test = (JSON.parse(body));
    
console.log(test.weather[0].icon);
console.log(test.weather[0].description);
console.log(parseInt((test.main.temp)- 273));

// Parse the results.



});