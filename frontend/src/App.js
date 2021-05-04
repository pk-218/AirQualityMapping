// const App = () => {
//   return (
//     <div>

//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import {API_KEY} from './api'; 

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}
// mine
// 'AIzaSyAYNFzgKxlIG5cuvA20E8eoMrx_OiwoQy4'
// free but developer mode
// 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
// not working
// 'AIzaSyCPvegTVYEK30o7eLBed8y1ikDlPpW0wr4'
// 'AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI'
// below one works
export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);