import { useState } from 'react';
import './App.scss';
import Topbar from './components/Topbar/Topbar';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Home from './Page/Home/Home';
import ReactWhatsapp from 'react-whatsapp';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ComfOrder from './Page/ComfirmeOrder/ComfOrder';

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
			<div className="pagehome">
				<BrowserRouter>
					<Routes>
						<Route path='/' element={
							<Home setCart={setCart} cart={cart} showSuccessMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage} />
						} />
						<Route path='/ConfirmOrder' element={<ComfOrder/>}/>
					</Routes>
				</BrowserRouter>
			</div>
			<div className="lastpage">
				<ReactWhatsapp number="+212 682917806" message="Hello, Mohamed!">
					<img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="" />
				</ReactWhatsapp>
			</div>
			<Footer />
		</div>
	);
}

export default App;
