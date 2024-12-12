import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContextProvider } from "./context/GloblContext.jsx";
// import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    {/* <ToastContainer /> */}
  </GlobalContextProvider>
);
