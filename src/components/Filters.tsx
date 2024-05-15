import React, { useId, useState } from "react";
import './Filters.css'

const Filters = ({changeFilters}) => {
    const [minPrice, setminPrice   ] = useState(0);
    const [category, setCategory] = useState('')
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
		const newMinPrice = event.target.value;
        // const newCategory = event.target.value
		changeFilters((prevFilters) => ({
			...prevFilters,
			minPrice: newMinPrice,
            // category: 
		}));
	};

    const handleChangeCategory = ( event ) => {
        changeFilters(prevState => ({
            ...prevState, 
            category: event.target.value
        }))
    }

    return (
		<div>
			<section className="filters">
				<div>
					<label htmlFor={minPriceFilterId}>
						Precio a partir de:
					</label>
					<input
						type="range"
						id={minPriceFilterId}
						min="0"
						max="1000"
						onChange={handleChangeMinPrice}
					/>
					<span>${minPrice}</span>
				</div>

				<div>
					<label htmlFor={categoryFilterId}>Categoría</label>
					<select
						id={categoryFilterId}
						onChange={handleChangeCategory}
					>
						<option value="all">Todas</option>
						<option value="laptops">Portátiles</option>
						<option value="smartphones">Celualares</option>
					</select>
				</div>
			</section>
		</div>
	);
};

export default Filters;
