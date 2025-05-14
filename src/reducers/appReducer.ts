export interface StateType {
  status: "START" | "INTRO" | "QUIZ" | "END";
  text: string;
}

interface CancelReady {
  type: "CancelReady";
}

interface Ready {
  type: "Ready";
}

interface ImgTouched {
  type: "ImgTouched";
}

interface QuizStart {
  type: "QuizStart";
}

export type Action = CancelReady | Ready | ImgTouched | QuizStart;

export const initialState = {
  status: "START" as const,
  text: "Lista para ver que no todos los cibernéticos somos malos? 😀",
};

const appReducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "CancelReady":
      return { ...state, text: "De madre la enana esta 😒" };
    case "Ready":
      return {
        ...state,
        status: "INTRO",
        text: "Aquí tenemos a la psicóloga mas dura y hermosa que existe :D",
      };
    case "ImgTouched":
      return {
        ...state,
        text: "Mira como toca la foto para verse, que creyente por dios 😓",
      };
    case "QuizStart":
      return {
        ...state,
        status: "QUIZ",
      };
  }
};

export default appReducer;
