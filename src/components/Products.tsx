import { AddToCartIcon } from './Icons';
import './Products.css';

export function Products ({ products }) {
    return (
		<main className="products">
			<ul>
				{products.slice(0, 10).map((product) => (
					<li key={product.id}>
						<img
                            
							src="https://culturagamer.mx/wp-content/uploads/2021/02/Computadora-gamer-alta-tecnologia-monitor-gabinete-teclado-mouse-gamer.jpg"
							alt={product.title}
							width="40%"
						/>
						<div key={product.id}>
							<strong key={product.id}>{product.title}</strong> -
							${product.price}
						</div>
						<div>
							<AddToCartIcon  />
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
