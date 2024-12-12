"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";

const Map: React.FC = () => {
  const location = {
    lat: 37.7749, // Latitude of your location
    lng: -122.4194, // Longitude of your location
  };

  const mapContainerStyle = {
    height: "400px", // Height of the map
    width: "100%", // Width of the map
  };

  const options = {
    // Optional map options
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: false,
    mapTypeControl: false,
  };

  return (
    <div className="py-12">
      <div className="container">
      <h2 className="font-bold text-[30px] mb-8 text-center">Our location</h2>
        {/* <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={10}
            options={options}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript> */}
        <Image src={"/image/map.png"} height={200} alt="Map" width={1000} className="mx-auto"/>
      </div>
    </div>
  );
};

export default Map;
