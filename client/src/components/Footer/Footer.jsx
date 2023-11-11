import './Footer.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="left">left</div>
				<div className="right">
					<FacebookOutlinedIcon/>
				</div>
			</div>
			<div className="bottom">
				<span>&copy; By Mrami</span>
			</div>
		</div>
	)
}

export default Footer
