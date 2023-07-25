import React, { createContext, useContext, useReducer } from "react";
import { PostBodyData } from "../interfaces/dataInterface/postBodyInterface.type";
import {
  ApiPostDataContextProps,
  ApiPostDataState,
} from "../interfaces/contextInterface/apiPostDataContext.type";
import { postData } from "../service/apiHelper";

// Actions pour modifier les états
enum ApiActionTypes {
  START_LOADING,
  POST_SUCCESS,
  POST_ERROR,
}

type ApiAction =
  | { type: ApiActionTypes.START_LOADING }
  | { type: ApiActionTypes.POST_SUCCESS; payload: string }
  | { type: ApiActionTypes.POST_ERROR; payload: string };

// Fonction réductrice pour gérer les états
const apiReducer = (
  state: ApiPostDataState,
  action: ApiAction
): ApiPostDataState => {
  switch (action.type) {
    case ApiActionTypes.START_LOADING:
      return { ...state, isLoading: true, error: "", successMessage: "" };
    case ApiActionTypes.POST_SUCCESS:
      return { ...state, isLoading: false, successMessage: action.payload };
    case ApiActionTypes.POST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const ApiPostDataContext = createContext<ApiPostDataContextProps>({
  isLoading: false,
  error: "",
  successMessage: "",
  postApiData: async () => {},
});

export const useApiPostDataContext = () => useContext(ApiPostDataContext);

// Provider du contexte
export const ApiPostDataProvider: React.FC = ({ children }) => {
  const initialState: ApiPostDataState = {
    isLoading: false,
    error: "",
    successMessage: "",
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const postApiData = async (pageType: string, data: PostBodyData) => {
    dispatch({ type: ApiActionTypes.START_LOADING });

    try {
      const response = await postData(pageType, data);
      dispatch({
        type: ApiActionTypes.POST_SUCCESS,
        payload: "Requête réussie !",
      });
      // Faire quelque chose avec la réponse si nécessaire
    } catch (error) {
      dispatch({
        type: ApiActionTypes.POST_ERROR,
        payload: "Une erreur est survenue lors de l'envoi de la requête.",
      });
      // Gérer l'erreur ici ou afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <ApiPostDataContext.Provider value={{ ...state, postApiData }}>
      {children}
    </ApiPostDataContext.Provider>
  );
};
