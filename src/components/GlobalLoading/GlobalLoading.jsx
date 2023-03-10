import { BarLoader } from "react-spinners";

export const GlobalLoading = () => {
  return (
    <div className="text-black h-screen text-4xl flex items-center justify-center flex-col bg-white dark:bg-black  md:w-full ">
      <div className="max-w-md flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl md:text-7xl self-center  dark:text-white">
          Companies<span className="text-[#2563eb]">State</span>
        </h1>
        <BarLoader color="#2563eb" className="mt-6 w-full" width={""} />
      </div>
    </div>
  );
};
