import { StyledText } from "./styles"

const Text = ({ text, size }) => {
    return <StyledText size={size}>{text}</StyledText>
}

export default Text