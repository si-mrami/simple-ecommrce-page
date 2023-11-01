import './CartProduct.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/saki.jpg';

const CartProduct = () => {
	return (
		<div className='cartProduct'>
			<div className="items">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>Sake 6</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<div className="cart-bottom">
							<Button variant="success">By New</Button>
							<Button variant='dark'>Add To Cart</Button>
						</div>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>Sake 5</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<div className="cart-bottom">
							<Button variant="success">By New</Button>
							<Button variant='dark'>Add To Cart</Button>
						</div>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>Sake 4</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<div className="cart-bottom">
							<Button variant="success">By New</Button>
							<Button variant='dark'>Add To Cart</Button>
						</div>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>Sake 3</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<div className="cart-bottom">
							<Button variant="success">By New</Button>
							<Button variant='dark'>Add To Cart</Button>
						</div>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>Sake 2</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<div className="cart-bottom">
							<Button variant="success">By New</Button>
							<Button variant='dark'>Add To Cart</Button>
						</div>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>Sake 1</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<div className="cart-bottom">
							<Button variant="success">By New</Button>
							<Button variant='dark'>Add To Cart</Button>
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>

	)
}

export default CartProduct
