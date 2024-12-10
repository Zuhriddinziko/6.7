import { useGlobalContext } from "../hook/useGlobalContext";
import { formatPrice } from "../utils";

function TableFrom({ id, title, price, amount, brand, thumbnail }) {
  const { changeAmount, removeProduct } = useGlobalContext();

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brand ${brand}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">
          {formatPrice(price * amount)}
        </span>
      </td>
      <td className="flex items-center gap-1">
        <button
          onClick={() => changeAmount(id, "increment")}
          className=" btn btn-sm "
        >
          +
        </button>
        <h3>{amount}</h3>
        <button
          onClick={() => {
            if (amount <= 1) {
              removeProduct(id);
            } else {
              changeAmount(id, "decrement");
            }
          }}
          className=" btn btn-sm "
        >
          -
        </button>
      </td>
      <th>
        <button
          onClick={() => removeProduct(id)}
          className="btn btn-sm  btn-secondary"
        >
          delete
        </button>
      </th>
    </tr>
  );
}

export default TableFrom;
