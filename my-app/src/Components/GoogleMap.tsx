import { Loader } from "@googlemaps/js-api-loader";

const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places"],
});

const mapOptions = {
    center,
    zoom: 4,
};

loader.load().then(() => {
    new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        mapOptions
    );
});

function Map() {
    return <div id="map" style={{ height: "400px" }}></div>;
}

export default Map;
