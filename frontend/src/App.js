import { GoogleApiWrapper } from 'google-maps-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import  { MapContainer } from './MapContainer';
import { Navigation } from './Navigation';
import { API_KEY } from './api.js';


export default GoogleApiWrapper({
  apiKey: API_KEY,
  LoadingContainer: Navigation
}) (MapContainer);
