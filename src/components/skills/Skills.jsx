import html from "../../assets/Skills-Image/html.png";
import css from "../../assets/Skills-Image/css.png";
import javascript from "../../assets/Skills-Image/javascript.png";
import express from "../../assets/Skills-Image/express.png";
import github from "../../assets/Skills-Image/github.png";
import mongodb from "../../assets/Skills-Image/mongodb.png";
import node from "../../assets/Skills-Image/node.png";
import react from "../../assets/Skills-Image/react.png";
import tailwind from "../../assets/Skills-Image/tailwind.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-700",
    },
    {
      id: 6,
      src: express,
      title: "Express Js",
      style: "shadow-gray-600",
    },
    {
      id: 7,
      src: mongodb,
      title: "Mongo Db",
      style: "shadow-brown-400",
    },
    {
      id: 8,
      src: node,
      title: "Node Js",
      style: "shadow-green-400",
    },

    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <Container id="skills" name="skills" className="mt-24 w-full h-screen">
        <Wrapper>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            My Skills
          </p>
          <p className="py-6 font-serif text-lg">
            Here are some of my skills on which I have been learning on for the
            past few months.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
