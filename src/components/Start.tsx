import { Button } from "@mui/material";
import image from "../assets/img.png";
import type { Action } from "../reducers/appReducer";

interface Props {
  text: string;
  dispatch: React.ActionDispatch<[action: Action]>;
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
}

const Start = ({ text, dispatch, clicked, setClicked }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-10 text-white">
      <h1 className="text-3xl font-bold text-center text-slate-300">{text}</h1>
      <img
        onClick={() => {
          dispatch({ type: "ImgTouched" });
          setClicked(!clicked);
        }}
        src={image}
        alt="img"
        className={` w-1/2 mb-2 transition z-50  cursor-pointer select-none h-1/2 rounded-2xl ${clicked ? "scale-200 " : ""}`}
      />
      <p className="mx-auto my-0 text-center">(mantén presionada la foto)</p>
      <p className="mx-auto mt-0 text-center">
        por cierto perdón por la foto, no tenia mas ninguna ksjksjksj
      </p>
      <Button
        onClick={() => dispatch({ type: "QuizStart" })}
        variant="contained"
        sx={{ bgcolor: "#cad5e2", color: "black", fontWeight: "bold" }}
      >
        Bueno, Seguimos o que
      </Button>
    </div>
  );
};

export default Start;
