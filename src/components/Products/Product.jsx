import { useState } from 'react';
import './Product.scss';
import { products } from '../../Data';
import { Alert } from '@mui/material';

const Product = ({ cart, setCart, showSuccessMessage, setShowSuccessMessage }) => {
	const [product, setProduct] = useState(products);


	const AddToCart = (productId) => {
		const productAdd = product.find((p) => p.id === productId);
		if (productAdd) {
			setCart([...cart, productAdd]);
			setShowSuccessMessage(true);
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 2000);
		}
	}

	return (
		<div className="product">
			{showSuccessMessage && (
				<div className="success">
				<Alert severity="success">Product added to cart successfully!</Alert>
			</div>
			)}
			<div className="items">
				{product.length > 0 ? product.map((item) => (
					(<div className="item" key={item.id}>
						<div className="top">
							<img src={item.img} alt="" />
						</div>
						<div className="bottom">
							<div className="top">
								<div className="topLeft">
									<h1>{item.name}</h1>
								</div>
								<div className="topRight">
									<span>{item.price}.
										<small>{item.point}</small>
										dh
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
					</div>)
				)) : <Alert severity="warning">Sorry!</Alert>}
			</div>
		</div>
	)
}

export default Product
