
import './Header.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/saki.jpg';
import img2 from '../../assets/icon.jpg';

const Header = () => {
	return (
		<div className='header'>
			<Carousel>
				<div className='img-Slider'>
					<img src={img1} />
				</div>
				<div className='img-Slider'>
					<img src={img2} />
				</div>
				<div className='img-Slider'>
					<img src="https://hips.hearstapps.com/hmg-prod/images/22-del-seo-sake-1654263529.jpg?resize=1200:*" />
				</div>
			</Carousel>
		</div>
	)
}

export default Header
