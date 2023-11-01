import './App.scss'
import CartProduct from './components/Cart_Product/CartProduct'
import Header from './components/Header/Header'
import Topbar from './components/TopBar/Topbar'

function App() {

	return (
		<div>
			<Topbar />
			<Header />
			<CartProduct />
		</div>
	)
}

export default App
