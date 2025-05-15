import { Start } from "@mui/icons-material";
import { Button, Skeleton } from "@mui/material";
import type { Action } from "../reducers/appReducer";

interface Props {
  dispatch: React.ActionDispatch<[action: Action]>;
}

const Gallery = ({ dispatch }: Props) => {
  return (
    <div className="flex flex-col space-y-10 text-cyan-50">
      <h1 className="mb-0 text-4xl font-semibold text-center">
        Aquí tengo pensado hacer una galería o algo así para poner las fotos que
        nos tiremos 🤠
      </h1>
      <p className="mt-3 text-center">
        (si es que las hay, porque no soy mucho de fotos la verdad ksksjksj)
      </p>
      <div className="h-[50vh] bg-slate-800 rounded-2xl bg-gradient-to-b from-slate-400 via-slate-700 to-slate-900 p-5 shadow-lg shadow-black grid grid-cols-3 gap-5">
        {Array.from({ length: 9 }).map((_, index) => (
          <Skeleton
            className="shadow-lg shadow-black rounded-2xl"
            key={index}
            variant="rectangular"
            width="100%"
            height="100%"
          />
        ))}
      </div>
      <Button
        onClick={() => dispatch({ type: "End" })}
        variant="contained"
        endIcon={<Start />}
        sx={{ width: "fit-content", ml: "auto", mr: 5 }}
      >
        Continuar
      </Button>
    </div>
  );
};

export default Gallery;
