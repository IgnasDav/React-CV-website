//Styles
import { Wrapper } from "./Button.style";

const Button = ({ children }) => {
  return (
    <Wrapper>
      <button>{children}</button>
    </Wrapper>
  );
};
export default Button;
