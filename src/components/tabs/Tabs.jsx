import { StyledTabs, TabsItem } from './styles';
import { TABS } from '../../constants/tabs';

const Tabs = ({ tab, setTab, color }) => {
	return (
		<StyledTabs>
			{TABS.map((element, index) => (
				<TabsItem
					color={color}
					key={element.id}
					onClick={() => setTab(index)}
					isActive={tab === index}
				>
					{element.mobile.toUpperCase()}
				</TabsItem>
			))}
		</StyledTabs>
	);
};

export default Tabs;
