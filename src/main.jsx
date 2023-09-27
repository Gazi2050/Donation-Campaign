import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import CardDetails from './components/CardDetails/CardDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/CardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/Donation.json')
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
        loader: () => fetch('/Donation.json')
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
