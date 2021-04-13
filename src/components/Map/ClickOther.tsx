import React, { useState } from "react";
import { LatLngExpression } from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";
import { connect } from "react-redux";
import { setPlacePreviewVisibility } from "../../store/actions";
import { IState } from "../../store/models";

const ClickOther = ({ togglePreview }: any) => {
  const [position, setPosition] = useState(
    (null as unknown) as LatLngExpression
  );

  useMapEvents({
    click: (e) => {
      togglePreview(false);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePreview: (payload: boolean) =>
      dispatch(setPlacePreviewVisibility(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickOther);
