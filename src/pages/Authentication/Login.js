import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import Signup from "./Signup";
function Login() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    let signInError;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if(error || gError){
    signInError=<p className=" text-red-600  mt-2 font-bold">{error?.message || gError?.message}</p>
  }
  if (loading || gLoading) {
    return      <Loading></Loading>
   
  }
  if (user || gUser) {
    console.log(user || gUser);
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <>
      <div className=" flex justify-center items-center gap-12 my-12">
        <div className="w-96 h-[600px] bg-white shadow-lg px-12">
          <h1 className=" text-secondary text-3xl  font-bold">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className=" mt-8 text-light-gray text-xl mb-2">
              Username or Email*
            </p>

            <input
              type="email"
              placeholder="Username or Email"
              className=" w-full  border-none rounded-2xl  bg-backgroud p-2"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <p className=" text-red-800  font-bold">{errors.email.message}</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className=" text-red-800  font-bold">{errors.email.message}</p>
            )}

            <p className=" mt-8 text-light-gray text-xl  mb-3">
              User Password*
            </p>
            <input
              type="password"
              placeholder="password"
              className=" w-full  border-none rounded-2xl  bg-backgroud p-2"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 charecter or longer",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <p className=" text-red-800  font-bold">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className=" text-red-800  font-bold">
                {errors.password.message}
              </p>
            )}
            {signInError}
            <input

              className=" w-full rounded-xl p-2 text-white font-xl bg-primary  mt-8 "
              type="submit"
              value="login"
            />
            <input
              onClick={() => signInWithGoogle()}
              className=" w-full rounded-xl p-2 text-white font-xl bg-primary mt-8"
              type="submit"
              value="Continue With google"
            />
          </form>
        </div>
        <Signup></Signup>
      </div>

    
    </>
  );
}

export default Login;
