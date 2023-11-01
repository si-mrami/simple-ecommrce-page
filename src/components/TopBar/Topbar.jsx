import { useState } from 'react';
import './TopBar.scss';
import logo from '../../assets/icon.jpg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from 'react-bootstrap/Button';

const Topbar = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<div className="topbar">
			<div className="topbar-container">
				<div className="left">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<span>Sakey</span>
				</div>
				<div className="right">
					<div className="right-items" onClick={toggleCart}>
						<ShoppingCartOutlinedIcon />
						<span>Cart</span>
						<small>2</small>
					</div>
				</div>
			</div>
			{isCartOpen && (
				<div className={`cart ${isCartOpen ? 'cart-open' : ''}`}>
					<div className="top-cart">
						<CloseOutlinedIcon className='icons' onClick={toggleCart} />
					</div>
					<ul>
						<li>Sake 1</li>
						<li>Sake 2</li>
					</ul>
					<div className="bottom-cart">
						<p>Total: $50</p>
						<Button variant="primary">CheckOut</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Topbar;
