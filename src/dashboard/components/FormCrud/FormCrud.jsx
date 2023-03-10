import { toast } from "react-toastify";


import { InputCustom, Loading } from "../../../components";
import { useForm } from "../../../hooks";
import { useCreateCompanyMutation } from "../../../store/api/businessApi";

export const FormCrud = ({handleModal}) => {
  const { formState, onInputChange } = useForm({
    name: "",
    address: "",
    phone: "",
    nit: "",
  });

  const { name, address, phone, nit } = formState;

  const [createCompany, { isLoading, error }] =
    useCreateCompanyMutation();

  const onSubmit = async(e) => {
    e.preventDefault();

    await createCompany({
        ...formState
    })
    handleModal()
    toast.success('Company added')
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <InputCustom
        onChange={onInputChange}
        name="name"
        type="text"
        label="Name"
        value={name}
      />
      <InputCustom
        onChange={onInputChange}
        name="address"
        type="text"
        label="Address"
        value={address}
      />
      <InputCustom
        onChange={onInputChange}
        name="phone"
        type="text"
        label="Phone"
        value={phone}
      />
      <InputCustom
        onChange={onInputChange}
        name="nit"
        type="number"
        label="Nit"
        value={nit}
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
