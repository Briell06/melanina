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
    <div>
      <h1>{<BiSmile size={"200px"} className="mx-auto mb-4 text-center" />}</h1>
      <h2 className="font-mono text-3xl font-bold text-center">{state.text}</h2>

      <div className="flex flex-col mt-20 space-y-2">
        {state.questions.options.map((question, index) => (
          <button
            onClick={() => quizDispatch({ type: "SELECTED", option: index })}
            className={`${state.selected === index ? "bg-slate-950 translate-x-5 " : ""} w-10/12 py-5 mx-auto text-xl font-semibold transition rounded-4xl bg-slate-800 hover:bg-slate-950 cursor-pointer hover:translate-x-5`}
            key={index}
          >
            {question}
          </button>
        ))}
      </div>
      <div className="flex justify-end w-10/12 mx-auto ">
        <Button
          onClick={() => {
            toast.success(
              "Siempre recuerda, nunca dejes de hacer lo que te gusta por miedo a que dirá la gente, vive la vida como te gusta y no como te dicen que debes vivir."
            );
            dispatch({ type: "QuizEnd" });
          }}
          variant="contained"
          endIcon={<Start />}
          sx={{ mt: 5, borderRadius: 16 }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
