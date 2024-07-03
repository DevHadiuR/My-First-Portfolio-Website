import { Helmet } from "react-helmet-async";
import Education from "../../components/education/Education";
import Achievments from "../../components/achievments/Achievments";
import WhoAmI from "../../components/whoAmI/WhoAmI";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hadiur Rahman</title>
      </Helmet>
      <WhoAmI></WhoAmI>
      <Education></Education>
      <Achievments></Achievments>
    </div>
  );
};

export default Home;
