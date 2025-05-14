import { Button } from "@mui/material";
import type { Action } from "../reducers/appReducer";

interface Props {
  text: string;
  dispatch: React.ActionDispatch<[action: Action]>;
}

function Intro({ text, dispatch }: Props) {
  return (
    <div className="container mx-auto -mt-20">
      <h2 className="w-11/12 mx-auto text-6xl font-bold text-center text-gray-200">
        {text === "De madre la enana esta 😒"
          ? "Pero es que tu ves como tú eres 😡"
          : "Hola pequeña psicóloga 💗"}
      </h2>
      <hr className="w-11/12 mx-auto my-5 mt-8 text-center text-gray-500 " />
      <h3 className="w-11/12 mx-auto text-3xl font-bold text-center">{text}</h3>
      <div className="flex justify-center gap-4 mt-8">
        <Button
          sx={{ boxShadow: "0 0 " }}
          variant="contained"
          onClick={() => dispatch({ type: "Ready" })}
        >
          {text === "De madre la enana esta 😒"
            ? "okok, ya estoy ready"
            : "Toy Ready"}
        </Button>
        {text !== "De madre la enana esta 😒" && (
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch({ type: "CancelReady" })}
          >
            Todavía no
          </Button>
        )}
      </div>
    </div>
  );
}

export default Intro;
