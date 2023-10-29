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
import KhojoProfileForm from "./src/components/KhojoProfileForm";
import ShowProfiles from "./src/components/ShowProfiles";
import KhojoProfilesFrame from "./src/components/KhojoProfilesFrame";
import PublicProfile from "./src/components/PublicProfile";

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
      {
        path: "/form",
        element: <KhojoProfileForm />,
      },
      {
        path: "/profiles",
        element: <ShowProfiles />,
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
    path: "/signin",
    element: (
      <Provider store={store}>
        <Signin />
      </Provider>
    ),
  },
  {
    path: "/profiles/:profile_id",
    element: <PublicProfile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);
