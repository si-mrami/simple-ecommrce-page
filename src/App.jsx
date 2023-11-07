import { useState } from 'react';
import './App.scss'
import Topbar from './components/Topbar/Topbar';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Product from './components/Products/Product';
import Footer from './components/Footer/Footer';
import Home from './Page/Home/Home';
import ReactWhatsapp from 'react-whatsapp';


function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showRemoveMessage, setShowRemoveMessage] = useState(false);
	return (
		<div className='App'>
			<div className="top">
				<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} cart={cart} />
				<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} cart={cart} setCart={setCart} showRemoveMessage={showRemoveMessage} setShowRemoveMessage={setShowRemoveMessage} />
			</div>
			<Header />
			<div className="pagehome">
				<Home setCart={setCart} cart={cart} showSuccessMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage} />
			</div>
			<div className="lastpage">
				<ReactWhatsapp number="+212 682917806" meassage="Hello, Mohamed!">
					<img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="" />
				</ReactWhatsapp>
			</div>
			<Footer />
		</div>
	)
}

export default App;
