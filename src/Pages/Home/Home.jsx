import { Helmet } from "react-helmet-async";
import Education from "../../components/education/Education";
import Achievments from "../../components/achievments/Achievments";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hadiur Rahman</title>
      </Helmet>
      <Education></Education>,<Achievments></Achievments>
    </div>
  );
};

export default Home;
