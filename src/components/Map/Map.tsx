import React, { useEffect, useState } from "react";
import { DivIcon, LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { connect } from "react-redux";
import {
  setAllPlaces,
  setPlacePreviewVisibility,
  setSelectedPlace,
} from "../../store/actions";
import { IState, Place } from "../../store/models";
import L from "leaflet";
import { COLOR } from "./constants";
import db from "../../db.json";
import "./Map.css";
import ClickOther from "./ClickOther";

const Map = ({
  isVisible,
  places,
  selectedPlace,
  togglePreview,
  setPlaceForPreview,
  setAllPlaces,
}: any) => {
  const defaultPosition: LatLngExpression = [47.495632, 19.061795];
  // for fake data
  const [count, setCount] = useState(0);

  const callApi = async () => {
    await fetch(
      "https://my-json-server.typicode.com/thaycacac/react-leaflet-demo/data4"
    );
  };

  useEffect(() => {
    // @ts-ignore
    setAllPlaces(db[`data${count}`]);
    const idInterval = setInterval(() => {
      callApi();
      setCount((count + 1) % 5);
      // @ts-ignore
      setAllPlaces(db[`data${count}`]);
      const newPlace = places.find(
        (place: Place) => place?.name === selectedPlace?.name
      );
      if (!!newPlace) {
        setPlaceForPreview(newPlace);
      }
    }, 5000);

    return () => {
      clearInterval(idInterval);
    };
  }, [count]);

  const showPreview = (place: Place) => {
    if (isVisible) {
      togglePreview(false);
      setPlaceForPreview(null);
      setTimeout(() => {
        showPlace(place);
      }, 400)
    } else if (selectedPlace?.name !== place?.name) {
      setTimeout(() => {
        showPlace(place);
      }, 400);
    } else {
      setPlaceForPreview(place);
    }
  };

  const showPlace = (place: Place) => {
    setPlaceForPreview(place);
    togglePreview(true);
  };

  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map((place: Place) => (
          <Marker
            key={place.name}
            position={place.pos}
            icon={
              place?.icon
                ? L.icon({
                    iconUrl: place?.icon,
                    iconRetinaUrl: place?.icon,
                    iconSize: [38, 95],
                    shadowSize: [50, 64],
                    iconAnchor: [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76],
                  })
                : new DivIcon({
                    className: "my-custom-pin",
                    iconAnchor: [0, 24],
                    popupAnchor: [0, -36],
                    html: `<span style="background-color: ${
                      COLOR[place?.status || "LVL_1"]
                    }" />`,
                  })
            }
            eventHandlers={{ click: () => showPreview(place) }}
          >
            <Tooltip>{place.name}</Tooltip>
          </Marker>
        ))}
        <ClickOther />
      </MapContainer>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return {
    isVisible: places.placePreviewsIsVisible,
    places: places.places,
    selectedPlace: places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePreview: (payload: boolean) =>
      dispatch(setPlacePreviewVisibility(payload)),
    setPlaceForPreview: (payload: Place) => dispatch(setSelectedPlace(payload)),
    setAllPlaces: (payload: Place[]) => dispatch(setAllPlaces(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
