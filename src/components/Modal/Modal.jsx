import { AiFillCloseCircle } from "react-icons/ai";

export const Modal = ({
  ref,
  modalOpen,
  handleModal,
  title = "Register Company",
  children,
}) => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center fixed scroll- z-30 right-0 top-0 bg-black/70 ${
        modalOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative bg-white w-[90%] p-8 sm:left-28  max-w-sm  shadow-md  rounded-lg  dark:bg-gray-700">
        <div className="flex justify-end transition-all cursor-pointer mb-6">
          <AiFillCloseCircle
            size={30}
            color="#2563eb"
            className="shadow rounded-full"
            onClick={handleModal}
          />
        </div>
        <h4 className="text-dark dark:text-white font-semibold text-2xl mb-12 ">
          {title}
        </h4>
        <div ref={ref}> {children}</div>
      </div>
    </div>
  );
};
