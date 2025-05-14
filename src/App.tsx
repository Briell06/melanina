import { useReducer } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
import appReducer, { initialState } from "./reducers/appReducer";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white to-slate-900 bg-gradient-to-b from-slate-950 font-['Cascadia Code PL']">
      <Main>
        {state.status === "START" && (
          <Intro dispatch={dispatch} text={state.text} />
        )}
        {state.status === "INTRO" && (
          <Start dispatch={dispatch} text={state.text} />
        )}
        {state.status === "QUIZ" && <Quiz />}
      </Main>
    </div>
  );
}

export default App;
