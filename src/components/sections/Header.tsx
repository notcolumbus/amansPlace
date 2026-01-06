import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

function Header() {
    return (
        <div className="py-20">
            <h1 className="rammetto-one-regular text-6xl text-white">
                Aman Anwar
            </h1>
            <h2 className="text-2xl text-white pt-2">
I’m a 2nd-year CS major at Virginia Tech. I love all things audio and currently lead a 5-person team on spatial audio research at VT. I’m an incoming SWE intern at Knot and a research intern at the IDOPT Lab on the NASA RAM project.</h2>
            <div className="flex gap-4 pt-6">
                <FaLinkedinIn className="social-icon" />
                <PiGithubLogoFill className="social-icon" />
                <SiDevpost className="social-icon" />
                <FaYoutube className="social-icon" />
                <RiTwitterXLine className="social-icon" />
                <RiInstagramFill className="social-icon" />
            </div>
        </div>
    )
}
export default Header