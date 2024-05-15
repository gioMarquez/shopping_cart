import React, { createContext, useState } from "react";

// Define la estructura predeterminada del contexto
const defaultFilters = {
	category: "all",
	minPrice: 0,
	setFilters: () => {}, // Añade una función predeterminada que no hace nada
};

// Crear el contexto con el valor por defecto
export const FiltersContext = createContext(defaultFilters);

// Crear el Provider para proveer el contexto
export function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 0,
	});

	return (
		<FiltersContext.Provider value={{ ...filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
}
