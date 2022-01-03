//styles
import { Wrapper, Text, Content } from "./List.style";

const List = ({ list, title }) => (
  <Wrapper>
    <Text>{title}</Text>
    <Content>
      {list.map((listItem, i) => (
        <li key={i}>{listItem}</li>
      ))}
    </Content>
  </Wrapper>
);

export default List;
