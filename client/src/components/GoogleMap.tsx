import {
  useState,
  useCallback,
  memo,
  VoidFunctionComponent,
  CSSProperties,
} from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Skeleton from "@material-ui/lab/Skeleton";
import config from "../config";

type GoogleMapProps = {
  center?: {
    lat: number;
    lng: number;
  };
  style?: CSSProperties;
  onChange?: (latLng: string) => any;
};

const containerStyle = {
  width: "75ch",
  height: "400px",
};

// UC Davis coordinates
const center = {
  lat: 38.537,
  lng: -121.754,
};

const GoogleMapWrapper: VoidFunctionComponent<GoogleMapProps> = (props) => {
  const { onChange: handleChange = () => null } = props;

  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    version: "quarterly",
    googleMapsApiKey: config.REACT_APP_API_KEY,
    preventGoogleFontsLoading: true,
  });

  const [, setMap] = useState<google.maps.Map>(null);

  const onLoad = useCallback(
    (map: google.maps.Map): void | Promise<void> => setMap(map),
    []
  );

  const onUnmount = useCallback(
    (map: google.maps.Map): void | Promise<void> => setMap(null),
    []
  );

  return isLoaded && !loadError ? (
    <GoogleMap
      mapContainerStyle={{ ...containerStyle, ...props.style }}
      center={props.center || center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        draggable
        position={center}
        onDrag={({ latLng }) => handleChange(latLng.toUrlValue())}
      />
    </GoogleMap>
  ) : (
    <Skeleton variant="rect" width="75ch" height="400px" />
  );
};

export default memo(GoogleMapWrapper);
