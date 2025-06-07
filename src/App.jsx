import { Toaster } from "react-hot-toast"
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom';
import PaymentInfo from "./Pages/PaymentInfo";

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/payment" element={<PaymentInfo />} />
   </Routes>
  )
}

export default App