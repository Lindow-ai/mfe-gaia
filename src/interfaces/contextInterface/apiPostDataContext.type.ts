import { PostBodyData } from "../dataInterface/postBodyInterface.type";

// Interface pour les états du reducer
export interface ApiPostDataState {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
}

// Interface pour notre contexte
export interface ApiPostDataContextProps extends ApiPostDataState {
  postApiData: (pageType: string, data: PostBodyData) => Promise<void>;
}
