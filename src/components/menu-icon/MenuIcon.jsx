import { StyledMenuIcon } from './styles';

const MenuIcon = ({ open, setOpen }) => {
	return (
		<StyledMenuIcon
			onClick={() => setOpen(!open)}
			src={open ? '/images/icon-hamburger.svg' : '/images/x-solid.svg'}
		/>
	);
};
export default MenuIcon;
