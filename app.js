import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./src/components/AppLayout";
import Home from "./src/components/Home";
import Signup from "./src/components/user/Signup";
import Signin from "./src/components/user/Signin";
import Admin from "./src/components/Admin";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";
import Map from "./src/components/Map";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <Provider store={store}>
        <Signup />
      </Provider>
    ),
  },
  {
    path: "signin",
    element: (
      <Provider store={store}>
        <Signin />
      </Provider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);
