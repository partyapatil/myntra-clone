import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import Bag from "./routes/Bag.jsx"
import PaymentPage from './componets/PaymentPage.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import myntraStore from './store/index.js'
import { Provider } from "react-redux";
import { Navigate } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import AddressForm from './componets/AddressForm.jsx'
import Women from './componets/Women.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/>/*, loader: postLoader*/ },
      {
        path: "/bag",
        element:<Bag/>,
        // action: createPostAction, 
      },
      {
        path: "/bagg",
        element:<Bag/>,
        // action: createPostAction, 
      },
      {
        path: "/wo",
        element:<Women/>,
        // action: createPostAction, 
      },
      {
        path: "/payment",
        element:
        <PaymentPage />
     ,
        // action: createPostAction, 
      },
      {
        path: "/add",
        element:
        <AddressForm />
     ,
        // action: createPostAction, 
      },
      { path: "/payment/add", element: <Navigate to="/add" /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={myntraStore}>
<RouterProvider router={router}/>
</Provider>
  </>
  ,
)
