import { NavLink } from "react-router-dom";
//Styles
import { Wrapper, Content, Logo, Menu } from "./Nav.style";

const Nav = ({ page, setPage }) => {
  return (
    <Wrapper>
      <Content>
        <NavLink to="/">
          <Logo>
            <span className="flex">
              <span className="big">I</span>
              <span className="text">
                <span>gnas</span> <span>Davu</span>
                <span>lis.</span>
              </span>
            </span>
          </Logo>
        </NavLink>
        <Menu>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  setPage(e.target.textContent);
                }}
              >
                home.
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={(e) => {
                  setPage(e.target.textContent);
                }}
              >
                about.
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                onClick={(e) => {
                  setPage(e.target.textContent);
                }}
              >
                works.
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={(e) => setPage(e.target.textContent)}
              >
                contact.
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tetris"
                onClick={(e) => setPage(e.target.textContent)}
              >
                tetris.
              </NavLink>
            </li>
          </ul>
        </Menu>
      </Content>
    </Wrapper>
  );
};
export default Nav;
