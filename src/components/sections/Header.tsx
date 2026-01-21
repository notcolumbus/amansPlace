import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

function Header() {
    return (
        <div className="pt-15">
            <h1 className="rammetto-one-regular text-5xl text-white">
                Aman Anwar
            </h1>
            <h2 className="text-xl pt-2 atkinson-hyperlegible-next-regular" style={{ color: '#fcecc9' }}>
I’m a 2nd-year CS major at Virginia Tech. I love all things audio and currently lead a 5-person team on spatial audio research at VT. I’m an incoming SWE intern at Knot and a research intern at the IDOPT Lab on the NASA RAM project.</h2>
            <div className="flex gap-4 pt-6">
                <a href="https://www.linkedin.com/in/aman-anwar-/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="social-icon" />
                </a>
                <a href="https://github.com/notcolumbus" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogoFill className="social-icon" />
                </a>
                <a href="https://devpost.com/aman-anwar18oct" target="_blank" rel="noopener noreferrer">
                    <SiDevpost className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@amananwar7421" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon" />
                </a>
                <a href="https://x.com/Not_Columbus" target="_blank" rel="noopener noreferrer">
                    <RiTwitterXLine className="social-icon" />
                </a>
                <a href="https://www.instagram.com/notorious.columbus/" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill className="social-icon" />
                </a>
            </div>
        </div>
    )
}
export default Header