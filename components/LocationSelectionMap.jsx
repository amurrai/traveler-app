"use client"

import { useState } from "react";
import {
  APIProvider,
  Map,
  InfoWindow,
  AdvancedMarker,
  useAdvancedMarkerRef
} from "@vis.gl/react-google-maps";

const MarkerWithInfoWindow = (location) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <div key={location.id}>
      <AdvancedMarker
        
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{lat: location.latitude, lng: location.longitude}}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
          <b>{location.name}</b><br />
          {location.category}
        </InfoWindow>
      )}
    </div>
  );
};

const LocationSelectionMap = ({locations}) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ width: '100%', height: '40vh'}}>
        <Map
          defaultZoom={12}
          defaultCenter={{ lat: locations[0].latitude, lng: locations[0].longitude }}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }} 
        >
        {locations.map((location) => (
          MarkerWithInfoWindow(location)
        ))}
        </Map>
      </div>
    </APIProvider>
  )
}

export default LocationSelectionMap