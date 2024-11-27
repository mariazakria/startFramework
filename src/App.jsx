import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notfound from './Pages/Notfound/Notfound';
import Layout from './Layouts/layouts'; 
import Portfolio from './Pages/Portfolio/Portfolio';
import Home from './Pages/Home/Home';
import Contact from './Pages/Home/Contact/Contact';
import About from './Pages/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// Old method

 // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //     <Route path="/About" element={<About />} />
    //     <Route path="/portfolio" element={<Portfolio />} />
    //     <Route path="/contact" element={<Contact />} />

    //       <Route index element={<Home />} /> 
    //       <Route path="*" element={<Notfound />} />

    //     </Route>
    //   </Routes>
    // </BrowserRouter>
