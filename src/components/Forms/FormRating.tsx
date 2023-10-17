import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {HappyFace, NeutralFace, SadFace, SmilingFace} from "../ui/Common";

type FormRatingProps = {
  label?: string;
  rating: number;
  setRating: any;
  errorMessage?: string;
};

const customStyles = {
  itemShapes: [SadFace, NeutralFace, SmilingFace, HappyFace],
  activeFillColor: ["#da1600", "#dcb000", "#61bb00", "#009664"],
  inactiveFillColor: "#a8a8a8",
};

const FormRating = ({
  rating,
  setRating,
  errorMessage,
  label,
}: FormRatingProps) => {
  return (
    <div>
      {label ? label : null}
      <br />
      <Rating
        style={{
          maxWidth: 300,
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          //   gap: "30px",
        }}
        value={rating}
        onChange={setRating}
        itemStyles={customStyles}
        items={4}
        highlightOnlySelected={true}
        spaceBetween="medium"
        transition="zoom"
      />

      <small style={{color: "red"}}>{errorMessage}</small>
    </div>
  );
};

export default FormRating;
