import './Header.scss';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/saki.jpg";
import img2 from "../../assets/icon.jpg"

const Header = () => {
	return (
		<div className="header">
			<Carousel data-bs-theme="dark">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={img1}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={img2}
						alt="Second slide"
					/>

				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Header
