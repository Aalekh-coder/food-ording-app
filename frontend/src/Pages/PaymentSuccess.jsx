import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check the current path
  if (location.pathname === "/paymentsuccess") {
    localStorage.removeItem("cart");
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-orange-50 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2 className="text-green-500 w-20 h-20" />
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful! 🍽️
        </h2>

        <p className="text-gray-600 mb-4">
          Thank you for your order at{" "}
          <span className="font-semibold text-orange-600">
            The Masala Story
          </span>
          !
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Your delicious meal is being prepared with love and spices. We hope it
          brings flavor to your day!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors"
        >
          Back to Home
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PaymentSuccess;
