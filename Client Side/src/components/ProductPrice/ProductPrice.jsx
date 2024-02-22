
const ProductPrice = ({ price }) => {
  return new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default ProductPrice;
