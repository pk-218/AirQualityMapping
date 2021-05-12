import React, { Component } from 'react';
import { Map, Marker, InfoWindow } from 'google-maps-react';

import { Navigation } from './Navigation';
import { MarkerInfoList } from './MarkerInfoList';
import { data } from '../data';

const mapStyles = {
    width: '100%',
    height: '100%'
};


export class MapContainer extends Component {
	state = {
		showingInfoWindow: false,  
		activeMarker: {},        
		selectedPlace: {},
	};

	onMarkerClick = (props, marker, e) =>
    	this.setState({
      		selectedPlace: props,
      		activeMarker: marker,
      		showingInfoWindow: true,
    	});

  	onClose = props => {
    	if (this.state.showingInfoWindow) {
      		this.setState({
        		showingInfoWindow: false,
        		activeMarker: null
      		});
    	}
  	};
  
	render() {
 	    return (
    		<div>
        		<Navigation />
          		<Map
            		google={this.props.google}
            		zoom={6}
            		style={mapStyles}
            		initialCenter={ { lat: 23.2599, lng: 77.4126 } } >
				
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[0].lat, lng: data[0].lng }}
						name={data[0].name}
						AQI={data[0].AQI}
						airStatus={data[0].status}
						PM10={data[0].PM10}
						PM25={data[0].PM25} />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>

					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[1].lat, lng: data[1].lng }}
						name={data[1].name} 
						AQI={data[1].AQI}
						airStatus={data[1].status}
						PM10={data[1].PM10}
						PM25={data[1].PM25}  />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[2].lat, lng: data[2].lng }}
						name={data[2].name}
						AQI={data[2].AQI}
						airStatus={data[2].status}
						PM10={data[2].PM10}
						PM25={data[2].PM25}  />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[3].lat, lng: data[3].lng }}
						name={data[3].name}
						AQI={data[3].AQI}
						airStatus={data[3].status}
						PM10={data[3].PM10}
						PM25={data[3].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[4].lat, lng: data[4].lng }} 
						name={data[4].name}
						AQI={data[4].AQI}
						airStatus={data[4].status}
						PM10={data[4].PM10}
						PM25={data[4].PM25}  />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[5].lat, lng: data[5].lng }}
						name={data[5].name}
						AQI={data[5].AQI}
						airStatus={data[5].status}
						PM10={data[5].PM10}
						PM25={data[5].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[6].lat, lng: data[6].lng }}
						name={data[6].name}
						AQI={data[6].AQI}
						airStatus={data[6].status}
						PM10={data[6].PM10}
						PM25={data[6].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[7].lat, lng: data[7].lng }}
						name={data[7].name}
						AQI={data[7].AQI}
						airStatus={data[7].status}
						PM10={data[7].PM10}
						PM25={data[7].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[8].lat, lng: data[8].lng }}
						name={data[8].name}
						AQI={data[8].AQI}
						airStatus={data[8].status}
						PM10={data[8].PM10}
						PM25={data[8].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[9].lat, lng: data[9].lng }}
						name={data[9].name}
						AQI={data[9].AQI}
						airStatus={data[9].status}
						PM10={data[9].PM10}
						PM25={data[9].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[10].lat, lng: data[10].lng }}
						name={data[10].name}
						AQI={data[10].AQI}
						airStatus={data[10].status}
						PM10={data[10].PM10}
						PM25={data[10].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[11].lat, lng: data[11].lng }}
						name={data[11].name}
						AQI={data[11].AQI}
						airStatus={data[11].status}
						PM10={data[11].PM10}
						PM25={data[11].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[12].lat, lng: data[12].lng }}
						name={data[12].name}
						AQI={data[12].AQI}
						airStatus={data[12].status}
						PM10={data[12].PM10}
						PM25={data[12].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[13].lat, lng: data[13].lng }}
						name={data[13].name}
						AQI={data[13].AQI}
						airStatus={data[13].status}
						PM10={data[13].PM10}
						PM25={data[13].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[14].lat, lng: data[14].lng }}
						name={data[14].name}
						AQI={data[14].AQI}
						airStatus={data[14].status}
						PM10={data[14].PM10}
						PM25={data[14].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[15].lat, lng: data[15].lng }}
						name={data[15].name}
						AQI={data[15].AQI}
						airStatus={data[15].status}
						PM10={data[15].PM10}
						PM25={data[15].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[16].lat, lng: data[16].lng }}
						name={data[16].name}
						AQI={data[16].AQI}
						airStatus={data[16].status}
						PM10={data[16].PM10}
						PM25={data[16].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[17].lat, lng: data[17].lng }}
						name={data[17].name}
						AQI={data[17].AQI}
						airStatus={data[17].status}
						PM10={data[17].PM10}
						PM25={data[17].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[18].lat, lng: data[18].lng }}
						name={data[18].name}
						AQI={data[18].AQI}
						airStatus={data[18].status}
						PM10={data[18].PM10}
						PM25={data[18].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
					<Marker
						onClick={this.onMarkerClick}
						position={{ lat: data[19].lat, lng: data[19].lng }}
						name={data[19].name}
						AQI={data[19].AQI}
						airStatus={data[19].status}
						PM10={data[19].PM10}
						PM25={data[19].PM25}   />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose} >
						<div>
							<h5>{this.state.selectedPlace.name}</h5>
							<p>AQI: {this.state.selectedPlace.AQI}</p>
 					   		<p>Status: {this.state.selectedPlace.airStatus}</p>
 					    	<p>PM 10: {this.state.selectedPlace.PM10}</p>
 					    	<p>PM 2.5: {this.state.selectedPlace.PM25}</p>
						</div>
					</InfoWindow>
				</Map> 
        	</div>
      	);
	}
}
export default MapContainer;


// class Markers extends Component {
// 	render() {
// 		return (
// 			<>
// 			<Marker
// 				onClick={this.props.onMarkerClick}
// 				position={{lat: this.props.lat, lng: this.props.lng}} />
// 			<InfoWindow
// 				marker={this.props.state.activeMarker}
// 				visible={this.props.state.showingInfoWindow}
// 				onClose={this.props.onClose} >
// 				<div>
// 					<p>AQI: {this.props.AQI}</p>
// 					<p>{this.props.status}</p>
// 					<p>PM10: {this.props.PM10}</p>
// 					<p>PM 2.5 {this.props.PM25}</p>
// 				</div>
// 			</InfoWindow>
// 			</>
// 		)
// 	}
// }


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
