import { CompanyTable, FormCrud } from "../components";
import { Modal } from "../../components";
import { useHandleModal } from "../../hooks";

export const Companies = ({ data, isLoading, error, user, isFetching }) => {
  const { handleModal, handleOutSideClick, modalOpen } = useHandleModal();
  const { role } = user.user;

  return (
    <>
      <h1 className="text-4xl mt-12 md:mt-24 mb-12 text-gray-700 uppercase  dark:text-gray-400 text-center font-bold">
        Registered companies
      </h1>
      <div className="max-w-2xl mx-auto mt-12 relative">
        <div className="overflow-x-auto shadow-md sm:rounded-lg ">
          <CompanyTable data={data} isLoading={isLoading} error={error} isFetching={isFetching} />
        </div>
        {role === "admin" && (
          <>
            {" "}
            <button
              className=" absolute right-0 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={handleModal}
            >
              Add Company
            </button>
            <Modal
              title="Register Company"
              handleOutSideClick={handleOutSideClick}
              modalOpen={modalOpen}
              handleModal={handleModal}
              children={<FormCrud handleModal={handleModal} />}
            />
          </>
        )}
      </div>
    </>
  );
};
