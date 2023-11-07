import { useState } from 'react';
import './App.scss'
import Topbar from './components/Topbar/Topbar';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Product from './components/Products/Product';
import Footer from './components/Footer/Footer';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showRemoveMessage, setShowRemoveMessage] = useState(false);
	return (
		<div className='App'>
			<div className="top">
				<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} cart={cart}/>
				<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} cart={cart} setCart={setCart} showRemoveMessage={showRemoveMessage} setShowRemoveMessage={setShowRemoveMessage} />
			</div>
			<Header />
			<div className="elment">
				<Product setCart={setCart} cart={cart} showSuccessMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage} />
			</div>
			<div className="lastpage">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt="" />
			</div>
			<Footer />
		</div>
	)
}

export default App;
