import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/bs";
import { toast } from "react-toastify";

import { useForm } from "../../hooks/useFormHook";
import { InputCustom, Loading } from "../../components";

import { useAuthStore } from "../../hooks";
import { useLoginMutation } from "../../store/api/businessApi";



const formFields = {
  email: "",
  password: "",
};

export const Login = ({ theme, handleTheme }) => {
  const { onLoginEmailAndPassword } = useAuthStore();

  const { onInputChange, formState, onResetForm } = useForm(
    formFields,
  );
  const { email, password } = formState;
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login({
      email,
      password,
    });

    if (data === undefined) {
      toast.error("Invalid User");
    }
    if (data.user && data.token) {
      const { user, token } = data;
      onLoginEmailAndPassword({ user, token });
      toast.success("Account Logged");
      onResetForm();
    }
  };

  return (
    <div className=" h-screen items-center justify-center flex flex-col bg-white dark:bg-black ">
      <div className=" shadow-md border border-gray-200 rounded-lg max-w-md  p-8  lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto relative bottom-12 ">
        <form
          className="space-y-6 max-w-md mx-auto  py-12 px-4 md:px-14"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col-reverse gap-4 items-center">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white  py-4">
              Login with your account
            </h3>
          </div>
          <div>
            <InputCustom
              onChange={onInputChange}
              name="email"
              value={email}
              type="email"
              label="Email"
              placeholder=""
            />
            <InputCustom
              onChange={onInputChange}
              name="password"
              value={password}
              type="password"
              label="Password"
              placeholder=" "
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            {isLoading ? (
              <Loading color="#36d7b7" size={18} />
            ) : (
              "Login to your account"
            )}
          </button>
        </form>
      </div>
      <div
        onClick={handleTheme}
        className=" flex   cursor-pointer  shadow-lg w-20 h-20 items-center justify-center rounded-full p-2 transition-all hover:bg-gray-700  bottom-12"
      >
        {theme === "dark" ? (
          <CiDark size={25} color="white" />
        ) : (
          <BsSun size={25} color="black" />
        )}
      </div>
    </div>
  );
};
