const axios = require("axios");

var markerInfoList = [];

axios.get('http://swas-aqiapi.herokuapp.com/get-cities-data')
            .then(res => {
                console.log(res.data);
                markerInfoList = res.data;
                console.log(markerInfo[0]);
            })
            .catch(err => {
                console.log(err)
            });
