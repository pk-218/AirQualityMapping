import React, { Component } from 'react';
import { Map, Marker, InfoWindow } from 'google-maps-react';

import { Navigation } from './Navigation';

const mapStyles = {
    width: '100%',
    height: '100%'
};
  
export class MapContainer extends Component {

	state = {
		showingInfoWindow: false,  
		activeMarker: {},          
		selectedPlace: {}          
	};

	onMarkerClick = (props, marker, e) =>
    	this.setState({
    		selectedPlace: props,
      		activeMarker: marker,
      		showingInfoWindow: true
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
            		initialCenter={ { lat: 23.2599, lng: 77.4126 } }
				>
					<Marker
          				onClick={this.onMarkerClick}
          				name={'Bhopal'}
        			/>
        			<InfoWindow
          				marker={this.state.activeMarker}
          				visible={this.state.showingInfoWindow}
          				onClose={this.onClose}
        			>
          				<div>
            				<h4>{this.state.selectedPlace.name}</h4>
          				</div>
        			</InfoWindow>	  
				</Map>
        	</div>
      	);
    }
}
export default MapContainer;