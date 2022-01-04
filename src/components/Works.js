//Components
import PageSlider from "./PageSlider";
import Banner from "./Banner";
import Info from "./Info";
import InfoCard from "./InfoCard";
//Photos
import BannerPhoto from "../images/banner-4.jpg";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card7.png";
import card8 from "../images/card8.png";
const Works = () => {
  return (
    <PageSlider>
      <Banner img={BannerPhoto} alt="Coding photo" />
      <Info
        title="Works."
        text="Works that I have done throughout studying in CodeAcademy and on my own."
      />
      <InfoCard
        title="Node.js/Express server with JWT authorization and minimal front-end."
        text="Here is the project I've done for Node.js course where I used Mongo.db and bcrypt to encrypt user passwords, JWT to authorize logins. Users which are logged in are able to see posts, delete button appears for the posts that are made by that user."
        img={card5}
        btnText="See Gtihub"
        btnHref="https://github.com/IgnasDav/Node.js-Authorization-Password-project"
      />
      <InfoCard
        isTextLeft
        title="React.js Felix movie app."
        text="Project that I am currently doing for React course, implementing react-router-dom, using class components and functional components with hooks, adding page optimization by saving state to localStorage."
        img={card6}
        btnText="See Github"
        btnHref="https://github.com/IgnasDav/React.js-Felix-movie-app"
      />
      <InfoCard
        title="React.js Cv page example."
        text="Project where I learnt how to divide and use React components, use state and send it down with props to change language select. In this page we are able to switch between English and Lithuanian language."
        btnText="See Github"
        img={card7}
        btnHref="https://github.com/IgnasDav/React.js-Resume-Site-Example"
      />
      <InfoCard
        isTextLeft
        title="Weather app with vanilla JavaScript"
        text="This was created as a graduation project from JavaScript course where I tried to use fetch, added delete and favorite functionalities, added dragability of the weather cards, but it has some bugs. There is a video slideshow where it shows 4-6 videos of cities and it's weather data in the corners. There is a search bar where you can type in a city and a card will appear with that cities weather data."
        img={card8}
        btnText="See Github"
        btnHref="https://github.com/IgnasDav/JavaScript-Umbrella-Weather-website"
      />
    </PageSlider>
  );
};
export default Works;
