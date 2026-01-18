import { createBrowserRouter, Link, RouterProvider, Outlet } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import Login from './Login';

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
