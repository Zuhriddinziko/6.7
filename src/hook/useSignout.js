import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
export const useSignout = () => {
  const useSignouts = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon");
        // Sign-out successful.
      })
      .catch((error) => {
        toast.error(error.message);

        // An error happened.
      });
  };
  return { useSignouts };
};
