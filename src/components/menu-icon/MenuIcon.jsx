import { StyledMenuIcon } from './styles';

const MenuIcon = ({ open, setOpen }) => {
	return (
		<StyledMenuIcon
			onClick={() => setOpen(!open)}
			src={open ? '/images/x-solid.svg' : '/images/icon-hamburger.svg'}
		/>
	);
};
export default MenuIcon;
