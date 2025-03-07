import { Route, Routes } from 'react-router';
import Layout from './layout/Layout';
import Home from './views/Home/Home';
import Detail from './Routes/Detail';
import Dashboard from './views/Dashboard/Dashboard';
import AddProducts from './views/Dashboard/components/AddProduct/AddProducts';
import CreateProduct from './views/Dashboard/components/AddProduct/components/CreateProduct';
import ListProducts from './views/Dashboard/components/ListProducts/ListProducts';
import Register from './views/Register';
import EditProduct from './views/Dashboard/components/AddProduct/components/EditProduct';
import ListUsers from './views/Dashboard/components/ListUsers/ListUsers';

import Features from './views/Dashboard/components/ListFeatures/Features';
import EditFeature from './views/Dashboard/components/ListFeatures/components/EditFeature';
import AddFeature from './views/Dashboard/components/ListFeatures/components/AddFeature';

import Login from './views/Auth/Login';
import Category from './Routes/Catogory';


import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';
import ProtectedRoute from './views/Auth/ProtectRoute';
import Profile from "./views/Auth/Profile";


function App() {
  return (
    <Routes>
      {/* Rutas del Home */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        {/* Panel Administrador */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/administracion" element={<Dashboard />}>
            <Route index element={<AddProducts />} />
            <Route path="crear-producto" element={<CreateProduct />} />
            <Route path="listar-productos" element={<ListProducts />} />
            <Route path="editar-producto/:id" element={<EditProduct />} />
            <Route path="caracteristicas" element={<Features />} />
            <Route path="caracteristicas/:id" element={<EditFeature />} />
            <Route path="agregar-caracteristica" element={<AddFeature />} />
            <Route
              path="/administracion/listar-usuarios"
              element={<ListUsers />}
            />

            {/* Administración de Categorías */}
            <Route path="administrar-categorias" element={<CategoryForm />} />
            <Route path="listar-categorias" element={<CategoryList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
