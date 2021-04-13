import { LatLngExpression } from "leaflet";

export interface PlaceState {
  places: Place[];
  selectedPlace: Place | null;
  placePreviewsIsVisible: boolean;
  prePlacePosition: LatLngExpression;
}

export interface IState {
  places: PlaceState;
}

export interface Place {
  pos: LatLngExpression;
  name: string;
  icon?: string;
  status?: "LVL_1" | "LVL_2" | "LVL_3" | "LVL_4" | "LVL_5";
  details?: string;
}
