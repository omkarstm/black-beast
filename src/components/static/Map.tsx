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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.1646913720798!2d85.50951158542125!3d26.56941267629347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf12b325eeb7f%3A0xe8c1fa5b7976cada!2sBlack%20beasts!5e0!3m2!1sen!2sin!4v1735279914298!5m2!1sen!2sin" width={"100%"} height={"100%"} style={{ border: "0", minHeight:"400px" }} className="mx-auto"  loading="lazy" ></iframe>
      </div>
    </div>
  );
};

export default Map;
