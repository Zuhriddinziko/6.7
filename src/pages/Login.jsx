import { ToastContainer } from "react-toastify";
import { useSingUp } from "../hook/useSingUp";

function Login() {
  const { signUpWithGoogle } = useSingUp();
  return (
    <div className="h-screen grid place-items-center bg-amber-200">
      <button
        onClick={signUpWithGoogle}
        className="btn btn-primary shadow-[0_0_50px_blue] hover:shadow-red-600 hover:bg-white hover:text-slate-950 border-none"
      >
        Google
      </button>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Login;
