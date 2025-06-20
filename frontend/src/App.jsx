import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import PaymentInfo from "./Pages/PaymentInfo";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Dashboard from "./Pages/admin/Dashboard";
import AdminPanel from "./Pages/admin/AdminPanel";
import CompleteOrder from "./Pages/admin/CompleteOrder";
import ProgressOrder from "./Pages/admin/ProgressOrder";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<PaymentInfo />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/admin" element={<AdminPanel />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="completed-order" element={<CompleteOrder />} />
        <Route path="progress-order" element={<ProgressOrder />} />
      </Route>
    </Routes>
  );
};

export default App;
