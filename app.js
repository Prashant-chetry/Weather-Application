const yargs = require('yargs');
const geocode = require('./geocode.js');
const weather = require('./weather.js');
let argv = yargs.options({
    a:{
        demand: true,
        alias: 'address',
        string: true,
        describe: 'Address to fetch weather for'
    }
}).help().argv;

geocode.geocodeAddress(argv.a, (erroeMessage, results)=> {
  if(erroeMessage){
    console.log(erroeMessage);
  }else{
    console.log(results.address);
    weather.getTemperature(results.location_lat, results.location_lng, (erroeMes, weatherRes)=>{
      console.log(`The Temperture : ${weatherRes.temperature}F. But it feels like ${weatherRes.apparentTemperature}F`)
    });
    
  }
});


