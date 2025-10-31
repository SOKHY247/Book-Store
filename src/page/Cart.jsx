import { useContext } from "react";
import CartContext from "@/context/CartContext";




const Cart = () => {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);
 
  if (cart.length === 0) {
    return (
      
      <p className="text-center py-12 font-semibold text-xl mt-5">
        Your cart is empty.
      </p>
    );
  }

  return (
    
    <div className="max-w-7xl mx-auto p-4 mt-10">
       <h1 className="text-3xl font-semibold tracking-tight text-center">Order Total : </h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                Image
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                Name
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                Category
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                Size
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                Price
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr
                key={item.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800"
              >
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  {item.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  {item.category}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  {item.size.join(", ")}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  {item.color}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-4 text-right text-lg font-semibold">
        Total: ${getTotal().toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
