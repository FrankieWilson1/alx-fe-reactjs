import { createBrowserRouter, Link, RouterProvider, Outlet, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';


const RootLayout = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div >
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
