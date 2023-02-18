import React from 'react'
import { withScriptjs,withGoogleMap,GoogleMap, Marker,} from "react-google-maps"

const Map = (props) => {
  return (
    <>
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>

  {/* Map with a Marker */}
</>
  )
}

export default Map