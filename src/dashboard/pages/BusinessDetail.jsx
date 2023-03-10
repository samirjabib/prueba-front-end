import { useParams, useNavigate } from "react-router-dom";
import { useGetCompaniesByNitQuery } from "../../store/api/businessApi";
import { ProductList } from "../components";
import { CompanyDetail } from "../components/CompanyDetail";
import { MdOutlineArrowBack } from "react-icons/md";
import { Loading, Modal } from "../../components";
import { AddProduct } from "../components/AddProduct";
import { useHandleModal, useProviderTheme } from "../../hooks";

export const BusinessDetail = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleModal, modalOpen } = useHandleModal();

  const { data, isLoading } = useGetCompaniesByNitQuery(id);

  if (isLoading) {
    return (
      <div className=" justify-center flex h-screen items-center">
        <Loading />
      </div>
    );
  }

  const backRoute = () => {
    navigate(-1);
  };

  const { name, address, inventary, phone } = data;
  const { products, id: inventoryId } = inventary;
  const { role } = user.user;

  return (
    <div className="mt-20">
      <div
        className="md:mb-16 relative bottom-16 ml-4 cursor-pointer "
        onClick={backRoute}
      >
        <MdOutlineArrowBack size={30} color="#2563eb" />
      </div>
      <CompanyDetail
        name={name}
        address={address}
        phone={phone}
        inventoryId={inventoryId}
      />
      <ProductList products={products} user={user} />
      {role === "admin" && (
        <div className=" w-full flex max-w-md mx-auto justify-end">
          <button
            className="mt-4 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={handleModal}
          >
            Add Product
          </button>
          <Modal
            title="Add Product"
            modalOpen={modalOpen}
            handleModal={handleModal}
            children={
              <AddProduct handleModal={handleModal} inventoryId={inventoryId} />
            }
          />
        </div>
      )}
    </div>
  );
};
