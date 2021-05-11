import React, { useState } from 'react';
import { Map, Marker, InfoWindow } from 'google-maps-react';

import { Navigation } from './Navigation';
import { MarkerInfoList } from './MarkerInfoList';
import { data } from '../data';

const mapStyles = {
    width: '100%',
    height: '100%'
};

  
export const MapContainer = (props) => {

	const [showingInfoWindow, setInfoWindowState] = useState(false);
	const [activeMarker, setActiveMarkerState] = useState({});
	const [selectedPlace, setSelectedPlaceState] = useState({});

	const onMarkerClick = (props, marker, e) => {
		setInfoWindowState(true);
		setActiveMarkerState(marker);
		setSelectedPlaceState(props);
	}

  	const onClose = (props) => {
    	if (showingInfoWindow) {
        	setInfoWindowState(false);
        	setActiveMarkerState(null);
    	}
 	};

 	    return (
    		<div>
        		<Navigation />
          		<Map
            		google={props.google}
            		zoom={6}
            		style={mapStyles}
            		initialCenter={ { lat: 23.2599, lng: 77.4126 } } >
				
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[0].lat, lng: data[0].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[0].name}</h5>
							<p>AQI: {data[0].AQI}</p>
 					   		<p>Status: {data[0].status}</p>
 					    	<p>PM10: {data[0].PM10}</p>
 					    	<p>PM 2.5: {data[0].PM25}</p>
						</div>
					</InfoWindow>

					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[1].lat, lng: data[1].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[1].name}</h5>
							<p>AQI: {data[1].AQI}</p>
 					   		<p>Status: {data[1].status}</p>
 					    	<p>PM10: {data[1].PM10}</p>
 					    	<p>PM 2.5: {data[1].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[2].lat, lng: data[2].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[2].name}</h5>
							<p>AQI: {data[2].AQI}</p>
 					   		<p>Status: {data[2].status}</p>
 					    	<p>PM10: {data[2].PM10}</p>
 					    	<p>PM 2.5: {data[2].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[3].lat, lng: data[3].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[3].name}</h5>
							<p>AQI: {data[3].AQI}</p>
 					   		<p>Status: {data[3].status}</p>
 					    	<p>PM10: {data[3].PM10}</p>
 					    	<p>PM 2.5: {data[3].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[4].lat, lng: data[4].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[4].name}</h5>
							<p>AQI: {data[4].AQI}</p>
 					   		<p>Status: {data[4].status}</p>
 					    	<p>PM10: {data[4].PM10}</p>
 					    	<p>PM 2.5: {data[4].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[5].lat, lng: data[5].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[5].name}</h5>
							<p>AQI: {data[5].AQI}</p>
 					   		<p>Status: {data[5].status}</p>
 					    	<p>PM10: {data[5].PM10}</p>
 					    	<p>PM 2.5: {data[5].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[6].lat, lng: data[6].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[6].name}</h5>
							<p>AQI: {data[6].AQI}</p>
 					   		<p>Status: {data[6].status}</p>
 					    	<p>PM10: {data[6].PM10}</p>
 					    	<p>PM 2.5: {data[6].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[7].lat, lng: data[7].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[7].name}</h5>
							<p>AQI: {data[7].AQI}</p>
 					   		<p>Status: {data[7].status}</p>
 					    	<p>PM10: {data[7].PM10}</p>
 					    	<p>PM 2.5: {data[7].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[8].lat, lng: data[8].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[8].name}</h5>
							<p>AQI: {data[8].AQI}</p>
 					   		<p>Status: {data[8].status}</p>
 					    	<p>PM10: {data[8].PM10}</p>
 					    	<p>PM 2.5: {data[8].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[9].lat, lng: data[9].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[9].name}</h5>
							<p>AQI: {data[9].AQI}</p>
 					   		<p>Status: {data[9].status}</p>
 					    	<p>PM10: {data[9].PM10}</p>
 					    	<p>PM 2.5: {data[9].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[10].lat, lng: data[10].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[10].name}</h5>
							<p>AQI: {data[10].AQI}</p>
 					   		<p>Status: {data[10].status}</p>
 					    	<p>PM10: {data[10].PM10}</p>
 					    	<p>PM 2.5: {data[10].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[11].lat, lng: data[11].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[11].name}</h5>
							<p>AQI: {data[11].AQI}</p>
 					   		<p>Status: {data[11].status}</p>
 					    	<p>PM10: {data[11].PM10}</p>
 					    	<p>PM 2.5: {data[11].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[12].lat, lng: data[12].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[12].name}</h5>
							<p>AQI: {data[12].AQI}</p>
 					   		<p>Status: {data[12].status}</p>
 					    	<p>PM10: {data[12].PM10}</p>
 					    	<p>PM 2.5: {data[12].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[13].lat, lng: data[13].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[13].name}</h5>
							<p>AQI: {data[13].AQI}</p>
 					   		<p>Status: {data[13].status}</p>
 					    	<p>PM10: {data[13].PM10}</p>
 					    	<p>PM 2.5: {data[13].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[14].lat, lng: data[14].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[14].name}</h5>
							<p>AQI: {data[14].AQI}</p>
 					   		<p>Status: {data[14].status}</p>
 					    	<p>PM10: {data[14].PM10}</p>
 					    	<p>PM 2.5: {data[14].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[15].lat, lng: data[15].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[15].name}</h5>
							<p>AQI: {data[15].AQI}</p>
 					   		<p>Status: {data[15].status}</p>
 					    	<p>PM10: {data[15].PM10}</p>
 					    	<p>PM 2.5: {data[15].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[16].lat, lng: data[16].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[16].name}</h5>
							<p>AQI: {data[16].AQI}</p>
 					   		<p>Status: {data[16].status}</p>
 					    	<p>PM10: {data[16].PM10}</p>
 					    	<p>PM 2.5: {data[16].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[17].lat, lng: data[17].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[17].name}</h5>
							<p>AQI: {data[17].AQI}</p>
 					   		<p>Status: {data[17].status}</p>
 					    	<p>PM10: {data[17].PM10}</p>
 					    	<p>PM 2.5: {data[17].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[18].lat, lng: data[18].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[18].name}</h5>
							<p>AQI: {data[18].AQI}</p>
 					   		<p>Status: {data[18].status}</p>
 					    	<p>PM10: {data[18].PM10}</p>
 					    	<p>PM 2.5: {data[18].PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={onMarkerClick}
						position={{ lat: data[19].lat, lng: data[19].lng }} />
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}
						onClose={onClose} >
						<div>
							<h5>{data[19].name}</h5>
							<p>AQI: {data[19].AQI}</p>
 					   		<p>Status: {data[19].status}</p>
 					    	<p>PM10: {data[19].PM10}</p>
 					    	<p>PM 2.5: {data[19].PM25}</p>
						</div>
					</InfoWindow>
				</Map>
        	</div>
      	);
    }
export default MapContainer;


// ISSUE: Unable to use Arrays.map() to render multiple components due to mapCenter prop being rendered on the DOM
// mapCenter is not a DOM element, it is part of one of the components from 'google-maps-react' library
 
{/* <div>
{data.map((info, index) => { return (
<div>
<Marker
	onClick={onMarkerClick}
	position={{ lat: info.lat, lng: info.lng }} />
<InfoWindow
	marker={activeMarker}
	visible={showingInfoWindow}
	onClose={onClose} >
	<div>
		<h5>{info.name}</h5>
		<p>AQI: {info.AQI}</p>
			<p>Status: {info.status}</p>
		<p>PM10: {info.PM10}</p>
		<p>PM 2.5: {info.PM25}</p>
	</div>
</InfoWindow>
</div>
)})}
</div> */}