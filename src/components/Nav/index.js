import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content, Logo, Menu } from "./Nav.style";

const Nav = ({ page, setPage }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo>
            <span className="flex">
              <span className="big">I</span>
              <span className="text">
                <span>gnas</span> <span>Davu</span>
                <span>lis.</span>
              </span>
            </span>
          </Logo>
        </Link>
        <Menu>
          <ul>
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  setPage(e.target.textContent);
                }}
              >
                home.
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={(e) => {
                  setPage(e.target.textContent);
                }}
              >
                about.
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                onClick={(e) => {
                  setPage(e.target.textContent);
                }}
              >
                works.
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={(e) => setPage(e.target.textContent)}
              >
                contact.
              </Link>
            </li>
            <li>
              <Link to="/tetris" onClick={(e) => setPage(e.target.textContent)}>
                tetris.
              </Link>
            </li>
          </ul>
        </Menu>
      </Content>
    </Wrapper>
  );
};
export default Nav;
