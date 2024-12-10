import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, selectProduct: [...state.selectProduct, payload] };
    case "CHANGE_COLOR":
      return { ...state, color: payload };
    case "CANCULATOR":
      return { ...state, totalPrice: payload[0], totalAmount: payload[1] };
    case "CHANGE_AMOUNT":
      return { ...state, selectProduct: payload };
    case "REMOVE_PRODUCT":
      return { ...state, selectProduct: payload };
  }
};
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: "",
    selectProduct: [],
    totalPrice: 0,
    totalAmount: 0,
  });
  // amount product
  const canculate = () => {
    let allPrice = 0;
    let allAmount = 0;
    if (state.selectProduct.length) {
      state.selectProduct.forEach((product) => {
        allPrice += product.price * product.amount;
        allAmount += product.amount;
      });
    }
    dispatch({ type: "CANCULATOR", payload: [allPrice, allAmount] });
  };
  // change Amount
  const changeAmount = (id, ty) => {
    if (ty == "increment") {
      const changeProducts = state.selectProduct.map((produk) => {
        if (produk.id == id) {
          return { ...produk, amount: produk.amount + 1 };
        } else {
          return produk;
        }
      });
      dispatch({ type: "CHANGE_AMOUNT", payload: changeProducts });
    } else {
      const changeProducts = state.selectProduct.map((produk) => {
        if (produk.id == id) {
          return { ...produk, amount: produk.amount - 1 };
        } else {
          return produk;
        }
      });
      dispatch({ type: "CHANGE_AMOUNT", payload: changeProducts });
    }
  };

  // add product
  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
    canculate();
  };
  // remove product
  const removeProduct = (id) => {
    const selectFilter = state.selectProduct.filter(
      (produk) => produk.id !== id
    );
    dispatch({ type: "REMOVE_PRODUCT", payload: selectFilter });
  };
  useEffect(() => {
    canculate();
  }, [state.selectProduct]);
  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, removeProduct, addProduct, changeAmount }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
