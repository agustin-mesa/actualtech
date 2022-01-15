export const formatoPeso = (precioFinal) => {
  return precioFinal.toLocaleString("de-DE", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
};
