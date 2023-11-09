
import { Button } from 'react-bootstrap';
import './Menu.scss';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = ({ menuOpen, setMenuOpen, cart, setCart, showRemoveMessage, setShowRemoveMessage }) => {

	// remove from cart
	const removeFromCart = (productId) => {
		const updatedCart = cart.filter((item) => item.id !== productId);
		setCart(updatedCart);
		setShowRemoveMessage(true);
		setTimeout(() => {
			setShowRemoveMessage(false);
		}, 2000);
	}

	// get Total price
	const calculateTotal = (cart) => {
		const totalPrice = cart.reduce((total, item) => {
			const itemPrice = parseFloat(item.price.replace("Dh", ""));
			return total + itemPrice;
		}, 0.0);
		const formattedTotal = totalPrice.toFixed(2) + "Dh";

		return formattedTotal;
	};

	return (
		<div className={'menu ' + (menuOpen && "active")}>
			{showRemoveMessage && (
				<div className="success">
					<Alert severity="error">Product Deleted successfully!</Alert>
				</div>
			)}
			<div className="menuTop">
				<div className="icons" onClick={() => setMenuOpen(!menuOpen)}>
					<CloseOutlinedIcon />
				</div>
			</div>
			<div className="items">
				{cart && cart.length > 0 ? (
					cart.map((item) => (
						<div className="item" key={item.id}>
							<div className="top">
								<div className="left">
									<img src={item.img} alt="" />
									<span>{item.name}</span>
								</div>
								<div className="right">
									<div className="top">
										<div className="icons" onClick={() => removeFromCart(item.id)}>
											<DeleteForeverOutlinedIcon />
										</div>
									</div>
									<div className="bottom">
										<span>{item.price}Dh</span>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<Alert severity="warning">Your cart is empty.</Alert>
				)}
			</div>
			<div className="bottom">
				<span>Total: {calculateTotal(cart)}</span>
				{/* <Link to='/ConfirmOrder'> */}
					<Button variant='success'>CheckOut</Button>
				{/* </Link> */}
			</div>
		</div>
	)
}

export default Menu
