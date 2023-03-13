import { InputCustom, Loading } from "../../../components";
import { useForm } from "../../../hooks";
import { AiFillPhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useSendEmailMutation } from "../../../store/api/businessApi";
import { toast } from "react-toastify";

export const CompanyDetail = ({ name, address, phone, inventoryId }) => {
  const { formState, onInputChange, onResetForm } = useForm({
    email: "",
  });


  const { email } = formState;

  const [ send, {isLoading, error, data}] = useSendEmailMutation()
  console.log(data)

  const sendEmail = async(e) => {
    e.preventDefault()

    await send({
      email,
      inventoryId
    })

    onResetForm()
    toast.success('email send')
  }

  return (
    <div
      href="#"
      className="block max-w-sm p-6 bg-white border-gray-200 mx-auto rounded-lg shadow  dark:bg-gray-800  dark:hover:bg-gray-700"
    >
      <div className="flex flex-col gap-y-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400 flex flex-row gap-x-2 items-center">
          <span>
            <ImLocation size={15} color="#9ca3af" />
          </span>
          <span>{address}</span>
        </p>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400 flex flex-row gap-x-2 items-center">
          <span>
            <AiFillPhone size={15} color="#9ca3af" />
          </span>
          <span>{phone}</span>
        </p>
      </div>

      <div className="mt-14">
        <InputCustom
          type="text"
          name="email"
          placeholder=""
          value={email}
          onChange={onInputChange}
          label="Receive the inventory to your e-mail"
        />
        <button onClick={sendEmail} className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {isLoading ? (
              <Loading color="#36d7b7" size={18} />
            ) : (
              "Upload"
            )}
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
