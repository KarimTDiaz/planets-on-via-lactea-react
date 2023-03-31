import { StyledDetailsItem, DetailsProperty, DetailsValue } from './styles';

const Details = ({ property, value }) => {
    return (
        <StyledDetailsItem>
            <DetailsProperty>{property.toUpperCase()}</DetailsProperty>
            <DetailsValue>{value.toUpperCase()}</DetailsValue>
        </StyledDetailsItem>
    );
};

export default Details;
