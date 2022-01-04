//Styles
import { Link } from "react-router-dom";
import { Wrapper } from "./Button.style";

const Button = ({ children, to, btnHref }) => {
  const Component = typeof to === "string" ? Link : "button";
  return (
    <Wrapper>
      {btnHref ? (
        <a href={btnHref} target="_blank" rel="noreferrer">
          <Component>{children}</Component>
        </a>
      ) : (
        <Component to={to}>{children}</Component>
      )}
    </Wrapper>
  );
};
export default Button;
