// Simulates payment completion using a simple timeout.
// Returns a promise that resolves successfully after 1.5 seconds.

export const fakePayment = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Payment Successful!" });
    }, 1500);
  });
};
