// Formats numbers to INR currency format
export const formatPrice = (amount) => {
  if (!amount) return "₹0";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
};
