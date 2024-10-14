import { useRoutes, BrowserRouter } from "react-router-dom";

// Importar los componentes para las rutas
import About from "../About";
import Home from "../Home";
import Account from "../Account";
import Order from "../Order";
import Orders from "../Orders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";

import "./App.css";  // Archivo de estilos opcional

const AppRoutes = () => {
  // Definir las rutas de la aplicación
  let routes = useRoutes([
    { path: "/about", element:<About />},
    { path: "/", element:<Home />},
    { path: '/account', element: <Account /> },
    { path: '/order', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> }
  ]);

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
