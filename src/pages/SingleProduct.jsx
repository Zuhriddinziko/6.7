import { Link, useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/AxiosInstance";
import { useContext } from "react";
import { GlobalContext } from "../context/GloblContext";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const produk = req.data;
  return { produk };
};

function SingleProduct() {
  const { dispatch, selectProduct } = useContext(GlobalContext);
  const { produk } = useLoaderData();
  const buyProduct = (e, pro) => {
    e.preventDefault();
    const product = selectProduct.find((product) => pro.id == product.id);
    if (product) {
      alert("already added");
      return;
    }
    dispatch({ type: "ADD_PRODUCT", payload: pro });
  };
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-11">
        <figure>
          <img src={produk.thumbnail} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{produk.title}</h2>
          <p>${produk.price}</p>
          <div className="card-actions justify-end gap-2">
            <Link to={"/"} className="btn btn-outline">
              Close
            </Link>

            <button
              onClick={(e) => {
                buyProduct(e, pro);
              }}
              className="btn btn-primary"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
