import { useState } from 'react';
import { StyledHeader, HeaderTop, HeaderTitle } from './styles';
import MenuIcon from '../menu-icon/MenuIcon';
import Menu from '../menu/Menu';

const Header = () => {
	const [open, setOpen] = useState(true);
	return (
		<StyledHeader>
			<HeaderTop>
				<HeaderTitle>THE PLANETS</HeaderTitle>
				<Menu />
				<MenuIcon open={open} setOpen={setOpen} />
			</HeaderTop>
		</StyledHeader>
	);
};

export default Header;
