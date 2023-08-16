import { Id } from "react-toastify";
import { PostBodyData } from "../dataInterface/postBodyInterface.type";

// Interface pour les états du reducer
export interface ApiPostDataState {
  isLoading: boolean;
  error: Id;
  successMessage: Id;
}

// Interface pour notre contexte
export interface ApiPostDataContextProps extends ApiPostDataState {
  postApiData: (
    pageType: string,
    key: string,
    data: PostBodyData[typeof pageType],
    urlNavigate?: string
  ) => Promise<void>;
}
