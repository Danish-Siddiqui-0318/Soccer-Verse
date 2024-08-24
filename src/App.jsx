import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import { RouterProvider } from "react-router-dom";
import FixturesPage from "./pages/FixturesPage";
import PlayerDetail from "./pages/PlayerDetail";
import Rankings from "./pages/Rankings";
import FeedbackForm from "./pages/FeedbackForm";
import ContactUsForm from "./pages/ContactUsForm";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fixtures",
      element: <FixturesPage />,
    },
    {
      path: "/players",
      element: <Players />,
    },
    {
      path: "/PlayerDetail/:id",
      element: <PlayerDetail />,
    },
    {
      path: "/Ranking",
      element: <Rankings />,
    },
    {
      path: "/FeedbackForm",
      element: <FeedbackForm/>,
    },
    {
      path: "/ContactUsForm",
      element: <ContactUsForm/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
