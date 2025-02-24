import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./views/Home/Home";
import Detail from "./Routes/Detail";
import Dashboard from "./views/Dashboard/Dashboard";
import AddProducts from "./views/Dashboard/components/AddProduct/AddProducts";
import CreateProduct from "./views/Dashboard/components/AddProduct/components/CreateProduct";
import ListProducts from "./views/Dashboard/components/ListProducts/ListProducts";

function App() {
  return (
    <Routes>
      {/* Rutas del Home */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
        {/* Panel Administrador */}
        <Route path="/administracion" element={<Dashboard />}>
          <Route index element={<AddProducts />} />
          <Route path="crear-producto" element={<CreateProduct />} />
          <Route path="listar-productos" element={<ListProducts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
