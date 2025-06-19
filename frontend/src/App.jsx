import { Toaster } from "react-hot-toast"
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom';
import PaymentInfo from "./Pages/PaymentInfo";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Dashboard from "./Pages/admin/Dashboard";

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/payment" element={<PaymentInfo />} />
     <Route path="/paymentsuccess" element={<PaymentSuccess />} />
     <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
  )
}

export default App