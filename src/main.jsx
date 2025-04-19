import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Accounting from "./pages/Services/Accounting.jsx";
import BookKeeping from "./pages/Services/BookKeeping.jsx";
import FinancialAnalysis from "./pages/Services/FinancialAnalysis.jsx";
import Payroll from "./pages/Services/Payroll.jsx";
import TaxReturn from "./pages/Services/TaxReturn.jsx";
import GST from "./pages/Services/GST.jsx";
import YearEndAccounting from "./pages/Services/YearEndAccounting.jsx";
import Blog from "./pages/Blog.jsx";
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, errorElement: <NotFound /> },
      { path: "/about", element: <About /> },
      { path: "/services/accounting", element: <Accounting /> },
      { path: "/services/bookkeeping", element: <BookKeeping /> },
      { path: "/services/yearendaccounting", element: <YearEndAccounting /> },
      { path: "/services/taxreturn", element: <TaxReturn /> },
      { path: "/services/payroll", element: <Payroll /> },
      { path: "/services/GST", element: <GST /> },
      { path: "/services/financialanalysis", element: <FinancialAnalysis /> },
      { path: "/blog", element: <Blog /> },
      { path: "/career", element: <Career /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
