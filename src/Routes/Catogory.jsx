import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation para acceder a los parámetros de la URL
import RecomendadosCard from "../views/Home/components/RecomendadosCard"; // Asegúrate de importar RecomendadosCard

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Acceder a los parámetros de la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterParam = queryParams.get("filter");

  // Obtener las categorías al cargar el componente
  useEffect(() => {
    fetch("http://localhost:8080/categorias")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error obteniendo categorías:", error));
  }, []);

  // Obtener todos los productos (sin filtro) al cargar el componente
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error obteniendo productos:", error));
  }, []);

  // Aplicar filtro automáticamente si hay un parámetro "filter" en la URL
  useEffect(() => {
    if (filterParam) {
      setSelectedCategories([parseInt(filterParam)]); // Convertimos el filtro a un número y lo agregamos a selectedCategories
    }
  }, [filterParam]);

  // Función para manejar la selección de categorías
  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  // Función para aplicar el filtro de categorías automáticamente
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        selectedCategories.includes(product.categoria.id_category)
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategories, products]);

  // Función para limpiar los filtros
  const clearFilters = () => {
    setSelectedCategories([]);
  };

  useEffect(() => {
    if (products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  return (
    <div className="w-full mt-5 p-4 text-center">
      {/* Filtros de categorías */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <div
            key={category.id_category}
            className="flex items-center border border-[#3C6E71] bg-white rounded-lg px-4 py-2 gap-2"
          >
            <label
              htmlFor={`category-${category.id_category}`}
              className="text-[#3C6E71] font-semibold cursor-pointer"
              onClick={() => handleCategoryChange(category.id_category)}
            >
              {category.name}
            </label>

            {selectedCategories.includes(category.id_category) && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategories((prevSelected) =>
                    prevSelected.filter((id) => id !== category.id_category)
                  );
                }}
                className="text-[#3C6E71] ml-2"
              >
                <img
                  src="/close.svg"
                  alt="Eliminar filtro"
                  className="w-4 h-4"
                />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Botón de limpiar filtros */}
      <div className="mt-6">
        <button
          onClick={clearFilters}
          className="bg-[#3C6E71] text-white px-4 py-2 rounded"
        >
          Limpiar filtros
        </button>
      </div>

      {/* Mensaje de resultados encontrados */}
      <div className="mt-6 text-[#3C6E71] text-lg font-semibold">
        <p>
          ¡Se encontraron {filteredProducts.length} resultados de su búsqueda!
        </p>
      </div>

      {/* Mostrar los productos filtrados */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          console.log("Producto filtrado ID:", product.id);

          return <RecomendadosCard key={product.id} event={product} />;
        })}
      </div>
    </div>
  );
};

export default Category;
