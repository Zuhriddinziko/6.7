export const formatPrice = (price) => {
  const data = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price.toFixed(2));
  return data;
};
