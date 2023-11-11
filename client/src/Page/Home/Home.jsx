import Product from '../../components/Products/Product';
import './Home.scss';
import Header from "../../components/Header/Header"

const Home = ({setCart, cart, showSuccessMessage, setShowSuccessMessage}) => {
	return (
		<div className="home">
			<Header/>
			<Product setCart={setCart} cart={cart} showSuccessMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage} />
		</div>
	)
}

export default Home
