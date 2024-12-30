import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { About, HomeLayout, Landing, Cocktail, Newsletter, Error, SinglePageError} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleCocktailLoader } from "./pages/Cocktail";

import { action as newsletterAction } from './pages/Newsletter'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader 
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: SingleCocktailLoader,
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
      
      {
    path: 'about',
    element: <About />
  },
    ]
  },


  
])
const App = () => {
  return <RouterProvider router={router} />
};
export default App;
