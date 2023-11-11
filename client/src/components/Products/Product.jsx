import { useEffect, useState } from 'react';
import './Product.scss';
import { products } from '../../Data';
import { Alert } from '@mui/material';
import axios from "axios";

const Product = ({ cart, setCart, showSuccessMessage, setShowSuccessMessage }) => {
	const [product, setProduct] = useState([]);
	const [showWarningMessage, setShowWarningMessage] = useState(false);


// Add to Cart
	const AddToCart = (productId) => {
		const productAdd = product.find((p) => p.id === productId);

		if (productAdd) {
			const productAlreadyInCart = cart.find((item) => item.id === productId);
			if (productAlreadyInCart) {
				setShowWarningMessage(true);
				setTimeout(() => {
					setShowWarningMessage(false);
				}, 3000);

			} else {
				setCart((prevCart) => [...prevCart, { ...productAdd, quantity: 1 }]);
				setShowSuccessMessage(true);
				setTimeout(() => {
					setShowSuccessMessage(false);
				}, 3000);
			}
		}
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await axios.get("http://localhost:8080/products")
				console.log(res);
			} catch(err) {
				console.log(err)
			}
		}
		fetchProducts();
	}, [])


	return (
		<div className="product">
			{showSuccessMessage ? (
				<div className="success">
					<Alert severity="success">Product added to cart successfully!</Alert>
				</div>
			) : (
				showWarningMessage && (
					<div className="success">
						<Alert severity="warning">Product is already in the cart!.</Alert>
					</div>
				)
			)}
			<div className="items">
				{product.length > 0 ? (
					product.map((item) => (
						<div className="item" key={item.id}>
							<div className="top">
								<img src={item.img} alt="" />
							</div>
							<div className="bottom">
								<div className="top">
									<div className="topLeft">
										<h1>{item.name}</h1>
									</div>
									<div className="topRight">
										<span>
											{item.price} dh
										</span>
									</div>
								</div>
								<div className="coneter">
									<p>{item.desc}</p>
								</div>
								<div className="last" onClick={() => AddToCart(item.id)}>
									Add To Cart
								</div>
							</div>
						</div>
					))
				) : (
					<Alert severity="warning">Sorry!, Don't Have Any product.</Alert>
				)}
			</div>
		</div>
	);
};

export default Product;
