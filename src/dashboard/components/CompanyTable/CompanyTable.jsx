import { Link } from "react-router-dom";
import { Loading } from "../../../components";

export const CompanyTable = ({ data, isLoading, error, isFetching }) => {


  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Company
          </th>
          <th scope="col" className="px-6 py-3">
            Adress
          </th>
          <th scope="col" className="px-6 py-3">
            Nit
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
        </tr>
      </thead>
      <tbody>

        
        {data?.map((companyData, index) => {
          const { name, address, nit, phone } = companyData;

          return (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
              >
                <Link to={`/details/${nit}`}>{name}</Link>
              </th>

              <td className="px-6 py-4">{address}</td>
              <td className="px-6 py-4">{nit}</td>
              <td className="px-6 py-4">{phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
