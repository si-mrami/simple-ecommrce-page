
import { Button } from 'react-bootstrap';
import './Menu.scss';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Alert } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useEffect, useState } from 'react';

const Menu = ({ menuOpen, setMenuOpen, cart, setCart, showRemoveMessage, setShowRemoveMessage }) => {

	const [totalPrice, setTotalPrice] = useState(0);

	// remove from cart
	const removeFromCart = (productId) => {
		const updatedCart = cart.filter((item) => item.id !== productId);
		setCart(updatedCart);
		setShowRemoveMessage(true);
		setTimeout(() => {
			setShowRemoveMessage(false);
		}, 2000);
	}

	const increaseQuantity = (productId) => {
		const updatedCart = cart.map((item) => {
			if (item.id === productId) {
				let quantity = item.quantity + 1;
				item.quantity = quantity;
				item.totalPrice = (parseFloat(item.price.replace("Dh", "")) * quantity).toFixed(2) + "Dh";
			}
			return item;
		});

		setCart(updatedCart);
	};

	const decreaseQuantity = (productId) => {
		const updatedCart = cart.map((item) => {
			if (item.id === productId) {
				let quantity = item.quantity - 1;
				if (quantity >= 1) {
					item.quantity = quantity;
					item.totalPrice = (parseFloat(item.price.replace("Dh", "")) * quantity).toFixed(2) + "Dh";
				}
			}
			return item;
		});

		setCart(updatedCart);
	};


	useEffect(() => {
		const newTotalPrice = cart.reduce((total, item) => {
			const itemPrice = parseFloat(item.price.replace("Dh", ""));
			return total + itemPrice * item.quantity;
		}, 0);

		setTotalPrice(newTotalPrice.toFixed(2));
	}, [cart]);


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
								<div className="center">
									<div className="right" onClick={() => decreaseQuantity(item.id)}>
										<RemoveCircleOutlineOutlinedIcon />
									</div>
									<div className="inputQuantity">
										<input type="text" readOnly value={item.quantity} />
									</div>
									<div className="left" onClick={() => increaseQuantity(item.id)}>
										<AddCircleOutlineOutlinedIcon />
									</div>
								</div>
								<div className="right">
									<div className="top">
										<div className="icons" onClick={() => removeFromCart(item.id)}>
											<DeleteForeverOutlinedIcon />
										</div>
									</div>
									<div className="bottom">
										<div className='numberofquantity'>{item.quantity}
										<small>X</small>
										</div>
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
			<div className="btncheckout">
				<span>Total: {totalPrice} Dh</span>
				{/* <Link to='/ConfirmOrder'> */}
				<Button variant='success'>CheckOut</Button>
				{/* </Link> */}
			</div>
		</div>
	)
}

export default Menu;
