import './Topbar.scss';
import logo from "../../assets/saki.jpg";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Topbar = ({ menuOpen, setMenuOpen }) => {

	return (
		<div className="topbar">
			<div className="left">
				<img src={logo} alt="" />
				<span>Sakey</span>
			</div>
			<div className="right">
				<div className="cartElement" onClick={() => setMenuOpen(!menuOpen)}>
					<span>
						Cart
					</span>
					<small>
						<ShoppingCartOutlinedIcon />
					</small>
					<p>3</p>
				</div>
			</div>
		</div>
	)
}

export default Topbar
