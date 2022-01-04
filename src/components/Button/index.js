//Styles
import { Link } from "react-router-dom";
import { Wrapper } from "./Button.style";

const Button = ({ children, btnTo, btnHref }) => {
  const Component = typeof btnTo === "string" ? Link : "button";
  return (
    <Wrapper>
      {btnHref ? (
        <a href={btnHref} target="_blank" rel="noreferrer">
          <Component>{children}</Component>
        </a>
      ) : (
        <Component>{children}</Component>
      )}
    </Wrapper>
  );
};
export default Button;
