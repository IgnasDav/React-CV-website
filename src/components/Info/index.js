import { Wrapper } from "./Info.style";

const Info = ({ title, text, optionalText }) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{text}</p>
    {optionalText && <p className="optional">{optionalText}</p>}
  </Wrapper>
);

export default Info;
