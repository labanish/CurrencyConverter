var test= {
    "coord": {
        "lon": 26.1,
        "lat": 44.44
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 281.85,
        "pressure": 1020,
        "humidity": 81,
        "temp_min": 280.93,
        "temp_max": 282.59
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.5
    },
    "clouds": {
        "all": 0
    },
    "dt": 1555361508,
    "sys": {
        "type": 1,
        "id": 6911,
        "message": 0.0086,
        "country": "RO",
        "sunrise": 1555385440,
        "sunset": 1555433994
    },
    "id": 683506,
    "name": "Bucharest",
    "cod": 200
}

console.log(test.weather[0].icon);
console.log(test.weather[0].description);


console.log(parseInt((test.main.temp)- 273));

