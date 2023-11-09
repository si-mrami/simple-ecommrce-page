import './Header.scss';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/saki.jpg";
import img2 from "../../assets/icon.jpg"
import { useState } from 'react';
import { HedreImg } from '../../Data';

const Header = () => {
	const [hed, setHed] = useState(HedreImg)
	return (
		<div className="header">
			<Carousel data-bs-theme="dark">
				{hed && hed.length > 0 ? (hed.map((h) => (
					<Carousel.Item key={h.id}>
						<img
							className="d-block w-100"
							src={h.img}
							alt="First slide"
						/>
					</Carousel.Item>
				))) : (null)}
			</Carousel>
		</div>
	)
}

export default Header
