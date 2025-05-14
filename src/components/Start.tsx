import { Button } from "@mui/material";
import image from "../assets/img.png";
import type { Action } from "../reducers/appReducer";

interface Props {
  text: string;
  dispatch: React.ActionDispatch<[action: Action]>;
}

const Start = ({ text, dispatch }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-10 text-white -mt-50">
      <h1 className="mt-10 text-5xl font-bold text-center text-slate-300">
        Bueno Felicidades, apareces en una página web bb 🎉
      </h1>
      <img
        src={image}
        className="w-1/2 mb-2 overflow-hidden transition duration-300 select-none h-1/2 rounded-2xl hover:scale-170 active:scale-170"
        onMouseEnter={() => dispatch({ type: "ImgTouched" })}
      />
      <p className="my-t-0">(mantén presionada la foto)</p>
      <h1 className="text-3xl font-bold text-center text-slate-300">{text}</h1>
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
