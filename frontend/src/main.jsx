
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OrderProvider from './context/Order-context'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <OrderProvider>
    <App />
    <Toaster/>
  </OrderProvider>,
  </BrowserRouter>
)
