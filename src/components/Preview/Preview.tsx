import { connect } from "react-redux";
import { setPlacePreviewVisibility } from "../../store/actions";
import { IState } from "../../store/models";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Preview.css";

const Preview = ({ isVisible, place, closePreview }: any) => {
  return (
    <div
      className={`preview__container preview__container--${
        isVisible && place && "active"
      }`}
    >
      <button className="preview__close" onClick={() => closePreview()}>
        X
      </button>
      <div className="preview__description">
        <div
          className="preview__title"
          dangerouslySetInnerHTML={{ __html: place?.details }}
        ></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return {
    isVisible: places.placePreviewsIsVisible,
    place: places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closePreview: () => dispatch(setPlacePreviewVisibility(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
