const request = require('request');

let getTemperature = function(lat, lng, callBack){
    var latitude = lat;
    var longitude = lng;
    request({
        url: `https://api.darksky.net/forecast/efc15f3625b5a8d40a289045d8825026/${latitude},${longitude}`,
        json: true
      }, (error, response, body)=>{
        if(error){
            callBack('Unable to connect to weather.......', undefined);
        }else{
            callBack(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
      });
};

module.exports={
    getTemperature: getTemperature
};