import Product from '../../components/Products/Product';
import './Home.scss';

const Home = ({setCart, cart, showSuccessMessage, setShowSuccessMessage}) => {
	return (
		<Product setCart={setCart} cart={cart} showSuccessMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage} />
	)
}

export default Home
