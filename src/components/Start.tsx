import { Button } from "@mui/material";
import { useState } from "react";
import image from "../assets/img.png";
import type { Action } from "../reducers/appReducer";

interface Props {
  text: string;
  dispatch: React.ActionDispatch<[action: Action]>;
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
}

const Start = ({ text, dispatch, clicked, setClicked }: Props) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1
        className={`text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 ${touched && "text-white"}`}
      >
        {text}
      </h1>

      <img
        onClick={() => {
          dispatch({ type: "ImgTouched" });
          setClicked(!clicked);
          setTouched(true);
        }}
        src={image}
        alt="img"
        className={`
            transition-all duration-500 ease-out  rounded-2xl
            border-4 border-transparent hover:border-indigo-500/50
            ${clicked ? "scale-150 shadow-2xl" : "hover:scale-105"}
            cursor-pointer select-none w-64 h-64 object-cover
          `}
      />
      {!touched && (
        <p className="text-lg font-medium text-center text-white">
          Toca la foto
        </p>
      )}

      {!touched && (
        <p className="text-lg font-medium text-center text-white">
          (no tenia mas fotos jksjskjs)
        </p>
      )}

      {!clicked && (
        <Button
          onClick={() => dispatch({ type: "QuizStart" })}
          variant="contained"
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            color: "white",
            fontWeight: "bold",
            padding: "0.75rem 2rem",
            borderRadius: "1rem",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          Seguimos ➜
        </Button>
      )}
    </div>
  );
};

export default Start;
