import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="mt-1 mb-20 flex items-center justify-between py-6 lg:mt-5 lg:px-20 ">
    <div className="flex flex-shrink-0 items-center" >
        <img className="mx-2 w-20" src={logo} alt="logo"/>
    </div>
    <div className="mx-4 lg:mx-8 flex items-center justify-center gap-4 text-2xl  text-white" >
        <a href="https://www.linkedin.com/in/malavika-m-540b8a29a/ "
        target="_blank"
        rel="noopener noreferer">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/malavika58"
        target="_blank"
        rel="noopener noreferer">
          <FaGithub/>
        </a>
        <a href="https://www.instagram.com/malavika58_?igsh=c2E3aHd0aDZzdm53"
        target="_blank"
        rel="noopener noreferer">
          <FaInstagram/>
        </a>
    </div>

    </nav>
  )
}

export default Navbar
