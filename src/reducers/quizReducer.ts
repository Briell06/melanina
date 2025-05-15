export interface StateType {
  questions: Question;
  text: string;
  selected: number | null;
}

export interface Question {
  question: string;
  options: string[];
  "right-option": number;
}

interface Action {
  type: "SELECTED";
  option: number;
}

export const initialQuizState = {
  questions: {
    question: "¿Cantante Favorito?",
    options: [
      "Ricardo Arjona",
      "Melendi",
      "Calle 13",
      "Idania (La de español)",
    ],
    "right-option": 0,
  },
  text: "Vamos allá, selecciona tu cantante favorito de los que están aca",
  selected: null,
};

const quizReducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "SELECTED":
      if (action.option === 0)
        return {
          ...state,
          text: "Esoooooooo, ese es el tanke kjskjskjs, así que me debes una canción de ese tanke, y ya quiero poder escucharte cantando, lo admito, me generaste mucha curiosidad, y una de dos, o me quedo bobo con tu voz (probablemente es lo que vaya a pasar) o me río (mucho)",
          selected: action.option,
        };
      if (action.option === 1)
        return {
          ...state,
          text: "Melendi??, weno, no esta mal, me debes la canción de tu jardín con enanitos entonces, las demás no me gustan tanto jkskjs, en serio ya muero de ganas de escucharte cantando",
          selected: action.option,
        };
      if (action.option === 2)
        return {
          ...state,
          text: "Ni siquiera se quienes son los locos esos 🥲, pero weno, respeto tu opinión (me debes una de Arjona y punto kjskjs)",
          selected: action.option,
        };
      if (action.option === 3)
        return {
          ...state,
          text: `Esoooooooo, nos vamos a echar la tarde cantando "IDANIA DATE CUENTA, TU HIJO ES MONGO" kjskjskjs`,
          selected: action.option,
        };
      return { ...state };
  }
};
export default quizReducer;
