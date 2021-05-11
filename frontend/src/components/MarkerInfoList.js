import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { InfoWindow, Marker } from 'google-maps-react';

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const MarkerInfoList = () => {

    const [markerInfo, setMarkerInfo] = useState([]);
    useEffect(() => {
        axios.get('http://swas-aqiapi.herokuapp.com/get-cities-data')
            .then(res => {
                console.log(res)
                setMarkerInfo(res.data)
            })
            .catch(err => console.log(err))
        }, []);

    return (
        <div>
            {markerInfo.map((marker) => {
                return (
                    <>
                    <Marker
                         position={{lat: marker.lat, lng: marker.lng}} />
                    <InfoWindow>
                        <div>
                            <p>AQI: {marker.AQI}</p>
                            <p>{marker.status}</p>
                            <p>PM10: {marker.PM10}</p>
                            <p>PM 2.5 {marker.PM25}</p>
                        </div>
                    </InfoWindow>
                    </>
                )
            })}
        </div>
    );
}

export default MarkerInfoList;


