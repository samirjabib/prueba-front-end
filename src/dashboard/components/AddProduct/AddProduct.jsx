import { InputCustom, Loading } from "../../../components";
import { useForm } from "../../../hooks";
import { useCreateProductCompanyMutation } from "../../../store/api/businessApi";
import { toast } from "react-toastify";


export const AddProduct = ({handleModal, inventoryId}) => {
  const { formState, isFormValid, onInputChange, onResetForm, } = useForm({
    name: "",
  });

  const { name } = formState

  const [create, {isLoading, error}] = useCreateProductCompanyMutation()

  console.log(error)
  const onSubmit = async(e) => {
    e.preventDefault()

    await create({
      name,
      inventoryId
    })
    onResetForm()
    handleModal()
    toast.success('Product added')
  }

  return (
    <form className="" onSubmit={onSubmit}>
      <InputCustom
        onChange={onInputChange}
        type="text"
        name="name"
        label="Name"
        value={formState.name}
      />


      <div className="flex gap-4">
        <button
          className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          {isLoading ? (
              <Loading color="#36d7b7" size={18} />
            ) : (
              "Upload"
            )}
        </button>
        <button
          className=" mt-4 text-gray-400  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow hover:scale-95"
          type="button"
          onClick={handleModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
