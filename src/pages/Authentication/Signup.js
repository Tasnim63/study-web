import React from "react";
import { useForm } from "react-hook-form";
function Signup() {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <>
    
    <div className=" flex justify-center items-center">
      <div className="w-96 bg-white shadow-lg px-12">
          <h1 className=" text-secondary text-3xl  font-bold">Sign up</h1>

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
            <p className=" mt-8 text-light-gray text-xl  mb-3">Confirm Password*</p>
            <input type="password" placeholder="password" className=" w-full  border-none rounded-2xl  bg-backgroud p-2"
              {...register("password", { required: "Confirm Address is required" })}
            />
            <p className=" text-red-800  font-bold">{errors.password?.message}</p>
         
            <input className=" w-full rounded-xl p-2 text-white font-xl bg-primary mt-12 mb-20 " type="submit" value="Signup" />
          </form>

        </div>
     </div>

   

    
    
  
    </>
  );
}

export default Signup;
