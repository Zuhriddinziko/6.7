import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
export const useSignout = () => {
  const useSignouts = () => {
    signOut(auth)
      .then(() => {
        alert("See you soon");
        // Sign-out successful.
      })
      .catch((error) => {
        alert(error.message);

        // An error happened.
      });
    // <ToastContainer />;
  };
  return { useSignouts };
};
