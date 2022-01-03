//styles
import { Wrapper } from "./Footer.style";

const Footer = () => (
  <Wrapper>
    <p>
      Connect with me on{" "}
      <a
        href="https://www.linkedin.com/in/ignas-davulis-883818223/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </p>
    <p>
      Check my works on{" "}
      <a href="https://github.com/IgnasDav" target="_blank" rel="noreferrer">
        Github{" "}
      </a>
    </p>
    <a href="https://www.orestisgeorgiou.com/" target="_blank" rel="noreferrer">
      <div className="square">
        <p>Design from Here</p>
      </div>
    </a>{" "}
  </Wrapper>
);
export default Footer;
