import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import "./socialLinksAnimate.css";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 2,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/theyashpatel",
    },

    {
      id: 5,
      child: (
        <>
          01611640847
          <IoCallOutline size={30} />
        </>
      ),

      style: "rounded-br-md",
    },
  ];

  const handleCall = ({ id }) => {
    if (id === 5) {
      // Assuming id 5 corresponds to the phone number item
      window.location.href = "tel:01611640847"; // Replace with your actual phone number
    }
  };

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 li-background" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              onClick={() => handleCall(id)}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
