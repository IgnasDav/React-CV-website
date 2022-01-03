import { motion } from "framer-motion";
//Components
import Banner from "./Banner";
import Info from "./Info";
import InfoCard from "./InfoCard";
//Photo
import BannerPhoto1 from "../images/banner-2.jpg";
import ProfilePicture from "../images/profilePicture1.JPG";
import BannerPhoto2 from "../images/treePicture.jpeg";
import CardPhoto1 from "../images/card1.jpg";
import CardPhoto2 from "../images/card2.jpg";
import CardPhoto3 from "../images/card3.jpg";

const Home = ({ prevPage, page }) => {
  return (
    <>
      <motion.div
        initial={{ transform: "translateX(-100%)" }}
        animate={{ transform: "translateX(0)" }}
        exit={{ transform: "translateX(-100%)" }}
      >
        <Banner img={BannerPhoto1} alt="Front end image" />
        <Info
          title="Ignas Davulis"
          text="I am an aspiring front-end engineer, ready to learn and work with technologies like React, Node.js, JavaScript. Currently studying advanced course of Front-End at CodeAcademy"
        />
        <InfoCard
          paddingTop
          paddingBottom
          img={ProfilePicture}
          alt="profile picture"
          title="developer. creator. fashionista."
          text="My work experience is in my github, link is in the footer. I am a aspiring Front-end engineer who is excited to work on new technologies like React.js, Vue.js, Angular. My next project is Trello copy, which I named Frello. I am a Front-End student at CodeAcademy, I am currently studying React.js, I have worked on projects like Address book app, where I had to save addresses to local storage, make features like delete, edit, add favorite current item and search functionality. Worked on a project where I used Bcrypt to encrypt passwords, used JWT to authorize logins using Node.js, the app shows delete buttons for the user which is logged in and who made the posts. Made simple resume website with React.js, where you can change languages by changing the state of language select . My all work experience with front end is pushed to my Github account. My other work experience is as a bar assistant where I learnt how to work as a team, communicate with people, and how to separate my work into small tasks."
          btnText="More About Ignas"
        />
        <Banner height img={BannerPhoto2} alt="Tree picture" />
        <InfoCard
          paddingTop
          img={CardPhoto1}
          alt="Front end development photo"
          title="works."
          text="Here are the works that I've done throughout my short career as a front end developer. These works helped me to learn async/await, JWT authorization, save to local storage, delete, edit, add functionalities. "
          btnText="Read More"
        />
        <InfoCard
          img={CardPhoto2}
          alt="Front end development photo"
          title="Tetris."
          text="As Front-end is my biggest passion I decided to develop tetris using React to showcase my skills and I wanted to put a little part of me into making this website my own.    "
          btnText="Play Tetris"
          isTextLeft
        />
        <InfoCard
          img={CardPhoto3}
          alt="Front end development photo"
          title="about."
          text="This section shows a little about me, my hobbies, interests and what I'm looking for in my career"
          btnText="Read More"
          paddingBottom
        />
      </motion.div>
    </>
  );
};
export default Home;
