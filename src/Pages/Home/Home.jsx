import { Helmet } from "react-helmet-async";
import Education from "../../components/education/Education";
import Achievments from "../../components/achievments/Achievments";
import WhoAmI from "../../components/whoAmI/WhoAmI";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hadiur Rahman</title>
      </Helmet>
      <WhoAmI></WhoAmI>
      <div>
        <About></About>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Achievments></Achievments>
      </div>
    </div>
  );
};

export default Home;
