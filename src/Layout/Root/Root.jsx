import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../../utils/Themes";
import HeroSection from "../../components/heroSection/HeroSection";
import SocialLinks from "../../components/socialLinks/SocialLinks";
import Projects from "../../components/projects/Projects";
import Education from "../../components/education/Education";
import Contacts from "../../components/contacts/Contacts";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  hight: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Root = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header></Header>
      <Body>
        <HeroSection></HeroSection>
        <Wrapper>
          <Outlet></Outlet>
        </Wrapper>
        <Projects></Projects>
        <Wrapper>
          <Education></Education>
          <Contacts></Contacts>
        </Wrapper>
      </Body>
      <Footer></Footer>

      <SocialLinks></SocialLinks>
    </ThemeProvider>
  );
};

export default Root;
