//styles
import { Wrapper, Content } from "./ContactCard.style";
//Photo
import ProfilePictue from "../../images/profilePicture3.jpeg";
const ContactCard = ({ src }) => (
  <Wrapper>
    <Content>
      <div className="info">
        <div className="name">
          <h3>Ignas</h3>
          <h3>Davulis</h3>
        </div>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/ignas-davulis-883818223/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
          </a>
          <a
            href="https://github.com/IgnasDav"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-github"></i>
            <h3>Github</h3>
          </a>
          <a
            href="https://www.facebook.com/IgnasDavulis"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-facebook"></i>
            <h3>Facebook</h3>
          </a>
          <a
            href="https://www.instagram.com/ignas_davulis/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
            <h3>Instagram</h3>
          </a>
        </div>
      </div>
      <img src={ProfilePictue} alt="profile pic" />
    </Content>
  </Wrapper>
);
export default ContactCard;
