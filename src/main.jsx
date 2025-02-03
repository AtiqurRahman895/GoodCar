import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import Base from "./components/BaseComponent/Base";
import ErrorPage from "./components/ErrorPageComponent/ErrorPage";
import Login from "./components/AuthenticationComponent/Login";
import Register from "./components/AuthenticationComponent/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./components/AuthenticationComponent/PrivateRoute";
import UpdateProfile from "./components/AuthenticationComponent/UpdateProfile";
import ChangePassword from "./components/AuthenticationComponent/ChangePassword";
import ForgotPassword from "./components/AuthenticationComponent/ForgotPassword";
import Home from "./components/HomeComponent/Home";
import Services from "./components/ServicesComponent/Services";
import AddBlog from "./components/AddBlogComponent/AddBlog";
import AllBlogs from "./components/AllBlogsComponent/AllBlogs";
import { normalAxios } from "./Hooks/useNormalAxios";
import { secureAxios } from "./Hooks/useSecureAxios";
import ScrollProgress from "./components/BlogComponent/ScrollProgress";
import Blog from "./components/BlogComponent/Blog";
import AdminRoute from "./components/AuthenticationComponent/AdminRoute";
// import AdminBase from './components/BaseComponent/AdminBase';
import UpdateBlog from "./components/UpdateBlogComponent/UpdateBlog";
import Service from "./components/ServiceComponent/service";
import MyAppointments from "./components/MyAppointmentsComponent/MyAppointments";
import AllAppointments from "./components/AllAppointmentsComponent/AllAppointments";
import UpdateAppointment from "./components/UpdateAppointmentComponent/UpdateAppointment";
import Payment from "./components/PaymentComponent/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:_id",
        element: <Service />,
      },
      {
        path: "/myAppoinments",
        element: (
          <PrivateRoute>
            <MyAppointments />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/allAppoinments",
        element: (
          <AdminRoute>
            <AllAppointments />
          </AdminRoute>
        ),
      },
      {
        path: "/update_appointment/:_id",
        loader: async ({ params }) => {
          const res = await secureAxios.get(`/appointment/${params._id}`);
          return res.data;
        },
        element: (
          <AdminRoute>
            <UpdateAppointment />
          </AdminRoute>
        ),
      },
      {
        path: "/add_blog",
        element: (
          <AdminRoute>
            <AddBlog />
          </AdminRoute>
        ),
      },
      {
        path: "/blogs",
        element: <AllBlogs />,
      },
      {
        path: "/blog/:_id",
        loader: async ({ params }) => {
          const res = await normalAxios.get(`/blog/${params._id}`);
          return res.data;
        },
        element: (
          <ScrollProgress>
            <Blog />
          </ScrollProgress>
        ),
      },
      {
        path: "/update_blog/:_id",
        loader: async ({ params }) => {
          const res = await normalAxios.get(`/blog/${params._id}`);
          return res.data;
        },
        element: (
          <AdminRoute>
            <UpdateBlog />
          </AdminRoute>
        ),
      },

      // Authentication
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/change-password",
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ToastContainer position="top-center" />
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
