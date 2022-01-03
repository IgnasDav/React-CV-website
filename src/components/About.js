//Components
import Banner from "./Banner";
import Info from "./Info";
import InfoCard from "./InfoCard";
import PageSlider from "./PageSlider";
//Photos
import BannerPhoto1 from "../images/banner-3.jpg";
import ProfilePicture2 from "../images/profilePicture2.jpeg";
import Card4 from "../images/card4.jpg";
import List from "./List";

const About = ({ prevPage, page, path }) => {
  return (
    <>
      <PageSlider page={page} prevPage={prevPage} path={path}>
        <Banner img={BannerPhoto1} />
        <Info
          title="About."
          text="I'm passionate about front-end development and the internet"
          optionalText="I really enjoy creating beautiful animated sites with technologies like react, styled-components and framer-motion. I am always looking to expand my knowledge of JavaScript, React, CSS animations. This site was created especially for that, to learn hooks, animations with framer motion, react router dom functionality, dividing my page into reusable components. If you decided to look through my page give yourself a minute to relax and try out my version of tetris."
        />
        <InfoCard
          title="Before. Coding."
          text="As the title says, before coding I thought I would pursue a career in Fashion management, but after studying for half a year I thought that it was to easy and there weren;t enough challenges to pursue this career further, and then I remmebered I was fascinated with computers and coding so I enrolled into programming and multimedia."
          img={ProfilePicture2}
          alt="Profile picture"
        />
        <InfoCard
          isTextLeft
          title="Me. Coding."
          text="I discovered front end when i was 17 - 18 years old, in a class. We were learning CSS/HTML and when I saw that we could put our styles, a bit of ourselves into a webpage it amazed me. How I could put colors that I wanted into a webpage, create my own buttons, boxes, tables, nav menu, I thought I could do anything with CSS/HTML, but now thinking back I wonder why I didn't try to learn more about web development, but after graduotion out of school I started working in 'part-time' jobs and after 3 years I decided to come back to front-end and re-learn everything from the start. I started with Jonas Schmedtmann Udemy courses and then enrolled into CodeAcademy so I could get exercises from lectures because I couldn't think of any tasks I could do. And now here I am creating a CV Website with React .    "
          img={Card4}
          alt="Code picture"
        />
        {[
          {
            title: "Front-end skills",
            skills: [
              "HTML",
              "CSS",
              "JavaScript",
              "BEM",
              "Node.Js",
              "Express",
              "MongoDB",
              "React",
              "Styled-components",
              "React-router-dom",
              "Framer-motion",
            ],
          },
        ].map((item, i) => (
          <List title={item.title} list={item.skills} key={i} />
        ))}
      </PageSlider>
    </>
  );
};
export default About;
