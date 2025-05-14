import { useReducer } from "react";
import { Toaster } from "react-hot-toast";
import Gallery from "./components/Galery";
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
        {state.status === "QUIZ" && <Quiz dispatch={dispatch} />}
        {state.status === "QUIZEND" && <Gallery />}
      </Main>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#020617",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            flexDirection: "column",
            fontFamily: "Cascadia Code PL",
            fontWeight: "bold",
            padding: "1rem",
            borderRadius: "1rem",
            textAlign: "center",
            maxWidth: "90%",
            width: "100%",
            margin: "0 auto",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          },
          duration: 9000,
        }}
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
