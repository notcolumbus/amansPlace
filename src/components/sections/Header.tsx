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
                Aman's Place
            </h1>
            <h2 className="text-xl pt-2 atkinson-hyperlegible-next-regular" style={{ color: '#fcecc9' }}>
I’m a 2nd-year CS major at Virginia Tech. I love all things audio and currently lead a 5-person team on spatial audio research at VT. I’m an incoming SWE intern at Knot and a research intern at the IDOPT Lab on the NASA RAM project.</h2>
            <div className="flex gap-4 pt-6">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="social-icon" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogoFill className="social-icon" />
                </a>
                <a href="https://devpost.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <SiDevpost className="social-icon" />
                </a>
                <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <RiTwitterXLine className="social-icon" />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill className="social-icon" />
                </a>
            </div>
        </div>
    )
}
export default Header