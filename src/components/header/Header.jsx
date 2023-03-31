import { useState } from 'react';
import { StyledHeader, HeaderTop, HeaderTitle } from './styles';
import MenuIcon from '../menu-icon/MenuIcon';
import Menu from '../menu/Menu';

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledHeader>
			<HeaderTop>
				<HeaderTitle>THE PLANETS</HeaderTitle>
				<Menu setOpen={setOpen} open={open} />
				<MenuIcon open={open} setOpen={setOpen} />
			</HeaderTop>
		</StyledHeader>
	);
};

export default Header;
