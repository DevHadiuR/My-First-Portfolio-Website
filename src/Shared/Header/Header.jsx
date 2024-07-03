import styled from "styled-components";
import { Link as LinkR, NavLink } from "react-router-dom";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { DiCssdeck } from "react-icons/di";
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#intro"
          className="flex items-center  transition-colors hover:text-secondary"
        >
          Intro
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#about"
          className="flex items-center  transition-colors hover:text-secondary"
        >
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#skills"
          className="flex items-center  transition-colors hover:text-secondary"
          // style={({ isActive }) => {
          //   return {
          //     color: isActive && "2px solid text-secondary",
          //   };
          // }}
        >
          Skills
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#achievments"
          className="flex items-center  transition-colors hover:text-secondary"
        >
          Achievments
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#projects"
          className="flex items-center  transition-colors hover:text-secondary"
        >
          Projects
        </a>
      </Typography>

      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#education"
          className="flex items-center  transition-colors hover:text-secondary"
        >
          Education
        </a>
      </Typography>
    </ul>
  );
}

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Nav className="px-0 py-3 border-0 max-w-full ">
      <Navbar className="flex items-center justify-between px-6 max-w-screen-xl mx-auto bg-transparent bg-[#191924] border-0">
        <NavLogo to="/">
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            {/* <DiCssdeck size="3rem" />{" "} */}
            <p className="text-3xl flex justify-between items-center">
              <span className="mr-2 text-secondary font-semibold">{"<"}</span>
              <span className="font-signature text-xl md:text-3xl">
                {" "}
                Hadiur
                <span className="mx-2 text-secondary ">\</span>
                Rahman
              </span>
              <span className="ml-3 text-secondary font-semibold">{">"}</span>
            </p>
          </h1>
        </NavLogo>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </Navbar>
      <Collapse open={openNav}>
        <div className="bg-[#191924] p-4">
          <NavList />
        </div>
      </Collapse>
    </Nav>
  );
};

export default Header;
