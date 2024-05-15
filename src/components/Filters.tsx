import React, { useState } from "react";
import './Filters.css'

const Filters = () => {
    const [minPrice, setminPrice   ] = useState(0);
    
    const handleChangeMinPrice = (event) => {
        setminPrice(event.target.value);
    }

    return (
		<div>
			<section className="filters">
				<div>
					<label htmlFor="price">Precio a partir de:</label>
                    <input 
                        type="range" 
                        id="price"
                        min='0'
                        max='1000'
                        onChange={handleChangeMinPrice}
                    />
                    <span>${minPrice}</span>
                </div>

                <div>
                    <label htmlFor="category">Categoría</label>
                    <select id="category">
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
