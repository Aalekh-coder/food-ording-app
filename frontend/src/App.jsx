import { Toaster } from "react-hot-toast"
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom';
import PaymentInfo from "./Pages/PaymentInfo";
import PaymentSuccess from "./Pages/PaymentSuccess";

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/payment" element={<PaymentInfo />} />
     <Route path="/paymentsuccess" element={<PaymentSuccess />} />
   </Routes>
  )
}

export default App