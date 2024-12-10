import { Link } from "react-router-dom";

import { useGlobalContext } from "../hook/useGlobalContext";
import { formatPrice } from "../utils";
import { Table } from "../components";

function Carts() {
  const { selectProduct, totalAmount, totalPrice } = useGlobalContext();
  if (selectProduct.length == 0) {
    return (
      <div className="flex text-center m-auto mb-56 font-bold text-6xl flex-col gap-12">
        <h1>You don't have any product</h1>
        <Link to={"/"} className=" btn btn-success w-20">
          by Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price:</th>
              <th>Amount:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectProduct.map((proo) => {
              return (
                <Table
                  key={proo.id}
                  id={proo.id}
                  brand={proo.brand}
                  price={proo.price}
                  thumbnail={proo.thumbnail}
                  amount={proo.amount}
                />
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-9 mb-11 mr-10 ml-10">
          <h3 className="font-semibold">
            {" "}
            All amount: <span className="text-red-600">{totalAmount}</span>
            pieces
          </h3>
          <h3 className="font-semibold">
            All price:{" "}
            <span className="text-red-600">{formatPrice(totalPrice)}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Carts;
