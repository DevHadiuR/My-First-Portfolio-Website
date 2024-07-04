import img1 from "../../assets/project-images/102.png";
import img2 from "../../assets/project-images/PHA11.png";
import img3 from "../../assets/project-images/PHA12.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import "./animatedbtn.css";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: img3,
      title: "NovaHomes",
      desc: "NovaHomes is a ultimate solution for real estate management. Whether a person looking to buy, sell, or rent properties, NovaHomes provides a seamless and user-friendly platform to meet all your real estate needs.",
      serverLink:
        "https://github.com/DevHadiuR/PHA12-NovaHomes-Proj-Server-Side.git",
      clientLink:
        "https://github.com/DevHadiuR/PHA12-NovaHomes-Proj-Client-Side.git",
      liveLink: "https://assignment-12-novahomes-proj.web.app/",
    },
    {
      id: 2,
      src: img2,
      title: "TechTrove",
      desc: "Welcome to TechTrove – your ultimate destination for the latest in technology and innovation.",
      serverLink:
        "https://github.com/DevHadiuR/PHA11-TechTrove-Proj-Server-Side.git",
      clientLink:
        "https://github.com/DevHadiuR/PHA11-TechTrove-Proj-Client-Side.git",
      liveLink: "https://assignment-11-techtrove-proj.web.app/",
    },
    {
      id: 3,
      src: img1,
      title: "MaesTria",
      desc: "MaesTria is a website dedicated to the art of Sculpture and Modeling. It serves as a platform for artists and enthusiasts to explore, showcase, and discover sculptures of various styles and materials.",
      serverLink:
        "https://github.com/DevHadiuR/-PHA10-MaesTria-Proj-Server-Side.git",
      clientLink:
        "https://github.com/DevHadiuR/PHA10-MaesTria-Proj-Client-Side.git",
      liveLink: "https://assignment-10-sculpture-proj.web.app/",
    },
  ];

  return (
    <div id="projects" name="projects" className="w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 font-serif text-lg opacity-90">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(
            ({ id, src, title, desc, serverLink, clientLink, liveLink }) => (
              <Card
                key={id}
                className="mt-6 rounded-lg bg-[#171721] text-white shadow-pink-300 flex flex-col"
              >
                <CardHeader className="relative h-72">
                  <img
                    className="rounded-md duration-200 hover:scale-105"
                    src={src}
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody className="flex-grow">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 text-white"
                  >
                    {title}
                  </Typography>
                  <Typography className="opacity-90 ">{desc}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <div className="flex justify-between gap-3">
                    <a
                      href={clientLink}
                      className="p-0 w-full py-2 rounded-md duration-200 hover:scale-105"
                    >
                      <Button
                        className="p-0 w-full py-2"
                        variant="gradient"
                        color="purple"
                      >
                        Client Code
                      </Button>
                    </a>
                    <a
                      href={serverLink}
                      className="p-0 w-full rounded-md py-2  duration-200 hover:scale-105"
                    >
                      <Button
                        className="p-0 w-full py-2"
                        variant="gradient"
                        color="pink"
                      >
                        Server Code
                      </Button>
                    </a>
                  </div>
                  <a href={liveLink}>
                    <Button
                      size="lg"
                      variant="outlined"
                      className="w-full mt-3 p-0 py-2 duration-200 hover:scale-105 wavy-button"
                    >
                      Website Demo
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
