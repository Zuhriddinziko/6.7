// import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { GlobalContext } from "../context/GloblContext";
import { useGlobalContext } from "../hook/useGlobalContext";
function ProductsContainer() {
  const { addProduct, selectProduct } = useGlobalContext();
  const { data } = useLoaderData();

  const buyProduct = (e, pro) => {
    e.preventDefault();
    const product = selectProduct.find((product) => pro.id == product.id);
    if (product) {
      alert("already added");
      return;
    }
    addProduct({ ...pro, amount: 1 });
  };
  // const { data } = useLoaderData();
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-5">
      {data.map((pro) => {
        return (
          <Link
            to={`/singleProduct/${pro.id}`}
            key={pro.id}
            className="card glass mt-14"
          >
            <figure>
              <img src={pro.thumbnail} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm md:text-2xl">{pro.title}</h2>
              <p>${pro.price}</p>

              <div className="card-actions justify-between gap-5 items-center">
                <div className="rating flex justify-start">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                </div>
                <button
                  onClick={(e) => {
                    buyProduct(e, pro);
                  }}
                  className="btn btn-primary btn-sm md:btn-md"
                >
                  Add box
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsContainer;
