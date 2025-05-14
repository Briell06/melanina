import { Button } from "@mui/material";
import image from "../assets/img.png";
import type { Action } from "../reducers/appReducer";

interface Props {
  text: string;
  dispatch: React.ActionDispatch<[action: Action]>;
}

const Start = ({ text, dispatch }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-10 text-white">
      <h1 className="text-3xl font-bold text-center text-slate-300">{text}</h1>
      <div className="flex items-center justify-center select-none">
        <img
          src={image}
          className="w-1/2 mb-2 transition duration-300 cursor-pointer select-none h-1/2 rounded-2xl hover:scale-170 active:scale-170"
          onMouseEnter={() => dispatch({ type: "ImgTouched" })}
        />
      </div>
      <p className="my-0 text-center mx-auto">(mantén presionada la foto)</p>
      <p className="mt-0 text-center mx-auto">
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
