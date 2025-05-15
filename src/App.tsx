import { useReducer, useState } from "react";
import { Toaster } from "react-hot-toast";
import End from "./components/End";
import Gallery from "./components/Gallery";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
import appReducer, { initialState } from "./reducers/appReducer";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <div className="container relative px-4 py-8 mx-auto">
        <div className="relative z-10 p-8 shadow-2xl backdrop-blur-sm bg-white/5 rounded-2xl">
          <Main>
            {state.status === "START" && (
              <Intro dispatch={dispatch} text={state.text} />
            )}
            {state.status === "INTRO" && (
              <Start
                clicked={clicked}
                setClicked={setClicked}
                dispatch={dispatch}
                text={state.text}
              />
            )}
            {state.status === "QUIZ" && <Quiz dispatch={dispatch} />}
            {state.status === "QUIZEND" && <Gallery dispatch={dispatch} />}
            {state.status === "END" && <End />}
          </Main>
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            fontSize: "1.1rem",
            fontFamily: "Cascadia Code PL",
            padding: "1rem 1.5rem",
            borderRadius: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
          duration: 12 * 1000, // 10 seconds
        }}
      />
    </div>
  );
}

export default App;
