import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProdcuts} from './mocks/products.json'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"




const App = () => {

  const [filters, setFilters] = useState({
		category: "all",
		minPrice: 0,
  });

  const filterProducts = (products) => {
		return products.filter(
			(product) =>
				product.price >= filters.minPrice &&
				(filters.category === "all" ||
					product.category === filters.category)
		);
  };

  const [products] = useState(initialProdcuts);
  // const { filterProducts } = useFilters();
  
  const filteredProducts = filterProducts(products);

  return (
		<>
			<Header changeFilters={setFilters} />
			<Products products={filteredProducts} />
			<Footer filters={filters} />
		</>
  );
  
}

export default App