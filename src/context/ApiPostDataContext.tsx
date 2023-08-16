import React, { createContext, useContext, useReducer } from "react";
import { PostBodyData } from "../interfaces/dataInterface/postBodyInterface.type";
import {
  ApiPostDataContextProps,
  ApiPostDataState,
} from "../interfaces/contextInterface/apiPostDataContext.type";
import { postData } from "../service/apiHelper";
import { Id, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Actions pour modifier les états
enum ApiActionTypes {
  START_LOADING,
  POST_SUCCESS,
  POST_ERROR,
}

type ApiAction =
  | { type: ApiActionTypes.START_LOADING }
  | { type: ApiActionTypes.POST_SUCCESS; payload: Id }
  | { type: ApiActionTypes.POST_ERROR; payload: Id };

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

// Provider du contexte
export const ApiPostDataProvider: React.FC = ({ children }) => {
  const initialState: ApiPostDataState = {
    isLoading: false,
    error: "",
    successMessage: "",
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const postApiData = async (
    pageType: string,
    key: string,
    data: PostBodyData[typeof pageType],
    urlNavigate?: string
  ) => {
    dispatch({ type: ApiActionTypes.START_LOADING });

    try {
      const response = await postData(pageType, key, data);
      dispatch({
        type: ApiActionTypes.POST_SUCCESS,
        payload: toast.success(t(`${pageType}.notification.success`), {
          theme: "colored",
        }),
      });
      // Faire quelque chose avec la réponse si nécessaire
      navigate(urlNavigate);
    } catch (error) {
      dispatch({
        type: ApiActionTypes.POST_ERROR,
        payload: toast.error(t(`${pageType}.notification.error`), {
          theme: "colored",
        }),
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
