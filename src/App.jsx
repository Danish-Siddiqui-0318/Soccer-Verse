import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import { RouterProvider } from "react-router-dom";
import FixturesPage from "./pages/FixturesPage";
import PlayerDetail from "./pages/PlayerDetail";
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
      element: <PlayerDetail/>,
    },

  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
