var request = require('request');

let api_key = "210325d1d8c1560b2271cd6b3193fad7";
let city = "Bucharest"
request({
       url: "http://api.openweathermap.org/data/2.5/weather?q="+city+ "&APPID="+ api_key, 
       method: "GET",

        }, function (error, response, body) {
 
if(error) {
        return console.dir(error);
    }

    var test = (JSON.parse(body));
    
     //console.log(test.weather[0].icon);
     description = test.weather[0].description;
    temp = parseInt((test.main.temp)- 273);


    console.log(test.weather[0].description);
    console.log(parseInt((test.main.temp)- 273));

// Parse the results.
    const weather = `It is ${temp} degrees with ${description}`;

    console.log(weather);

});