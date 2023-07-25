import { useContext } from "react";
import { ApiPostDataContext } from "../context/ApiPostDataContext";

// Custom hook pour utiliser notre contexte
export const useApiPostDataContext = () => useContext(ApiPostDataContext);
