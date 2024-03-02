import React from "react";
import {useForm} from "react-hook-form";


const EmailConfirmation = (props) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        console.log(data.code)
        console.log(props.code)
        if (data.code == props.code) {
            alert("Inscription reussi")
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('name',props.pseudonyme)
            window.location.reload();
        }
        else {
            alert("Code mauvais veuillez ressayer")
        }

    }

    return (
    <div>
        <div className="fixed inset-0 flex items-center justify-center ">
        
        <div className="flex flex-col w-full items-center justify-center mx-auto max-w-md md:h-screen lg:py-0">

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#0c0c0c] dark:border-[#e0c758]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)} >
                  <div>
                      <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Code de vérification</label>
                      <input type="text" name="code" id="code"
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("code",{required: true,maxLength:30})} 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemple : 54286"/>
                   {errors.code && errors.code.type === "required" && (
                            <span role="alert" className="text-red-500 text-sm ">Code Requis</span>
                        )}
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#e0c758]" >Confirmation</button>
              </form>
          </div>
      </div>
  </div>
</div>
</div>
    );
};

export default EmailConfirmation