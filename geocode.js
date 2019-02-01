const request = require('request');

var geocodeAddress = function(addre, callback){
    var comp = encodeURIComponent(addre);
request({
    url: `https://www.mapquestapi.com/geocoding/v1/address?key=vMwAPJ9noxIZDPZ4MGQ0dBGXImGCVR6G&location=${comp}`,
    json: true
}, (error, response, body) => {
  if(error){
    callback('Unable to connect to the servers');
  }else{
    // console.log(JSON.stringify(body, undefined, 2));
    //console.log(JSON.stringify(response, undefined, 2));
    // console.log(error);
    callback(undefined, {        
        address: body.results[0].providedLocation.location,
        location_lat: body.results[0].locations[0].latLng.lat,
        location_lng: body.results[0].locations[0].latLng.lng
    });
}

});
};

module.exports={
    geocodeAddress: geocodeAddress
};

//efc15f3625b5a8d40a289045d8825026

