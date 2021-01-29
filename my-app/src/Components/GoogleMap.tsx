import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "75ch",
    height: "400px",
};

const center = {
    lat: 38.537,
    lng: -121.754,
};

function MyComponent({ handleMarker }: any) {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_API_KEY as string,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        console.log("Calling onLoad");
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        console.log("Calling onUnmount");
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker
                draggable
                position={center}
                onDragEnd={(e) => handleMarker(e.latLng.toString())}
            />
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(MyComponent);
