import { useSingUp } from "../hook/useSingUp";

function Login() {
  const { signUpWithGoogle } = useSingUp();
  return (
    <div className="h-screen grid place-items-center">
      <button onClick={signUpWithGoogle} className="btn btn-primary">
        Google
      </button>
    </div>
  );
}

export default Login;
