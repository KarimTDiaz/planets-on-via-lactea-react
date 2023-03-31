import {
	StyledSourceLink,
	SourceLinkText,
	SourceLinkUrl,
	SourceLinkIcon
} from './styles';

const SourceLink = ({ url }) => {
	return (
		<StyledSourceLink>
			<SourceLinkText>Source: </SourceLinkText>
			<SourceLinkUrl href={url} target='_blank'>
				Wikipedia
			</SourceLinkUrl>
			<SourceLinkIcon src='/images/icon-source.svg' />
		</StyledSourceLink>
	);
};

export default SourceLink;
