import { Button } from "@mui/material";
import { useState } from "react";

const End = () => {
  const [posX, setPosX] = useState(20);
  const [posY, setPosY] = useState(200);

  return (
    <div className="text-cyan-50">
      <h1 className="text-4xl text-center">
        Perdón por no haber podido hacer todo lo que había querido con la
        página, pero como ya te digo tengo ese encargo y sé que no voy a poderte
        dedicarle mucho tiempo a esta
      </h1>
      <div className="relative h-[40vh]    flex flex-col justify-center items-center mx-auto">
        <h3 className="absolute text-2xl text-center text-cyan-100 top-1/12">
          Ya vez que los cibernéticos somos tankes jskjs
        </h3>
        <div
          className={`absolute flex gap-5`}
          style={{
            left: `${posX}px`,
            top: `${posY}px`,
          }}
        >
          <Button variant="contained" color="secondary">
            Tienes Razón
          </Button>
          <Button
            onClick={() => {
              setPosX(Math.random() * 300);
              setPosY(Math.random() * 300);
            }}
            variant="contained"
            color="secondary"
          >
            No, todos son malos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default End;
