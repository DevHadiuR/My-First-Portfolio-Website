import { Button } from "@material-tailwind/react";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" name="about" className="w-full mt-24   text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-2xl mt-20 font-serif opacity-90">
          <span className="font-bold"> My Background : </span> <br /> <br />
          Hello! I'm Md Hadiur Rahman Al Adib, a front-end developer with a
          passion for creating dynamic and user-friendly web applications. Over
          the past year, I've immersed myself in learning HTML, CSS, JavaScript,
          and React, building a strong foundation in these technologies. I love
          working in collaborative environments and am always eager to learn and
          grow. My journey in web development has been exciting, and I am
          committed to staying updated with the latest trends and best practices
          in the industry.
        </p>

        {isExpanded && (
          <>
            <p className="text-2xl mt-20 font-serif opacity-90">
              <span className="font-bold"> My Goals and Interests : </span>{" "}
              <br /> <br />
              My primary goal is to master Next.js, focusing on server-side
              rendering, static site generation, and API routes. I aim to build
              a portfolio showcasing my Next.js skills. I am also dedicated to
              learning GSAP, Three.js, and Framer Motion to create visually
              appealing and interactive web applications with advanced
              animations and 3D graphics.
              <br />
              Learning TypeScript and Redux is another key objective, enabling
              me to write more reliable and maintainable code and manage state
              efficiently in complex React applications. I also plan to dive
              into backend development with Node.js, Express.js, and MongoDB to
              build robust server-side applications.
              <br />I am passionate about web development, enjoying the creation
              of responsive, user-friendly web applications and experimenting
              with new technologies and frameworks. I have a keen interest in
              interactive UI/UX design and improving user experiences through
              thoughtful design and smooth interactions.
            </p>
            <p className="text-2xl mt-20 font-serif opacity-90">
              <span className="font-bold"> My Educations : </span> <br /> <br />
              I completed my Secondary School Certificate (SSC) in 2020 with a
              GPA of 4.50 and my Higher Secondary Certificate (HSC) in 2022 with
              a GPA of 4.92, both with a science background. Currently, I am
              pursuing a BSc (Hons) degree in Mathematics and am in my first
              semester.
            </p>
            <p className="text-2xl mt-20 font-serif opacity-90">
              <span className="font-bold"> My Journey and Aspirations : </span>{" "}
              <br /> <br />
              From a young age, I have been interested in the IT sector,
              including application development, web development, and AI. I
              regret not starting to learn earlier, but I am now committed to my
              goals. Thanks to the Programming Hero team, I have completed a
              frontend-focused web development course, which has been
              instrumental in my journey.
              <br />I have another dream that I am determined to achieve:
              working in Germany. To this end, I am currently learning the
              German language.
            </p>
            <p className="text-2xl mt-20 font-serif opacity-90">
              <span className="font-bold"> Conclusion : </span> <br /> <br />I
              am committed to lifelong learning and professional development,
              always eager to explore new technologies, frameworks, and
              programming languages. I enjoy working in team environments and
              participating in developer communities to share knowledge and
              learn from others. My journey in web development has just begun,
              and I am excited about the future and the opportunities it holds.
              Thank you for taking the time to learn about me.
            </p>
          </>
        )}
        <div className="mt-10 flex justify-center">
          <Button
            variant="outlined"
            color="pink"
            size="md"
            onClick={toggleExpand}
            className="text-white shadow-pink-300 shadow-md hover:bg-pink-400"
          >
            {isExpanded ? "See less" : "See more"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
