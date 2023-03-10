

export const ProductList = ({ products, user, handleModal, modalOpen }) => {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16 max-w-md mx-auto ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            {user.role === "admin" && (
              <th scope="col " className="px-6 py-3 ">
                Action
              </th>
            )}
          </tr>
        </thead>
        {products.map((product) => {
          const { id, name } = product;
          return (
            <tbody key={id} className="-z-50">
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {id}
                </th>
                <td className="px-6 py-4">{name}</td>
                {user.role === "admin" && (
                  <td className="px-6 py-4 flex gap-4">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button className="font-medium text-gray-500 dark:text-gray-500 hover:underline">
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            </tbody>
          );
        })}
      </table>

    </div>
  );
};
