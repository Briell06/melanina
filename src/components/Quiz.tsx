import { Start } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useReducer } from "react";
import toast from "react-hot-toast";
import { BiSmile } from "react-icons/bi";
import type { Action } from "../reducers/appReducer";
import quizReducer, { initialQuizState } from "../reducers/quizReducer";

interface Props {
  dispatch: React.ActionDispatch<[action: Action]>;
}

const Quiz = ({ dispatch }: Props) => {
  const [state, quizDispatch] = useReducer(quizReducer, initialQuizState);

  return (
    <div className="max-w-2xl mx-auto">
      <BiSmile
        size={120}
        className="mx-auto mb-8 text-indigo-300 animate-bounce"
      />

      <h2 className="mb-12 text-3xl font-bold text-center bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-cyan-50">
        {state.text}
      </h2>

      <div className="space-y-4 text-cyan-50">
        {state.questions.options.map((question, index) => (
          <button
            key={index}
            onClick={() => quizDispatch({ type: "SELECTED", option: index })}
            className={`
              w-full p-4 text-lg font-medium rounded-xl transition-all duration-300
              ${
                state.selected === index
                  ? "bg-indigo-600 translate-x-4"
                  : "bg-slate-800/50 hover:bg-slate-700/50 hover:translate-x-2"
              }
              backdrop-blur-sm border border-white/10
            `}
          >
            {question}
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Button
          onClick={() => {
            toast.success(
              "Nunca dejes de hacer algo por el miedo al que dirán, y menos si es algo que amas, al final la vida es una sola, y hay que disfrutarla y ser nosotros mismos, porque a nadie le importa lo que hagamos, así que a ser felices. La pena a la verga jksjs",
              {
                icon: "💗",
                style: { display: "flex", flexDirection: "column-reverse" },
              }
            );
            dispatch({ type: "QuizEnd" });
          }}
          variant="contained"
          endIcon={<Start />}
          sx={{
            borderRadius: "1rem",
            padding: "0.75rem 2rem",
            background: "linear-gradient(to right, #4f46e5, #6366f1)",
            "&:hover": {
              background: "linear-gradient(to right, #4338ca, #4f46e5)",
            },
          }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
