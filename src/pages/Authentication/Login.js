import { useForm } from "react-hook-form";
import Signup from "./Signup";
function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" flex justify-center items-center gap-12 my-12">
        <div className="w-96 bg-white shadow-lg px-12">
          <h1 className=" text-secondary text-3xl  font-bold">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
         
          <p className=" mt-8 text-light-gray text-xl mb-2">Username or Email*</p>

            <input type="email" placeholder="Username or Email" className=" w-full  border-none rounded-2xl  bg-backgroud p-2"
              {...register("email", { required: "Email Address is required" })}
            />
            <p className=" text-red-800  font-bold">{errors.email?.message}</p>

            <p className=" mt-8 text-light-gray text-xl  mb-3">User Password*</p>
            <input type="password" placeholder="password" className=" w-full  border-none rounded-2xl  bg-backgroud p-2"
              {...register("password", { required: "Password Address is required" })}
            />
            <p className=" text-red-800  font-bold">{errors.password?.message}</p>
            <input className=" w-full rounded-xl p-2 text-white font-xl bg-primary mt-12 mb-48 " type="submit" value="login" />
          </form>

        </div>
        <Signup></Signup>
      </div>

      {/*     
      <div className=" flex  justify-center items-center my-24 gap-12">
        <div class="   shadow">
          <div class="card-body">
            <h2 class="card-title text-3xl  font-bold">Login</h2>

            <form >
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text text-gray text-lg">
                    Username or email *
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email or Username"
                  class="input input-bordered  w-full "
                 
                />
                <label class="label">
                 
              
                </label>
              </div>
              <div class=" w-full">
                <label class="label">
                  <span class="label-text text-gray-500 text-lg">
                    Password *
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered w-full "
                 
             
                />
                <label class="label">
                  
                </label>
              </div>
              <div class="form-control my-4">
                <label class="cursor-pointer label">
                <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-accent"
                  />
                  <span class="label-text  text-gray-500 text-lg">Remember me</span>
                 
                </label>
              </div>
              <input
                placeholder="Login"
                className="btn btn-accent text-lg w-full rounded-sm text-white font-bold"
                type="submit" value="Login"
              />
           
              
            </form>
            <p className=" my-5 text-gray-600 text-lg">Lost your password?</p>

            <div className=" flex justify-center items-center">
              <div className="flex gap-6 my-6 ">
                <button >
                  {" "}
                  <p className="text-teal-400 text-3xl w-12 p-2 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                    <AiOutlineGoogle></AiOutlineGoogle>
                  </p>
                </button>
                <p className="text-teal-400 text-3xl w-12 p-2 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                  <BsGithub></BsGithub>
                </p>
                <p className="text-teal-400 text-3xl w-12 p-2 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                  <BsFacebook></BsFacebook>
                </p>
              </div>
            </div>
          </div>
        </div>

    
      </div> */}
    </>
  );
}

export default Login;
