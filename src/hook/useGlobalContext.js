import { useContext } from "react";
import { GlobalContext } from "../context/GloblContext";

export const useGlobalContext = () => {
  const contect = useContext(GlobalContext);
  return contect;
};
