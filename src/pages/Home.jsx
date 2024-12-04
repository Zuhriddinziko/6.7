import { axiosInstance } from "../utils/AxiosInstance";

import ProductsContainer from "../components/ProductsContainer";
// loader
export const loader = async () => {
  const req = await axiosInstance.get("/products");
  const data = req.data.products;
  return { data };
};
function Home() {
  return (
    <div>
      <ProductsContainer />
    </div>
  );
}

export default Home;
