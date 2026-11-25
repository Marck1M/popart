import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InicioPage from "./pages/InicioPage";
import LineupPage from "./pages/LineupPage";
import GaleriaPage from "./pages/GaleriaPage";
import EntradasPage from "./pages/EntradasPage";
import MapaPage from "./pages/MapaPage";
import ClubPage from "./pages/ClubPage";

function Layout() {
  return (
    <div className="min-h-screen bg-[#FFE600] text-black flex flex-col">
      <Header />
      <main className="flex-1 pt-16 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <InicioPage /> },
      { path: "lineup", element: <LineupPage /> },
      { path: "galeria", element: <GaleriaPage /> },
      { path: "entradas", element: <EntradasPage /> },
      { path: "mapa", element: <MapaPage /> },
      { path: "club", element: <ClubPage /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}