//Styles
import { Wrapper, Card, Image, Content } from "./InfoCard.style";
//Components
import Button from "../Button";
const InfoCard = ({
  img,
  title,
  text,
  alt,
  btnText,
  isTextLeft,
  paddingTop,
  paddingBottom,
  className,
}) => (
  <Wrapper paddingTop={paddingTop} paddingBottom={paddingBottom}>
    <Content>
      {isTextLeft ? (
        <>
          <Card isTextLeft={isTextLeft}>
            <h2>{title}</h2>
            <p>{text}</p>
            {btnText && <Button>{btnText}</Button>}
          </Card>
          <Image
            src={img}
            alt={alt}
            isTextLeft={isTextLeft}
            className={className}
          />
        </>
      ) : (
        <>
          <Image
            src={img}
            alt={alt}
            isTextLeft={isTextLeft}
            className={className}
          />
          <Card isTextLeft={isTextLeft}>
            <h2>{title}</h2>
            <p>{text}</p>
            {btnText && <Button>{btnText}</Button>}
          </Card>
        </>
      )}
    </Content>
  </Wrapper>
);
export default InfoCard;
