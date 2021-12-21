export const formatoPeso = (precioFinal) => {
  return precioFinal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};
