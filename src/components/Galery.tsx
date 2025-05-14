import { Skeleton } from "@mui/material";

const Gallery = () => {
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="mb-0 text-4xl font-semibold text-center">
        Aquí tengo pensado hacer una galería o algo asi para poner las fotos que
        nos tiremos 🤠
      </h1>
      <p className="mt-3">
        (si es que las hay, porque no soy mucho de fotos la verdad ksksjksj)
      </p>
      <div className="h-[60vh] bg-slate-800 rounded-2xl bg-gradient-to-b from-slate-400 to-slate-700 p-5 shadow-lg shadow-black grid grid-cols-3 gap-5">
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
    </div>
  );
};

export default Gallery;
